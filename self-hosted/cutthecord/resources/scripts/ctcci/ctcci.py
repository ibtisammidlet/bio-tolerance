#!/usr/bin/env python3
import os
import sys
import shutil
import json
import subprocess
from ctcconfig import *

print("Welcome to CutTheCord CI :)")

BRANCH = sys.argv[1]
PATCHES = sys.argv[2:]
FORCE = False
DEFAULT_PATCHES = ["necessary", "branding", "customversion"]
OPTIONAL_PATCHES = ["necessary", "blobs"]

def xmlpatch(patch_file, workdir, patch_name=""):
    if not os.path.exists(patch_file):
        # Allow missing patches
        return

    print(f"Applying {patch_file}")

    subprocess.run(f"{XML_PATCH_BIN} com.github.dnault.xmlpatch.BatchPatcher --patch {patch_file} --srcdir {workdir}",
                   shell=True, check=True, cwd=workdir)

def patch(patch_file, workdir, patch_name=""):
    if not os.path.exists(patch_file):
        # Allow missing patches
        return

    print(f"Applying {patch_file}")

    subprocess.run(f"patch -p1 --no-backup-if-mismatch -i {patch_file}",
                   shell=True, check=True, cwd=workdir)


# Wipe and recreate the working folder
if os.path.exists(WORK_APK_PATH):
    shutil.rmtree(WORK_APK_PATH)

os.environ["DISTOK_EXTRACTED_DISCORD_PATH"] = WORK_APK_PATH

os.makedirs(WORK_FOLDER, exist_ok=True)

with open(os.path.join(REPO_FOLDER, "resources/patchport-state.json")) as f:
    STATE = json.load(f)
    VERSION = STATE["versioncode"]

BASE_APK_PATH = os.path.join(WORK_FOLDER, f"discord-base-{VERSION}")
BASE_JAR_PATH = os.path.join(WORK_FOLDER, f"discord-base-{VERSION}-jar")
# Wipe and recreate the base jar folder
if os.path.exists(BASE_JAR_PATH):
    shutil.rmtree(BASE_JAR_PATH)

# Prepare names of input and output APKs
INPUT_FILE = os.path.join(DISTOK_FOLDER, "android",
                          f"{PACKAGE_ID}-{VERSION}.apk")
# OUTPUT_FILE = os.path.join(RESULT_FOLDER,
#                            f"cutthecord-{VERSION}-{'_'.join(PATCHES)}.apk")
OUTPUT_FILE = os.path.join(RESULT_FOLDER,
                           f"cutthecord-{VERSION}-{BRANCH}.apk")

# Add necessary patches to the list of patches that will be applied
# Important to have this after the output file name generation
# otherwise it'll include it, which is not wanted
PATCHES = DEFAULT_PATCHES + PATCHES

print(f"Branch: {BRANCH}, output name: {OUTPUT_FILE}")

# Check if the version is already patched, if it is exit
if not FORCE and os.path.exists(OUTPUT_FILE):
    print("This version is already patched, bye!")
    sys.exit(1)

if DO_GITPULL:
    # Update cutthecord
    subprocess.run("git pull", shell=True, cwd=REPO_FOLDER)

# Extract the APK if it's not already extracted to base cache
if not os.path.exists(BASE_APK_PATH):
    subprocess.run(f"{APKTOOL_BIN} d --no-dummy {INPUT_FILE} -o {BASE_APK_PATH} -f",
                   shell=True,
                   cwd=WORK_FOLDER)

# Convert the dexs to a jar (for slashcommands etc) TODO versionise gradle/this
if not os.path.exists(BASE_JAR_PATH):
    subprocess.run(f"unzip -j {INPUT_FILE} *.dex -d {BASE_JAR_PATH}", shell=True, cwd=WORK_FOLDER)
    subprocess.run(f"{DEX2JAR_BIN} *.dex", shell=True, cwd=BASE_JAR_PATH)
    subprocess.run(f"zipmerge discord-base.jar classes*dex2jar.jar", shell=True, cwd=BASE_JAR_PATH)

# Copy the base cache to work on it
shutil.copytree(BASE_APK_PATH, WORK_APK_PATH)

# Go through patches and apply every single one of them
for patch_name in PATCHES:
    pre_script = os.path.join(REPO_FOLDER, "resources/patches", patch_name, f"{VERSION}-pre.sh")
    if os.path.exists(pre_script):
        subprocess.run(f"bash {pre_script}", shell=True, cwd=WORK_APK_PATH)
    pre_script = os.path.join(REPO_FOLDER, "resources/xmlpatches", patch_name, f"{VERSION}-pre.sh")
    if os.path.exists(pre_script):
        subprocess.run(f"bash {pre_script}", shell=True, cwd=WORK_APK_PATH)

    # Apply custom emoji patches
    if patch_name in ["mutant", "blobs"]:
        print(f"Applying {patch_name} emoji patch")
        patch_script = os.path.join(REPO_FOLDER, "resources/patches", patch_name, "emojireplace.py")
        subprocess.run(f"{PYTHON_BIN} {patch_script}", shell=True, cwd=WORK_APK_PATH)

    # Apply custom emoji patches
    elif patch_name == "customtheme":
        print(f"Applying splash patch")
        splash = os.path.join(REPO_FOLDER, "resources/patches", patch_name, "asset_loading.png")
        patch_script = os.path.join(REPO_FOLDER, "resources/patches", patch_name, "fixsplash.sh")

        subprocess.run(f"bash {patch_script} {splash}", shell=True, cwd=WORK_APK_PATH)

    patch_file = os.path.join(REPO_FOLDER, "resources/patches", patch_name, f"{VERSION}.patch")
    xml_patch_file = os.path.join(REPO_FOLDER, "resources/xmlpatches", patch_name, f"{VERSION}.xml")

    # Apply custom version patches
    if patch_name == "customversion":
        print(f"Applying custom version")
        patch_script = os.path.join(REPO_FOLDER, "resources/patches", patch_name, "addpatch.py")

        subprocess.run(f"{PYTHON_BIN} {patch_script} {patch_file} "
                       f"{' '.join(PATCHES)}",
                       shell=True,
                       cwd=WORK_APK_PATH)

        patch(patch_file.replace(".patch", "-custom.patch"), WORK_APK_PATH)
    # Apply branding patches
    elif patch_name == "branding":
        print(f"Applying branding icon patch")
        if BRANCH in ICONS:
            shutil.copyfile(ICONS[BRANCH],
                            os.path.join(WORK_APK_PATH, "res", "mipmap-xxxhdpi", "logo_debug.png"))
        elif "default" in ICONS:
            shutil.copyfile(ICONS["default"],
                            os.path.join(WORK_APK_PATH, "res", "mipmap-xxxhdpi", "logo_debug.png"))

        if BRANCH in DYN_ICONS:
            shutil.copyfile(DYN_ICONS[BRANCH]["fg"],
                            os.path.join(WORK_APK_PATH, "res", "mipmap-xxxhdpi", "ic_launcher_foreground.png"))
        elif "default" in ICONS:
            shutil.copyfile(DYN_ICONS["default"]["fg"],
                            os.path.join(WORK_APK_PATH, "res", "mipmap-xxxhdpi", "ic_launcher_foreground.png"))

        patch_script = os.path.join(REPO_FOLDER, "resources/patches", patch_name, "customicon.sh")

        subprocess.run(f"bash {patch_script}", shell=True, cwd=WORK_APK_PATH)

        patch_script = os.path.join(REPO_FOLDER, "resources/patches", patch_name, "customdynamicicon.sh")

        subprocess.run(f"bash {patch_script}", shell=True, cwd=WORK_APK_PATH)

        patch_script = os.path.join(REPO_FOLDER, "resources/patches", patch_name, "addpatch.py")

        # Hell code
        app_name = APP_NAMES.get(BRANCH, APP_NAMES.get("default", "CutTheCord"))

        subprocess.run(f"{PYTHON_BIN} {patch_script} "
                       f"{patch_file} {app_name} {BRANCH}",
                       shell=True,
                       cwd=WORK_APK_PATH)

        patch(patch_file.replace(".patch", "-custom.patch"), WORK_APK_PATH)
    elif patch_name in ["bettertm", "bettertmlight"]:
        print(f"Applying bettertm emoji patch")
        patch_dir = os.path.join(REPO_FOLDER, "resources/patches", patch_name)
        patch_script = os.path.join(REPO_FOLDER, "resources/patches", patch_name, "bettertm.sh")
        subprocess.run(f"bash {patch_script} {patch_dir}", shell=True, cwd=WORK_APK_PATH)
    # Apply custom ringtone
    elif patch_name == "customring":
        print(f"Applying custom ringtone")
        if BRANCH in RINGTONES:
            CUSTOM_RINGTONE = RINGTONES[BRANCH]
        else:
            CUSTOM_RINGTONE = RINGTONES["default"]

        shutil.copyfile(CUSTOM_RINGTONE, os.path.join(WORK_APK_PATH, "res", "raw", "call_ringing.mp3"))
    # Apply custom fonts
    elif patch_name == "customfont":
        print(f"Applying custom font")
        if BRANCH in FONTS:
            fonts = FONTS[BRANCH]
        else:
            fonts = FONTS["default"]

        for font in fonts:
            shutil.copyfile(fonts[font], os.path.join(WORK_APK_PATH, "res", "font", font))
    # Apply any other patches
    else:
        patch(patch_file, WORK_APK_PATH, patch_name)
        xmlpatch(xml_patch_file, WORK_APK_PATH, patch_name)

    post_script = os.path.join(REPO_FOLDER, "resources/patches", patch_name, f"{VERSION}-post.sh")
    if os.path.exists(post_script):
        subprocess.run(f"bash {post_script}", shell=True, cwd=WORK_APK_PATH)
    post_script = os.path.join(REPO_FOLDER, "resources/xmlpatches", patch_name, f"{VERSION}-post.sh")
    if os.path.exists(post_script):
        subprocess.run(f"bash {post_script}", shell=True, cwd=WORK_APK_PATH)

# Pack the APK
subprocess.run(f"{APKTOOL_BIN} b discord",
               shell=True,
               cwd=WORK_FOLDER)

APK_PATH = os.path.join(WORK_FOLDER, "discord",
                        "dist", f"{PACKAGE_ID}-{VERSION}.apk")

# Sign the APK
if DO_APKSIGNER:
    subprocess.run(f"apksigner sign --ks {KEYSTORE_FILE} "
                   f"--ks-key-alias {KEYSTORE_ALIAS} "
                   f"--ks-pass pass:{KEYSTORE_PASS} "
                   f"{APK_PATH}",
                   shell=True,
                   cwd=WORK_FOLDER)
else:
    subprocess.run(f"jarsigner -storepass {KEYSTORE_PASS} -keystore "
                   f"{KEYSTORE_FILE} {APK_PATH} {KEYSTORE_ALIAS}",
                   shell=True,
                   cwd=WORK_FOLDER)

# Copy the result file
shutil.copyfile(APK_PATH, OUTPUT_FILE)

if DO_FDROID:
    # Do fdroid magic
    subprocess.run(f"fdroid update -c",
                   shell=True,
                   cwd=FDROID_FOLDER)

# Wipe caches
shutil.rmtree(WORK_APK_PATH)
print("CutTheCord CI has fulfilled its purpose.")
