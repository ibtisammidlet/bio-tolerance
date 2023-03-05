#!/bin/env python3
import re
import sys
import os
import subprocess

# Example invocation:
# python3 patchbisect.py /home/ave/workbench/ctc/com.discord-968

# This is really bad code that I wrote between 3am and 6am
# Please do not criticize or judge my programming skills by this.

apk_folder = sys.argv[1]
cutthecord_folder = os.path.dirname(os.path.realpath(__file__))


def apply_patch(patch, reverse=False):
    patch_path = os.path.join(cutthecord_folder, "resources/patches", patch,
                              f"{to_versioncode}.patch")
    with open(patch_path) as f:
        patch_contents = f.read()
    cmd = f"patch -p1 {'-R' if reverse else ''} --no-backup-if-mismatch --force"
    subprocess.run(cmd,
                   shell=True, input=patch_contents, text=True,
                   cwd=apk_folder, capture_output=True)


re_versioncode_yml = re.compile(r'versionCode: \'([0-9]+)\'')
re_versionname_yml = re.compile(r'versionName: (.+)$')


# Get version code and name
with open(os.path.join(apk_folder, "apktool.yml")) as f:
    file_contents = f.read()
    to_versioncode = re_versioncode_yml.findall(file_contents)[0]
    to_versionname = re_versionname_yml.findall(file_contents)[0]


unsure = []

# Load list of patches
for patch in os.listdir(os.path.join(cutthecord_folder, "resources/patches")):
    # Ignore non-dirs
    if not os.path.isdir(os.path.join(cutthecord_folder, "resources/patches", patch)):
        continue

    patch_path = os.path.join(cutthecord_folder, "resources/patches", patch,
                              f"{to_versioncode}.patch")

    # Check if patch exists for from_version, if it doesn't, warn user
    if not os.path.isfile(patch_path) and patch not in ["necessary"]:
        # Don't warn on instructional patches
        if patch not in ["customfont", "customring",
                         "bettertm", "bettertmlight",
                         "blobs"]:
            print(f"SKIPPED: No {to_versionname} version found for {patch}.")
        continue

    # Append patch name to the list
    unsure.append(patch)


failcount = 1
applied = []
good = []
bad = []

while unsure:
    print("So far...")
    print(f"Unsure patches: {', '.join(unsure)}")
    print(f"Good patches: {', '.join(good)}")
    print(f"Bad patches: {', '.join(bad)}")
    count_this_round = int(len(unsure) / failcount)
    for i in range(0, count_this_round):
        patch_name = unsure[i]
        print(f"Applying: {patch_name}")
        apply_patch(patch_name)
        applied.append(patch_name)

    # Very cursed lines of code.
    is_working = ""
    while is_working not in ["y", "n"]:
        is_working = input("Is the current patchset working? (y/n) ")

    # <3 3.8
    # while (is_working := input("Is the current patchset working? (y/n) ")) not in ["y", "n"]:
    #     continue

    if is_working == "y":
        good.extend(applied)
        unsure = list(set(unsure) - set(applied))
        failcount = 1
    elif count_this_round > 1:
        failcount += 1
    else:
        bad.extend(applied)
        unsure = list(set(unsure) - set(applied))
        failcount = 1

    for patch_name in applied:
        apply_patch(patch_name, True)

    applied.clear()

print("Done, all patches identified as good or bad.")
print(f"Good: {', '.join(good)}")
print(f"Bad: {', '.join(bad)}")
