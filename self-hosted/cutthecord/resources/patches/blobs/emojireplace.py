#!/bin/env python3
import os
import shutil

# You'll likely want to edit these lines or set DISTOK_EXTRACTED_DISCORD_PATH and DISTOK_EMOJI_BLOBMOJI
extracted_discord_path = os.environ.get("DISTOK_EXTRACTED_DISCORD_PATH", "/tmp/cutthecord/discord")
extracted_blobmoji_path = os.environ.get("DISTOK_EMOJI_BLOBMOJI", "/opt/ctc/emojis/blobmojis")


def clean_emoji_name(name):
    name = name.lower().replace("_", "-")\
        .replace("emoji-u", "")\
        .replace("emoji-", "")\
        .replace("-fe0f", "")\
        .replace("-200d", "")
    return name


discord_emoji_path = os.path.join(extracted_discord_path, "res", "raw")
# Get file listings in relevant folders
discord_emojis = os.listdir(discord_emoji_path)
blobmojis = os.listdir(extracted_blobmoji_path)

# Clean names of blobmojis so thar we can compare them
# to clean discord emojis later
clean_blobmojis = {clean_emoji_name(emoji): emoji for emoji in blobmojis}

replace_counter = 0

# Go through each discord emoji, and clean their names
for emoji in discord_emojis:
    clean_discord_emoji = clean_emoji_name(emoji)

    # Check if said clean name of emoji is in clean blobmoji list
    if clean_discord_emoji in clean_blobmojis:
        # Get full unclean filename of blobmoji, generate relevant paths
        full_blobmoji_name = clean_blobmojis[clean_discord_emoji]
        full_blobmoji_path = os.path.join(extracted_blobmoji_path,
                                          full_blobmoji_name)
        full_discord_path = os.path.join(discord_emoji_path, emoji)

        # Copy and overwrite the discord emojis with the blobmoji alternatives
        shutil.copyfile(full_blobmoji_path, full_discord_path)

        # print("Replaced {} emoji.".format(emoji))
        replace_counter += 1

print("Done, {} emojis replaced.".format(replace_counter))
