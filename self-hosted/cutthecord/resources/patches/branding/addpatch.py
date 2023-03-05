#!/bin/env python3
import os
import sys

fname = sys.argv[1]
persistdir = os.environ.get("DISTOK_VERSION_LOGS", "/opt/ctc/gitrepo/resources/distok/versionlogs/")


def counterup(branch="base"):
    # HACKY
    cfname = persistdir + fname.split("/")[-1].replace(".patch", "") + branch
    if os.path.isfile(cfname):
        with open(cfname, 'r') as file:
            countdata = file.read()
    else:
        countdata = 1000

    countdata = int(countdata) + 1

    with open(cfname, 'w') as file:
        file.write(str(countdata))

    return countdata


# Read in the file
with open(fname, 'r') as file:
    filedata = file.read()

name = sys.argv[2].replace("__", " ")

branch = sys.argv[3]

buildnum = str(counterup(branch))

# Replace the target string
filedata = filedata.replace("CTCBRANCH", branch)\
    .replace("CTCBUILD", buildnum)\
    .replace("CTCNAME", name)

# Write the file out again
with open(fname.replace(".patch", "-custom.patch"), 'w') as file:
    file.write(filedata)
