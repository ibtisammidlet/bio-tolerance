import os

APKTOOL_BIN = "java -jar /opt/ctc/tools/apktool.jar"
DEX2JAR_BIN = "java -jar /opt/ctc/tools/dex2jar.jar"
XML_PATCH_BIN = "java -cp /opt/ctc/tools/xml-patch.jar"

# APKs must be placed under $DISTOK_FOLDER/android/$PACKAGE_ID-$VERSION_NUMBER.apk
# Example: /home/ave/distok/android/com.discord-909.apk
DISTOK_FOLDER = "/opt/ctc/gitrepo/resources/distok"

# Set if F-Droid repo should be automatically updated or not
# If set to False, you can leave FDROID_FOLDER empty
DO_FDROID = True
FDROID_FOLDER = "/opt/ctc/gitrepo/resources/fdroid"

# This is where APKs will be placed
RESULT_FOLDER = FDROID_FOLDER + "/repo"

# Repo for CutTheCord (https://gitdab.com/distok/cutthecord)
DO_GITPULL = False
REPO_FOLDER = "/opt/ctc/gitrepo"

# If false, jarsigner will be used for signing the apk.
DO_APKSIGNER = True

# Keystore file, alias and pass. Required.
KEYSTORE_FILE = "/opt/ctc/keystores/keystore.jks"
KEYSTORE_ALIAS = "test"
KEYSTORE_PASS = "password"

# Set this to the python version you want to use. Needs to be 3.6+.
PYTHON_BIN = "python3"

# Folder where the apk will be extracted to, patched in, and packed back on
# You're not recommended to touch WORK_APK_PATH.
WORK_FOLDER = "/tmp/cutthecord"
WORK_APK_PATH = os.path.join(WORK_FOLDER, "discord")

# Package ID for discord. You should probably not touch this.
PACKAGE_ID = "com.discord"

# Set to force if you want builds to be done
# even if there's already a build for this version
FORCE = False

# Custom ringtones, default = applied to all the ones not explicitly stated
RINGTONES = {"default": "/opt/ctc/gitrepo/resources/ringtones/removeskype.mp3"}

# Custom icons, default = applied to all the ones not explicitly stated
ICONS = {"ave": "/opt/ctc/gitrepo/resources/icons/ctclogoave.png",
         "default": "/opt/ctc/gitrepo/resources/icons/ctclogo.png"}

# Custom dynamic icons, default = applied to all the ones not explicitly stated
DYN_ICONS = {"ave": {"fg": "/opt/ctc/gitrepo/resources/icons/fg.png"},
             "default": {"fg": "/opt/ctc/gitrepo/resources/icons/dcfg.png"}}

# Custom app names, default = applied to all the ones not explicitly stated
# Needs to be one word, __ gets replaced with space
APP_NAMES = {"ave": "CutTheCord__Ave",
             "litecord": "Litecord",
             "test": "CTC__Testing",
             "default": "CutTheCord"}

# Custom fonts, default = applied to all the ones not explicitly stated
FONTS = {"ave": {"sourcecodepro_semibold.ttf": "/opt/ctc/gitrepo/resources/fonts/comic.ttf",
                 "ginto_bold.ttf": "/opt/ctc/gitrepo/resources/fonts/whitney_bold.ttf",
                 "ginto_medium.ttf": "/opt/ctc/gitrepo/resources/fonts/whitney_semibold.ttf",
                 "ginto_regular.ttf": "/opt/ctc/gitrepo/resources/fonts/whitney_medium.ttf"},
         "default": {}}

# Amount of last builds cleanartifacts.py should keep
CLEAN_ARTIFACT_KEEP_COUNT = 2
