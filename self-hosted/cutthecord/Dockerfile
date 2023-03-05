FROM ubuntu:21.04

# Install needed packages
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install python3 android-sdk-build-tools wget unzip imagemagick git patch software-properties-common
# Mirror is being weird currently so install this seperatly
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install zipmerge

# Install fdroid
RUN add-apt-repository ppa:fdroid/fdroidserver
RUN apt-get update
RUN apt-get -y install fdroidserver

# Create resources folder for tools/images etc
ENV CTC_FOLDER=/opt/ctc
RUN mkdir ${CTC_FOLDER}

# Grab modified apktool
RUN mkdir ${CTC_FOLDER}/tools
RUN wget -O ${CTC_FOLDER}/tools/apktool.jar https://f001.backblazeb2.com/file/avepub/apktool-cli-all.jar

# Grab xml-patch (https://github.com/dnault/xml-patch)
RUN wget -O ${CTC_FOLDER}/tools/xml-patch.jar https://jcenter.bintray.com/com/github/dnault/xml-patch/0.3.1/xml-patch-0.3.1.jar

# Grab dex2jar (https://github.com/Aliucord/dex2jar)
RUN wget -O ${CTC_FOLDER}/tools/dex2jar.jar https://github.com/Aliucord/dex2jar/releases/download/v19-fork2/dex2jar.jar

# Grab emoji sets
ENV EMOJI_PATH=${CTC_FOLDER}/emojis
ENV EMOJI_MUTANT_PATH=${EMOJI_PATH}/mutant
ENV EMOJI_BLOBMOJIS_PATH=${EMOJI_PATH}/blobmojis
RUN mkdir ${EMOJI_PATH}

# Mutant emojis
RUN mkdir ${EMOJI_MUTANT_PATH}
WORKDIR ${EMOJI_MUTANT_PATH}
RUN wget https://mutant.lavatech.top/72x72.zip
RUN unzip 72x72.zip
RUN mv 72x72/*.png .
RUN rm -rf 72x72
RUN rm 72x72.zip

# Blobmojis
RUN mkdir ${EMOJI_BLOBMOJIS_PATH}
RUN mkdir /tmp/blobmoji
WORKDIR /tmp/blobmoji
RUN wget https://github.com/C1710/blobmoji/archive/refs/heads/main.zip
RUN 7za x main.zip
WORKDIR /tmp/blobmoji/blobmoji-main/svg
RUN find ./*.svg -exec mogrify -format png -resize 72x72 -path ${EMOJI_BLOBMOJIS_PATH} {} \; ; exit 0

# Generate self signed KS
RUN mkdir ${CTC_FOLDER}/keystores
WORKDIR ${CTC_FOLDER}/keystores
RUN keytool -genkey -alias test \
    -keyalg RSA -keystore keystore.jks \
    -dname "CN=Test, OU=Test, O=Test, L=Test, S=Test, C=Test" \
    -storepass password -keypass password

# Make folder for git repo
RUN mkdir ${CTC_FOLDER}/gitrepo
WORKDIR ${CTC_FOLDER}/gitrepo

# paths in ctcconfig in docker
# container							fs
# /opt/ctc/gitrepo					
# /opt/ctc/keystores/keystore.jks	not specified by default
