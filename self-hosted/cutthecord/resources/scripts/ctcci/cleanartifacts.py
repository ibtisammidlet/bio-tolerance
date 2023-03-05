import os
from ctcconfig import *

verdata = {}

# Get all APKs from the dir
for file in os.listdir(RESULT_FOLDER):
    if not file.startswith("cutthecord-"):
        continue

    filedata = file.replace("cutthecord-", "").replace(".apk", "").split("-")
    if filedata[1] not in verdata:
        verdata[filedata[1]] = []

    verdata[filedata[1]].append(int(filedata[0]))

# Delete the older APKs
for branch in verdata:
    vers = verdata[branch]
    vers.sort()
    if len(vers) <= CLEAN_ARTIFACT_KEEP_COUNT:
        continue
    for ver in vers[0:-1 * CLEAN_ARTIFACT_KEEP_COUNT]:
        file = os.path.join(RESULT_FOLDER, f"cutthecord-{ver}-{branch}.apk")
        os.unlink(file)
