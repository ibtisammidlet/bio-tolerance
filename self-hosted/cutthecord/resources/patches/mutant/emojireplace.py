#!/bin/env python3
import os
import re
import shutil

# You'll likely want to edit these lines or set DISTOK_EXTRACTED_DISCORD_PATH and DISTOK_EMOJI_MUTANT
extracted_discord_path = os.environ.get("DISTOK_EXTRACTED_DISCORD_PATH", "/tmp/cutthecord/discord")
extracted_mutstd_path = os.environ.get("DISTOK_EMOJI_MUTANT", "/root/distokfiles/mutant/72x72")


# Add your custom emojis here
# with "mutstd filename": "discord filename".
# You'll need to write a patch for `assets/data/emojis.json` too.
custom_emojis = {"1f4af-200d-1f308.png": "emoji_1f4af_1f308.png",
                 "10169b-200d-1f308.png": "emoji_10169b_1f308.png",
                 "1f9d1-200d-2708-fe0f.png": "emoji_1f9d1_2708.png",
                 "1f9d1-200d-2695-fe0f.png": "emoji_1f9d1_2695.png",
                 "1f9d1-200d-1f680.png": "emoji_1f9d1_1f680.png",
                 "1f9d1-200d-1f52c.png": "emoji_1f9d1_1f52c.png",
                 "1f9d1-200d-1f527.png": "emoji_1f9d1_1f527.png",
                 "1f9d1-200d-1f4bb.png": "emoji_1f9d1_1f4bb.png",
                 "1f9d1-200d-1f373.png": "emoji_1f9d1_1f373.png",
                 "1f3fb.png": "emoji_1f3fb.png",
                 "1f3fc.png": "emoji_1f3fc.png",
                 "1f3fd.png": "emoji_1f3fd.png",
                 "1f3fe.png": "emoji_1f3fe.png",
                 "1f3ff.png": "emoji_1f3ff.png",
                 "101600.png": "emoji_101600.png",
                 "101601.png": "emoji_101601.png",
                 "101602.png": "emoji_101602.png",
                 "101603.png": "emoji_101603.png",
                 "101604.png": "emoji_101604.png",
                 "101605.png": "emoji_101605.png",
                 "101606.png": "emoji_101606.png",
                 "101607.png": "emoji_101607.png",
                 "101608.png": "emoji_101608.png",
                 "101609.png": "emoji_101609.png",
                 "10160a.png": "emoji_10160a.png",
                 "10160b.png": "emoji_10160b.png",
                 "10160c.png": "emoji_10160c.png",
                 "10160d.png": "emoji_10160d.png",
                 "10160e.png": "emoji_10160e.png",
                 "10160f.png": "emoji_10160f.png",
                 "101610.png": "emoji_101610.png",
                 "101611.png": "emoji_101611.png",
                 "101612.png": "emoji_101612.png",
                 "101613.png": "emoji_101613.png",
                 "101614.png": "emoji_101614.png",
                 "101615.png": "emoji_101615.png",
                 "101616.png": "emoji_101616.png",
                 "101617.png": "emoji_101617.png",
                 "101618.png": "emoji_101618.png",
                 "101619.png": "emoji_101619.png",
                 "10161a.png": "emoji_10161a.png",
                 "10161b.png": "emoji_10161b.png",
                 "10161c.png": "emoji_10161c.png",
                 "10161d.png": "emoji_10161d.png",
                 "10161e.png": "emoji_10161e.png",
                 "10161f.png": "emoji_10161f.png",
                 "101620.png": "emoji_101620.png",
                 "101621.png": "emoji_101621.png",
                 "101622.png": "emoji_101622.png",
                 "101623.png": "emoji_101623.png",
                 "101624.png": "emoji_101624.png",
                 "101625.png": "emoji_101625.png",
                 "101626.png": "emoji_101626.png",
                 "101627.png": "emoji_101627.png",
                 "101628.png": "emoji_101628.png",
                 "101629.png": "emoji_101629.png",
                 "10162a.png": "emoji_10162a.png",
                 "10162b.png": "emoji_10162b.png",
                 "10162c.png": "emoji_10162c.png",
                 "101650.png": "emoji_101650.png",
                 "101651.png": "emoji_101651.png",
                 "10169a.png": "emoji_10169a.png",
                 "26b2-fe0f.png": "emoji_26b2.png",
                 "26a8-fe0f.png": "emoji_26a8.png",
                 "26a7-fe0f.png": "emoji_26a7.png",
                 "26a5-fe0f.png": "emoji_26a5.png",
                 "26a4-fe0f.png": "emoji_26a4.png",
                 "26a3-fe0f.png": "emoji_26a3.png",
                 "26a2-fe0f.png": "emoji_26a2.png",
                 "2642-fe0f.png": "emoji_2642.png",
                 "2640-fe0f.png": "emoji_2640.png",
                 "1f9e1.png": "emoji_1f9e1.png",
                 "101685.png": "emoji_101685.png",
                 "101684.png": "emoji_101684.png",
                 "101683.png": "emoji_101683.png",
                 "101682.png": "emoji_101682.png",
                 "1f9fb.png": "emoji_1f9fb.png",
                 "1f9f1.png": "emoji_1f9f1.png",
                 "1f9e8.png": "emoji_1f9e8.png",
                 "1f9b4.png": "emoji_1f9b4.png",
                 "101696.png": "emoji_101696.png",
                 "101695.png": "emoji_101695.png",
                 "101694.png": "emoji_101694.png",
                 "101693.png": "emoji_101693.png",
                 "101692.png": "emoji_101692.png",
                 "10169b.png": "emoji_10169b.png",
                 "101698.png": "emoji_101698.png",
                 "101699.png": "emoji_101699.png",
                 "1f9dd.png": "emoji_1f9dd.png",
                 "1f99d.png": "emoji_1f99d.png",
                 "1f99c.png": "emoji_1f99c.png",
                 "1f99a.png": "emoji_1f99a.png",
                 "101666.png": "emoji_101666.png",
                 "1f9d0.png": "emoji_1f9d0.png",
                 "1f97a.png": "emoji_1f97a.png",
                 "1f976.png": "emoji_1f976.png",
                 "1f975.png": "emoji_1f975.png",
                 "1f974.png": "emoji_1f974.png",
                 "1f973.png": "emoji_1f973.png",
                 "1f970.png": "emoji_1f970.png",
                 "1f92f.png": "emoji_1f92f.png",
                 "1f92e.png": "emoji_1f92e.png",
                 "1f92d.png": "emoji_1f92d.png",
                 "1f92c.png": "emoji_1f92c.png",
                 "1f92b.png": "emoji_1f92b.png",
                 "1f92a.png": "emoji_1f92a.png",
                 "1f929.png": "emoji_1f929.png",
                 "1f928.png": "emoji_1f928.png",
                 "1f575-10162b.png": "emoji_1f575_10162b.png",
                 "1f486-10162b.png": "emoji_1f486_10162b.png",
                 "1f481-10162b.png": "emoji_1f481_10162b.png",
                 "101690.png": "emoji_101690.png",
                 "101697.png": "emoji_101697.png",
                 "1f9dc.png": "emoji_1f9dc.png",
                 "101681.png": "emoji_101681.png",
                 "101680.png": "emoji_101680.png",
                 "10167f.png": "emoji_10167f.png",
                 "10167e.png": "emoji_10167e.png",
                 "10167d.png": "emoji_10167d.png",
                 "10167c.png": "emoji_10167c.png",
                 "10167b.png": "emoji_10167b.png",
                 "10167a.png": "emoji_10167a.png",
                 "101679.png": "emoji_101679.png",
                 "101678.png": "emoji_101678.png",
                 "101677.png": "emoji_101677.png",
                 "101676.png": "emoji_101676.png",
                 "101675.png": "emoji_101675.png",
                 "101674.png": "emoji_101674.png",
                 "101673.png": "emoji_101673.png",
                 "101672.png": "emoji_101672.png",
                 "101671.png": "emoji_101671.png",
                 "101670.png": "emoji_101670.png",
                 "101686.png": "emoji_101686.png",
                 "101691.png": "emoji_101691.png"}


# self note to get MM emojos:
# ls 72x72 | grep "101650-" | cut -f 1 -d '-' | sort | uniq
# ls 72x72 | grep "101651-" | cut -f 1 -d '-' | sort | uniq
# echo -e "\U1f44c"
# paw: 􁙐
# claw: 􁙑

def add_diverse_emojos():
    # Hackiest regex ever
    div_regex = r'(|.*/)([a-f0-9]+(|-fe0f)-(|101650|101651|101650-|101651-)'\
                r'(|1016[0-2][a-f0-9]|1f3f[b-f])\.png)'
    div_regex = re.compile(div_regex)
    for file in mutstd_emojis:
        re_result = div_regex.fullmatch(file)
        if re_result:
            mutant = re_result.group(2)
            discord = discordify_emoji_name(mutant)
            custom_emojis[mutant] = discord


def clean_emoji_name(name):
    name = name.lower().replace("_", "-")\
        .replace("emoji-", "").replace("-fe0f", "")
    return name


def discordify_emoji_name(name):
    name = "emoji_" + name.lower().replace("-", "_").replace("fe0f_", "")\
        .replace("200d_", "")
    return name


discord_emoji_path = os.path.join(extracted_discord_path, "res", "raw")
# Get file listings in relevant folders
discord_emojis = os.listdir(discord_emoji_path)
mutstd_emojis = os.listdir(extracted_mutstd_path)

add_diverse_emojos()

# Clean names of mutantstd emojis so thar we can compare them
# to clean discord emojis later
clean_mutstd_emojis = {clean_emoji_name(emoji): emoji for
                       emoji in mutstd_emojis}

replace_counter = 0

# Go through each discord emoji, and clean their names
for emoji in discord_emojis:
    clean_discord_emoji = clean_emoji_name(emoji)

    # Check if said clean name of emoji is in clean mutstd list
    if clean_discord_emoji in clean_mutstd_emojis:
        # Get full unclean filename of mutantstd emoji, generate relevant paths
        full_mutstd_name = clean_mutstd_emojis[clean_discord_emoji]
        full_mutstd_path = os.path.join(extracted_mutstd_path, full_mutstd_name)
        full_discord_path = os.path.join(discord_emoji_path, emoji)

        # Copy and overwrite the discord emojis with the mutantstd alternatives
        shutil.copyfile(full_mutstd_path, full_discord_path)

        # print("Replaced {} emoji.".format(emoji))
        replace_counter += 1

for custom_emoji in custom_emojis:
    # One day I'd like to do discordify_emoji_name(custom_emoji)
    # But discord has too many exceptions for that~
    discord_emoji_name = custom_emojis[custom_emoji]
    full_mutstd_path = os.path.join(extracted_mutstd_path, custom_emoji)
    full_discord_path = os.path.join(discord_emoji_path, discord_emoji_name)
    shutil.copyfile(full_mutstd_path, full_discord_path)
    # print("Added custom {} emoji.".format(discord_emoji_name))
    replace_counter += 1

print("Done, {} emojis replaced.".format(replace_counter))
