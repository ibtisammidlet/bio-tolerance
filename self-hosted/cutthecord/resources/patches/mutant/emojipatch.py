import copy
import json

# Unicode hexes that will have Mutant Modifier (mm) applied to
mm_emojis = [0x1f446, 0x1f447, 0x1f448, 0x1f449, 0x1f44a, 0x1f44b, 0x1f44c,
             0x1f44d, 0x1f44e, 0x1f44f, 0x1f450, 0x1f485, 0x1f4aa, 0x1f590,
             0x1f595, 0x1f596, 0x1f64c, 0x1f64f, 0x1f918, 0x1f919, 0x1f91a,
             0x1f91b, 0x1f91c, 0x1f91d, 0x1f91e, 0x1f933, 0x261d, 0x270a,
             0x270b, 0x270c, 0x270d]

# Mutant Modifier names and their modifiers
mm_types = {"paw": "􁙐",
            "claw": "􁙑"}

# Custom emojis that will be inserted to the end of an emoji category
custom_emojis = {"symbols": {"💯🌈": ["queer_100"],
                             "􁚚": ["dont_at", "no_at",
                                   "no_mention", "dont_mention"],
                             "⚲": ["neuter_symbol"],
                             "⚨": ["androgyne_symbol"],
                             "⚧": ["transgender_symbol"],
                             "⚥": ["male_female_symbol"],
                             "⚤": ["male_and_female_symbol"],
                             "⚣": ["two_male_symbols"],
                             "⚢": ["two_female_symbols"],
                             "♂": ["male_symbol"],
                             "♀": ["female_symbol"],
                             "🧡": ["orange_heart"],
                             "􁚅": ["labrys_symbol"],
                             "􁚄": ["bisexual_triangles"],
                             "􁚃": ["black_triangle"],
                             "􁚂": ["pink_triangle"]},
                 "objects": {"🧻": ["toilet_paper"],
                             "🧱": ["brick"],
                             "🧨": ["firecracker"],
                             "🦴": ["bone"],
                             "􁚖": ["d20"],
                             "􁚕": ["d12"],
                             "􁚔": ["d10"],
                             "􁚓": ["d8"],
                             "􁚒": ["d4"]},
                 "nature": {"􁚛🌈": ["furry_pride", "rainbow_paw"],
                            "􁚛": ["paw"],
                            "􁚘": ["awoo"],
                            "􁚙": ["dont_awoo", "no_awoo"],
                            "🧝": ["elf"],
                            "🦝": ["raccoon"],
                            "🦜": ["parrot"],
                            "🦚": ["peacock"],
                            "􁙦": ["demon"]},
                 "people": {"🧑✈": ["pilot"],
                            "🧑⚕": ["health_worker"],
                            "🧑🚀": ["astronaut"],
                            "🧑🔬": ["scientist"],
                            "🧑🔧": ["mechanic"],
                            "🧑💻": ["technologist"],
                            "🧑🍳": ["chef"],
                            "🧐": ["monocle"],
                            "🥺": ["pleading"],
                            "🥶": ["cold"],
                            "🥵": ["hot"],
                            "🥴": ["woozy"],
                            "🥳": ["party_face"],
                            "🥰": ["smile_hearts"],
                            "🤯": ["mind_blown"],
                            "🤮": ["vomiting"],
                            "🤭": ["hand_over_mouth"],
                            "🤬": ["swearing"],
                            "🤫": ["shush"],
                            "🤪": ["crazy"],
                            "🤩": ["starry_eyes"],
                            "🤨": ["raised_eyebrow"],
                            "🕵􁘫": ["detective"],
                            "💆􁘫": ["massage"],
                            "💁􁘫": ["tipping_hand"],
                            "􁚐": ["hot_shit"],
                            "􁚗": ["headpats"],
                            "🧜": ["merperson"]},
                 "flags": {"􁚁": ["transgender_flag"],
                           "􁚀": ["polysexual_flag"],
                           "􁙿": ["polyamory_flag"],
                           "􁙾": ["pansexual_flag"],
                           "􁙽": ["nonbinary_flag"],
                           "􁙼": ["neutrois_flag"],
                           "􁙻": ["intersex_flag"],
                           "􁙺": ["genderqueer_flag"],
                           "􁙹": ["genderfluid_flag"],
                           "􁙸": ["deminonbinary_flag"],
                           "􁙷": ["demigirl_flag"],
                           "􁙶": ["demiguy_flag"],
                           "􁙵": ["bisexual_flag"],
                           "􁙴": ["bigender_flag"],
                           "􁙳": ["bear_flag"],
                           "􁙲": ["asexual_flag"],
                           "􁙱": ["aromantic_flag"],
                           "􁙰": ["agender_flag"],
                           "􁚆": ["lesbian_flag"],
                           "􁙐": ["paw-modifier"],
                           "􁙑": ["claw-modifier"]},
                 "food": {"􁚑": ["cannabis_leaf"]}
                 }


emoji_post = {}

# Convert aforementioned unicode addresses to actual emojis
mm_emojis = [chr(mm_emoji) for mm_emoji in mm_emojis]

# Load a file called "emojis.json" from same directory.
# On discord android, this file is on "/assets/data/emojis.json"
with open('emojis.json', 'r') as f:
    emoji_j_pre = json.load(f)

# Add skin tone modifiers as emojis
# so that mobile clients can send emojis with diversity
unicodecolorbase = 0x1f3fb
mutantcolorbase = 0x101600

for st_count in range(1, 6):
    character = chr(unicodecolorbase)
    custom_emojis["flags"][character] = [f"skin-tone-{st_count}"]
    unicodecolorbase += 1

for st_count in range(6, 51):
    character = chr(mutantcolorbase)
    custom_emojis["flags"][character] = [f"skin-tone-{st_count}"]
    mutantcolorbase += 1

# Iterate through every emoji in emojis.json
for category in emoji_j_pre:
    emoji_post[category] = []
    for emoji in emoji_j_pre[category]:
        emoji_post[category].append(emoji)
        # If this is MM emoji, create variants
        if emoji["surrogates"] in mm_emojis:
            names = emoji["names"]
            # Add a variant for each MM type
            for mm_type in mm_types:
                # Ignore paw version of hand_splayed, because it's missing
                if mm_type == "paw" and emoji["surrogates"] == chr(0x1f590):
                    continue
                # Copy the variant's entry bc of pointers
                variant = copy.deepcopy(emoji)
                # Append variant info to the emoji entry
                variant["names"] = [f"{name}_{mm_type}" for name in names]
                variant["surrogates"] += mm_types[mm_type]
                variant["unicodeVersion"] = 11
                # and add it to the result file
                emoji_post[category].append(variant)

    # Add custom emojis
    if category in custom_emojis:
        for custom_emoji in custom_emojis[category]:
            entry = {"names": custom_emojis[category][custom_emoji],
                     "surrogates": custom_emoji}
            emoji_post[category].append(entry)

# When finally done, dump the result as "emojispost.json"
with open('emojispost.json', 'w') as f:
    json.dump(emoji_post, f, indent=2)
