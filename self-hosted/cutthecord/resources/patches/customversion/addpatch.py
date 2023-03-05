#!/bin/env python3
import sys
import getpass
import datetime
import socket

fname = sys.argv[1]

# Read in the file
with open(fname, 'r') as file:
    filedata = file.read()

customtext = ""

for arg in range(2, len(sys.argv)):
    customtext += " {},".format(sys.argv[arg])
customtext = customtext.strip(",")

timestamp = str(datetime.datetime.utcnow()).split('.')[0] + " UTC"

try:
    uname = getpass.getuser()
except:
    uname = "unknown"

hostname = socket.gethostname().split(".")[0]

disclaimers = ""

if "mutant" in sys.argv:
    disclaimers += " | This build uses Mutant Standard"\
                   " emoji (https://mutant.tech)."

if "blobs" in sys.argv:
    disclaimers += " | This build uses Blob"\
                   " emoji, licensed SIL OFL, version 1.1."

customtext += ", built on {}@{} at {}{}".format(uname,
                                                hostname,
                                                timestamp,
                                                disclaimers)

# Replace the target string
filedata = filedata.replace('with Cutthecord patches"',
                            'with Cutthecord patches{}"'.format(customtext))

# Write the file out again
with open(fname.replace(".patch", "-custom.patch"), 'w') as file:
    file.write(filedata)
