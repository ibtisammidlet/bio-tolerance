#!/bin/bash

if [ -z "$DISTOK_FOLDER" ]
then
    cd /opt/ctc/gitrepo/resources/patches/slashcommands/code
else
    cd "$DISTOK_FOLDER/resources/patches/slashcommands/code"
fi

if [ -z "$DISTOK_APKTOOL_COMMAND" ]
then
    DISTOK_APKTOOL_COMMAND="java -jar /opt/ctc/tools/apktool.jar"
fi

if [ -z "$DISTOK_DX_COMMAND" ]
then
    DISTOK_DX_COMMAND="/lib/android-sdk/build-tools/debian/dx"
fi

chmod +x gradlew
rm -rf build
./gradlew build
cd build/libs
$DISTOK_DX_COMMAND --dex --output ctccommands.apk ctccommands-1.0-SNAPSHOT.jar
$DISTOK_APKTOOL_COMMAND d ctccommands.apk
cp -r ctccommands/smali/* ${DISTOK_EXTRACTED_DISCORD_PATH}/smali/