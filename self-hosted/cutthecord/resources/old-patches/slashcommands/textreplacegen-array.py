smol = {
    "a": "ᴀ",
    "b": "ʙ",
    "c": "ᴄ",
    "d": "ᴅ",
    "e": "ᴇ",
    "f": "ꜰ",
    "g": "ɢ",
    "h": "ʜ",
    "i": "ɪ",
    "j": "ᴊ",
    "k": "ᴋ",
    "l": "ʟ",
    "m": "ᴍ",
    "n": "ɴ",
    "o": "ᴏ",
    "p": "ᴘ",
    "q": "ǫ",
    "r": "ʀ",
    "s": "s",
    "t": "ᴛ",
    "u": "ᴜ",
    "v": "ᴠ",
    "w": "ᴡ",
    "x": "x",
    "y": "ʏ",
    "z": "ᴢ"
}

smoller = {
    "a": "ᵃ",
    "b": "ᵇ",
    "c": "ᶜ",
    "d": "ᵈ",
    "e": "ᵉ",
    "f": "ᶠ",
    "g": "ᵍ",
    "h": "ʰ",
    "i": "ᶦ",
    "j": "ʲ",
    "k": "ᵏ",
    "l": "ˡ",
    "m": "ᵐ",
    "n": "ⁿ",
    "o": "ᵒ",
    "p": "ᵖ",
    "q": "ᑫ",
    "r": "ʳ",
    "s": "ˢ",
    "t": "ᵗ",
    "u": "ᵘ",
    "v": "ᵛ",
    "w": "ʷ",
    "x": "ˣ",
    "y": "ʸ",
    "z": "ᶻ"
}

flipped = {
    "a": "ɐ",
    "b": "q",
    "c": "ɔ",
    "d": "p",
    "e": "ǝ",
    "f": "ɟ",
    "g": "ƃ",
    "h": "ɥ",
    "i": "ı",
    "j": "ɾ",
    "k": "ʞ",
    "l": "ן",
    "m": "ɯ",
    "n": "u",
    "o": "o",
    "p": "d",
    "q": "b",
    "r": "ɹ",
    "s": "s",
    "t": "ʇ",
    "u": "n",
    "v": "ʌ",
    "w": "ʍ",
    "x": "x",
    "y": "ʎ",
    "z": "z"
}

morse = {
    " ": "/ ",
    ".": ".-.-.- ",
    ",": "--..-- ",
    ":": "---... ",
    "?": "..--.. ",
    "'": ".----. ",
    "-": "-....- ",
    "/": "-..-. ",
    "@": ".--.-. ",
    "=": "-...- ",
    "A": ".- ",
    "B": "-... ",
    "C": "-.-. ",
    "D": "-.. ",
    "E": ". ",
    "F": "..-. ",
    "G": "--. ",
    "H": ".... ",
    "I": ".. ",
    "J": ".--- ",
    "K": "-.- ",
    "L": ".-.. ",
    "M": "-- ",
    "N": "-. ",
    "O": "--- ",
    "P": ".--. ",
    "Q": "--.- ",
    "R": ".-. ",
    "S": "... ",
    "T": "- ",
    "U": "..- ",
    "V": "...- ",
    "W": ".-- ",
    "X": "-..- ",
    "Y": "-.-- ",
    "Z": "--.. ",
    "0": "----- ",
    "1": ".---- ",
    "2": "..--- ",
    "3": "...-- ",
    "4": "....- ",
    "5": "..... ",
    "6": "-.... ",
    "7": "--... ",
    "8": "---.. ",
    "9": "----. "
}

gordon = {
    "a": "𝗮",
    "b": "𝗯",
    "c": "𝗰",
    "d": "𝗱",
    "e": "𝗲",
    "f": "𝗳",
    "g": "𝗴",
    "h": "𝗵",
    "i": "𝗶",
    "j": "𝗷",
    "k": "𝗸",
    "l": "𝗹",
    "m": "𝗺",
    "n": "𝗻",
    "o": "𝗼",
    "p": "𝗽",
    "q": "𝗾",
    "r": "𝗿",
    "s": "𝘀",
    "t": "𝘁",
    "u": "𝘂",
    "v": "𝘃",
    "w": "𝘄",
    "x": "𝘅",
    "y": "𝘆",
    "z": "𝘇",
    "A": "𝗔",
    "B": "𝗕",
    "C": "𝗖",
    "D": "𝗗",
    "E": "𝗘",
    "F": "𝗙",
    "G": "𝗚",
    "H": "𝗛",
    "I": "𝗜",
    "J": "𝗝",
    "K": "𝗞",
    "L": "𝗟",
    "M": "𝗠",
    "N": "𝗡",
    "O": "𝗢",
    "P": "𝗣",
    "Q": "𝗤",
    "R": "𝗥",
    "S": "𝗦",
    "T": "𝗧",
    "U": "𝗨",
    "V": "𝗩",
    "W": "𝗪",
    "X": "𝗫",
    "Y": "𝗬",
    "Z": "𝗭",
    "0": "𝟬",
    "1": "𝟭",
    "2": "𝟮",
    "3": "𝟯",
    "4": "𝟰",
    "5": "𝟱",
    "6": "𝟲",
    "7": "𝟳",
    "8": "𝟴",
    "9": "𝟵"
}



code = """
    const-string v0, "before"

    const-string v1, "after"

    invoke-virtual {p0, v0, v1}, Ljava/lang/String;->replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0"""

fw = gordon

for entry in fw:
    if entry in ["\\", "\""]:
        continue
    print(code.replace("before", entry).replace("after", fw[entry]))
