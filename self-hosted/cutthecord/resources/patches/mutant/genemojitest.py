def genemojo(emojo, fitzpatrick=True, mutant=True):
    if fitzpatrick:
        unicodecolorbase = 0x1f3fb
        for oof in range(1, 6):
            character = chr(unicodecolorbase)
            print(f'{emojo}{character}', end='')
            unicodecolorbase += 1

    if mutant:
        mutantcolorbase = 0x101600
        for oof in range(6, 51):
            character = chr(mutantcolorbase)
            print(f'{emojo}{character}', end='')
            mutantcolorbase += 1
    print()


emojis = ["👆", "👇", "👈", "👉", "👊", "👋", "👌", "👍", "👎", "👏", "👐", "💅", "💪",
          "🖕", "🖖", "🙌", "🙏", "🤘", "🤙", "🤚", "🤛", "🤜", "🤝", "🤞", "🤳",
          "☝", "✊", "✋", "✌", "✍"]

mm_types = {"􁙐", "􁙑"}

for emoji in emojis:
    genemojo(emoji)
    for mm_type in mm_types:
        genemojo(emoji + mm_type, fitzpatrick=False)
