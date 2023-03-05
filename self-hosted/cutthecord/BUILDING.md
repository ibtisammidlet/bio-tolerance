## CutTheCord: Building

#### Toolchain setup

- Get apktool (use [this self-built version](//f001.backblazeb2.com/file/avepub/apktool-cli-all.jar) which is master + [this pr](https://github.com/iBotPeaches/Apktool/pull/2463)).
- Get a keystore, see [here](https://stackoverflow.com/a/14994354/3286892), step 1.
- Get apksigner, it's part of android build tools.
- If you want Mutant Standard emoji patches, get 72x72 PNG copies of latest version of mutant standard emojis with codepoints. I have a zip [here](https://mutant.lavatech.top/72x72.zip).
- If you want Blob emoji patches, get 72x72 PNG copies of blobmojis with codepoints. I personally resized the png/128 folder in this [repo](https://github.com/C1710/blobmoji) (`find /home/ave/blobmoji/png/72 -iname '*.png' -exec convert \{\} -verbose -resize 72x72\> \{\} \;`).
- Extract the emojis you got somewhere.
- Clone this repo somewhere.
- Set your environment variables (see below), put them to somewhere where they'll persist (like your .bashrc/.zshrc, or preferably a build script).
- Get a Discord apk (*cough* [apkmirror](https://www.apkmirror.com/apk/discord-inc/discord-chat-for-gamers/), [aptoide API](https://ws75.aptoide.com/api/7/app/getMeta?package_name=com.discord)).

### Using CutTheCord CI

CutTheCord CI (CTCCI) is what powers the official builds. It allows for extensive customization. It relies on distok files and state. While state is public, files aren't, so you'll have to create a similar file structure.

CTCCI requires python3.6+, and also likely requires Linux (I haven't tried it on other OSes, and use of things like `patch` and pipes might limit it to Linux).

#### Initial setup

- Follow the "Toolchain setup" steps above in case you haven't already.
- Copy `ctcci/ctcconfig.example.py` to `ctcci/ctcconfig.py` and configure contents to your local data and your personal preferences.
- If you don't want to always automatically be required to use the latest discord version, edit the `$REPO_FOLDER/patchport-state.json` file.
- Set up a local distok-style file storage for your APKs, and copy your APKs on it, and name them properly (the format is `$DISTOK_FOLDER/android/$PACKAGE_ID-$VERSION_NUMBER.apk`, example: `/home/ave/distok/android/com.discord-909.apk`).

#### Environment Variables

- `DISTOK_VERSION_LOGS` (required, default: `"/root/distokrepos/versionlogs/"`): Should point to an empty directory (such as `export DISTOK_VERSION_LOGS="/home/ave/distokversionlogs"`). This directory will hold versions that will increase with each build. This is a hack that I need to eventually re-design, preferably move to a json file etc.
- `DISTOK_EMOJI_MUTANT` (optional, default: `"/root/distokfiles/mutant/72x72"`): Folder with the mutant emoji files. This should be set if you're going to be enabling the mutant emoji patches.
- `DISTOK_EMOJI_BLOBMOJI` (optional, default: `"/root/distokfiles/blobmoji/png/72"`): Folder with the blobmoji files. This should be set if you're going to be enabling the blobmoji patches.
- `DISTOK_EXTRACTED_DISCORD_PATH` (complicated, default: `"/tmp/cutthecord/discord"`): Directory at which your extracted discord files reside. This is required on manual builds, but will be overriden by ctcci with `WORK_APK_PATH` if ctcci is being used.

#### Running builds

- Firstly, ensure that you properly set your environment variables!
- Simply run the `ctcci.py` script, with first argument being branch name, and latter ones being name of patches you want to add in.

Example: `python3.6 /home/ave/distokrepos/cutthecord/ctcci/ctcci.py ave mutant customfont slashcommands tokenlogin customtheme customdefaultemoji customring bettertm notrack noprofilestrip nonearby experiments noblocked squareavatars`

### Manually

#### Building a patched discord app

- Extract it with apktool (`apktool d <apk path>`)
- Get all the necessary patches for that version. Necessary patches are not available for all versions and are only required to get some versions to pack together correctly.
- Get optional patches you want for your version. If the patch you want isn't available for your version, you'll have to port them yourself.
- Apply the patches (`patch -p1 < <patch name>`).
- If you want mutant (or other emoji patches), edit `patches/mutant/emojireplace.py` to point to extracted discord folder (`extracted_discord_path`), and apply emoji patches (`python3 emojireplace.py`)
- Build the new APK (`apktool b com.discord-832`)
- Sign the new APK (`jarsigner -keystore <keystore path> <foldername>/dist/<foldername>.apk <alias>`)
- Get your new APK from `<foldername>/dist/<foldername>.apk`, install and enjoy!

#### Building patches

After extracting the APK, copy it to a folder that you won't modify (`cp -r com.discord-836 com.discord-836-base`), so that you can easily diff them.

To get the diff, run `diff -crB -x "dist" -x "res/raw" -x "build" CleanFolder PatchedFolder > patchname.patch`

#### Porting patches

You can use `patchport.py` to easily attempt to port patches. This is what I use to port between every single version. Note that while CTCCI requires python3.6+, `patchport.py` requires python3.7+.

It's not really intelligent and doesn't do much more than manually preparing necessary patch, checking if an existing patch can be applied to a given version, replacing relevant variables required for porting various patches and eliminating offsets caused by updates, but it saves a lot of time if used carefully.

Example command: `python3.7 patchport.py /home/ave/workbench/ctc/com.discord-968`

#### Figuring out which patch is causing your build to break

You can use `patchbisect.py` to have a `git bisect`-like system of switching between patchsets to find which patch(es) is(/are) the ones that cause issues.

Simply let it do its thing, do whatever test you want to make, type `y` if it works or `n` if it doesn't and finally hit return, rinse and repeat until you find what's wrong.

There's no automated checking to allow checking for a wide range of issues like build issues, app crashing on boot, or simple functionality breakages.

Keep in mind that this doesn't account for the case of multiple patches being used together causing issues, nor does it account for conflicting patches.

Example command: `python3 patchbisect.py /home/ave/workbench/ctc/com.discord-968`
