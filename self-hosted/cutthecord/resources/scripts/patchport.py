#!/bin/env python3
import re
import sys
import os
import json
import subprocess
import datetime
import shutil

# Example invocation:
# python3 patchport.py /home/ave/apks/com.discord-900/

with open("/opt/ctc/gitrepo/resources/patchport-state.json", "r") as f:
    jin = json.load(f)
    from_versioncode = jin["versioncode"]
    from_versionname = jin["versionname"]

apk_folder = sys.argv[1]
cutthecord_folder = os.path.dirname(os.path.realpath(__file__))
debug = False
tmp_folder = "/tmp/patchport"

if debug:
    print(f"ctc folder: {cutthecord_folder}")


def modify_patch(patch_name, patch_path):
    with open(patch_path) as f:
        patch_content = f.read()

    if patch_name in ["branding", "customversion"]:
        patch_content = patch_content.replace(from_versioncode, to_versioncode)
        patch_content = patch_content.replace(from_versionname, to_versionname)

    if patch_name == "notrack":
        # TODO: There's a risk here that we'll replace the nulled value
        from_crashlytics_id = re_crashlytics.findall(patch_content)[0]
        patch_content = patch_content.replace(from_crashlytics_id,
                                              to_crashlytics_id)
    return patch_content


def apply_patch(patch_contents):
    subprocess.run("patch -p1 --no-backup-if-mismatch --force",
                   shell=True, input=patch_contents, text=True,
                   cwd=apk_folder, capture_output=True)


def fix_offset(patch_contents):
    # OH GOD OH FUCK
    shutil.rmtree(tmp_folder, ignore_errors=True)
    os.makedirs(tmp_folder)
    patch_lines = patch_contents.splitlines()
    for line in patch_lines:
        if "diff -crB" in line:
            patch_target = line.split(" ")[2].replace("from/", "")
            if not os.path.exists(os.path.join(apk_folder, patch_target)):
                return False
            os.makedirs(os.path.dirname(os.path.join(tmp_folder, patch_target)), exist_ok=True)
            shutil.copy(os.path.join(apk_folder, patch_target), os.path.join(tmp_folder, patch_target))
    # shutil.copytree(apk_folder, tmp_folder)
    subprocess.run("patch -p1 --no-backup-if-mismatch --force",
                   shell=True, input=patch_contents, text=True,
                   cwd=tmp_folder, capture_output=True)
    out = subprocess.run(f"diff -crB {apk_folder} {tmp_folder}",
                         shell=True, input=patch_contents, text=True,
                         cwd=tmp_folder, capture_output=True)

    shutil.rmtree(tmp_folder, ignore_errors=True)
    actual_difflines = []
    for line in out.stdout.splitlines():
        if line[0:4] != "Only":
            actual_difflines.append(line)
    patch_out = ("\n".join(actual_difflines)+"\n").replace(apk_folder, "from").replace(tmp_folder, "to")

    return patch_out

# TODO replace with xml-patch version
def make_necessary(version_name, version_code):
    # OH GOD OH FUCK
    shutil.rmtree(tmp_folder, ignore_errors=True)
    os.makedirs(tmp_folder)
    shutil.copy(os.path.join(apk_folder, "AndroidManifest.xml"), os.path.join(tmp_folder, "AndroidManifest.xml"))

    # Set version code and name
    # Due to https://github.com/iBotPeaches/Apktool/issues/2046
    # Code based on https://stackoverflow.com/a/4128192/3286892
    with open(os.path.join(tmp_folder, "AndroidManifest.xml")) as fin:
        filec = fin.read()
        incorrect_versioncode = re_versioncode_xml.findall(filec)[0]
        filec = filec.replace(incorrect_versioncode, f'platformBuildVersionCode="{to_versioncode}"')
        incorrect_versionname = re_versionname_xml.findall(filec)[0]
        filec = filec.replace(incorrect_versionname, f'platformBuildVersionName="{to_versionname}"')
        with open(os.path.join(tmp_folder, "AndroidManifest.xml"), "w") as fout:
            fout.write(filec)

    out = subprocess.run(f"diff -crB {apk_folder} {tmp_folder}",
                         shell=True, text=True,
                         cwd=tmp_folder, capture_output=True)
    shutil.rmtree(tmp_folder, ignore_errors=True)
    actual_difflines = []
    for line in out.stdout.splitlines():
        if line[0:4] != "Only":
            actual_difflines.append(line)
    patch_out = ("\n".join(actual_difflines)+"\n").replace(apk_folder, "from").replace(tmp_folder, "to")
    return patch_out


re_versioncode_xml = re.compile(r'(platformBuildVersionCode="[0-9]+")')
re_versionname_xml = re.compile(r'(platformBuildVersionName="[0-9a-z.]+")')

re_versioncode_yml = re.compile(r'versionCode: \'([0-9]+)\'')
re_versionname_yml = re.compile(r'versionName: \'?(.+?)\'?$')

re_releasedate = re.compile(r'released on ([0-9]{4}-[0-9]{2}-[0-9]{2})')
re_crashlytics = re.compile(r'com\.crashlytics\.android\.build_id">([a-z0-9]'
                            r'{8}-?[a-z0-9]{4}-?[a-z0-9]{4}-?[a-z0-9]{4}-?'
                            r'[a-z0-9]{12})</string>')


# Get version code and name
with open(os.path.join(apk_folder, "apktool.yml")) as f:
    file_contents = f.read()
    to_versioncode = re_versioncode_yml.findall(file_contents)[0]
    to_versionname = re_versionname_yml.findall(file_contents)[0]

# Get crashlytics build ID
with open(os.path.join(apk_folder, "res", "values", "strings.xml")) as f:
    file_contents = f.read()
    to_crashlytics_id = re_crashlytics.findall(file_contents)[0]


failures = []

for patch in os.listdir(os.path.join(cutthecord_folder, "resources/xmlpatches")):
    if debug:
        print(f"going over xml patch: {patch}")

    # Ignore non-dirs
    if not os.path.isdir(os.path.join(cutthecord_folder, "resources/xmlpatches", patch)):
        if debug:
            print(f"patch is not a folder, skipping: {patch}")
        continue

    pre_in_path = os.path.join(cutthecord_folder, "resources/xmlpatches", patch, f"{from_versioncode}-pre.sh")
    post_in_path = os.path.join(cutthecord_folder, "resources/xmlpatches", patch, f"{from_versioncode}-post.sh")
    pre_out_path = os.path.join(cutthecord_folder, "resources/xmlpatches", patch, f"{to_versioncode}-pre.sh")
    post_out_path = os.path.join(cutthecord_folder, "resources/xmlpatches", patch, f"{to_versioncode}-post.sh")

    patch_path = os.path.join(cutthecord_folder, "resources/xmlpatches", patch, f"{from_versioncode}.xml")
    out_path = os.path.join(cutthecord_folder, "resources/xmlpatches", patch, f"{to_versioncode}.xml")
    tmp_out_path = os.path.join("/tmp/", patch, f"{to_versioncode}.xml")
    readme_path = os.path.join(cutthecord_folder, "resources/xmlpatches", patch, "README.md")

    # Handle copying of versioned scripts, untested and dirty!
    script_path = os.path.join(cutthecord_folder, "resources/xmlpatches", patch, f"{from_versioncode}.sh")
    if os.path.exists(script_path):
        script_out_path = os.path.join(cutthecord_folder, "resources/xmlpatches", patch, f"{to_versioncode}.sh")
        with open(script_path) as f:
            with open(script_out_path, "w") as f2:
                f2.write(f.read())

    # Check if patch exists for from_version, if it doesn't, warn user
    if not os.path.isfile(patch_path) and patch not in ["necessary"]:
        # Don't warn on instructional patches
        if patch not in ["customfont", "customring", "bettertm", "bettertmlight", "blobs"]:
            print(f"SKIPPED: No {from_versionname} version found for {patch}.")
        continue

    # Check if pre-script exists, if it does copy it
    if os.path.isfile(pre_in_path):
        shutil.copyfile(pre_in_path, pre_out_path)
        print(f"PRE COPIED: {patch}'s pre script was copied.")

    # Check if post-script exists, if it does copy it
    if os.path.isfile(post_in_path):
        shutil.copyfile(post_in_path, post_out_path)
        print(f"POST COPIED: {patch}'s post script was copied.")

	
    # Create necessary instead of porting it.
    if patch == "necessary":
        patch_contents = make_necessary(to_versioncode, to_versionname)
    else:
        # Get a modified version of the patch
        patch_contents = modify_patch(patch, patch_path)

    # Pass the new patch to patch command and get it to attempt to patch
    with open(tmp_out_path, "w") as f:
        f.write(patch_contents)
    out = subprocess.run("java -cp /opt/ctc/tools/xml-patch.jar com.github.dnault.xmlpatch.BatchPatcher --patch {tmp_out_path} --srcdir {apk_folder} --destdir /tmp/", shell=True,
                         cwd=apk_folder, text=True,
                         capture_output=True)

    # Check for issues
    if "ERROR" in out.stdout or "EXCEPTION" in out.stdout:
        print(f"FAILED: {patch} failed, please fix by hand.")
        failures.append(patch)
        out_path += "-failed"

    if debug:
        print(out.stdout)

    # Apply patch to main APK folder too
    if patch in ["necessary"]:
        apply_patch(patch_contents)

    if from_versionname != to_versionname:
        # Add supported version to readme of that patch, hacky
        # https://stackoverflow.com/a/35130508/3286892
        with open(readme_path, 'r') as f:
            readme_text = f.read().replace(f'- {from_versionname}\n', f'- {from_versionname}\n' f'- {to_versionname}\n')
        with open(readme_path, "w") as f:
            f.write(readme_text)

    # Save ported patch
    with open(out_path, "w") as f:
        f.write(patch_contents)

    if not out_path.endswith("-failed"):
        print(f"PORTED: {patch} was successfully ported.")

for patch in os.listdir(os.path.join(cutthecord_folder, "resources/patches")):
    if debug:
        print(f"going over patch: {patch}")

    # Ignore non-dirs
    if not os.path.isdir(os.path.join(cutthecord_folder, "resources/patches", patch)):
        if debug:
            print(f"patch is not a folder, skipping: {patch}")
        continue

    pre_in_path = os.path.join(cutthecord_folder, "resources/patches", patch, f"{from_versioncode}-pre.sh")
    post_in_path = os.path.join(cutthecord_folder, "resources/patches", patch, f"{from_versioncode}-post.sh")
    pre_out_path = os.path.join(cutthecord_folder, "resources/patches", patch, f"{to_versioncode}-pre.sh")
    post_out_path = os.path.join(cutthecord_folder, "resources/patches", patch, f"{to_versioncode}-post.sh")

    patch_path = os.path.join(cutthecord_folder, "resources/patches", patch, f"{from_versioncode}.patch")
    out_path = os.path.join(cutthecord_folder, "resources/patches", patch, f"{to_versioncode}.patch")
    readme_path = os.path.join(cutthecord_folder, "resources/patches", patch, "README.md")

    # Handle copying of versioned scripts, untested and dirty!
    script_path = os.path.join(cutthecord_folder, "resources/patches", patch, f"{from_versioncode}.sh")
    if os.path.exists(script_path):
        script_out_path = os.path.join(cutthecord_folder, "resources/patches", patch, f"{to_versioncode}.sh")
        with open(script_path) as f:
            with open(script_out_path, "w") as f2:
                f2.write(f.read())

    # Check if patch exists for from_version, if it doesn't, warn user
    if not os.path.isfile(patch_path) and patch not in ["necessary"]:
        # Don't warn on instructional patches
        if patch not in ["customfont", "customring", "bettertm", "bettertmlight", "blobs"]:
            print(f"SKIPPED: No {from_versionname} version found for {patch}.")
        continue

    # Check if pre-script exists, if it does copy it
    if os.path.isfile(pre_in_path):
        shutil.copyfile(pre_in_path, pre_out_path)
        print(f"PRE COPIED: {patch}'s pre script was copied.")

    # Check if post-script exists, if it does copy it
    if os.path.isfile(post_in_path):
        shutil.copyfile(post_in_path, post_out_path)
        print(f"POST COPIED: {patch}'s post script was copied.")

	
    # Create necessary instead of porting it.
    if patch == "necessary":
        patch_contents = make_necessary(to_versioncode, to_versionname)
    else:
        # Get a modified version of the patch
        patch_contents = modify_patch(patch, patch_path)

    # Pass the new patch to patch command and get it to attempt to patch
    out = subprocess.run("patch -p1 --dry-run --force", shell=True,
                         cwd=apk_folder, input=patch_contents, text=True,
                         capture_output=True)

    # Check for issues
    if "FAILED" in out.stdout or "can't find file to patch" in out.stdout:
        print(f"FAILED: {patch} failed, please fix by hand.")
        failures.append(patch)
        out_path += "-failed"
    elif "offset" in out.stdout:
        temp_patch_contents = fix_offset(patch_contents)
        if temp_patch_contents:
            patch_contents = temp_patch_contents
            print(f"WARNING: {patch} has offsets which were auto corrected.")
        else:
            print(f"FAILED: {patch} is missing files, please fix by hand.")
            failures.append(patch)
            out_path += "-failed"

    if debug:
        print(out.stdout)

    # Apply patch to main APK folder too
    if patch in ["necessary"]:
        apply_patch(patch_contents)

    if from_versionname != to_versionname:
        # Add supported version to readme of that patch, hacky
        # https://stackoverflow.com/a/35130508/3286892
        with open(readme_path, 'r') as f:
            readme_text = f.read().replace(f'- {from_versionname}\n', f'- {from_versionname}\n' f'- {to_versionname}\n')
        with open(readme_path, "w") as f:
            f.write(readme_text)

    # Save ported patch
    with open(out_path, "w") as f:
        f.write(patch_contents)

    if not out_path.endswith("-failed"):
        print(f"PORTED: {patch} was successfully ported.")

ctcreadme_path = os.path.join(cutthecord_folder, "README.md")
# TODO: can we pull the correct date from distok?
out_datestamp = datetime.datetime.utcnow().strftime("%Y-%m-%d")
# Update readme with latest version, hacky
# https://stackoverflow.com/a/35130508/3286892
with open(ctcreadme_path, 'r') as f:
    ctcr_text = f.read().replace(f'{from_versionname} ({from_versioncode})',
                                 f'{to_versionname} ({to_versioncode})')
in_datestamp = re_releasedate.findall(ctcr_text)[0]
ctcr_text = ctcr_text.replace(in_datestamp, out_datestamp)
with open(ctcreadme_path, "w") as f:
    f.write(ctcr_text)

with open("patchport-state.json", "w") as f:
    jout = {"versionname": to_versionname, "versioncode": to_versioncode}
    json.dump(jout, f)

if failures:
    print(f"Port complete. Following patches failed: {', '.join(failures)}")
else:
    print("Port complete. All patches completed successfully.")
