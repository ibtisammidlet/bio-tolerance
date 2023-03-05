## DisTok CutTheCord: Hide Unusable Emojis Patch

This patch only shows the emojis the user can actually use (mostly hides custom emojis from other guilds when you don't have Nitro).

![](https://lasagna.cat/i/4g6wfksl.png)

#### Thanks

Big thanks to [@BlueMods](https://gitdab.com/BlueMods) for sending in this patch.

#### Technical notes

We hook into `buildEmojiListItems` on com/discord/widgets/chat/input/emoji/EmojiPickerViewModel$Companion.smali.

On the loop, we check if it's usable with `isUsable` and skip if it isn't usable.

#### Available and tested on:
- 34.0
- 34.2
- 34.3
- 35.0-alpha1
- 36.3
- 36.5
- 38.0
- 38.1
- 40.04
- 41.02
- 41.05
- 41.06
- 41.10
- 41.11
- 42.0
- 42.1
- 42.3
- 44-alpha2
- 44-alpha4
- 44.5
- 44.6
- 45.2
- 46.0
- 46.3
- 48.0
- 48.1
- 48.2
- 49.1
- 49.10
- 49.12
- 49.13
- 49.2
- 49.8
- 52.3
- 53.0
- 53.1
- 53.3
- 53.6
- 53.8
- 54.0
- 55.1
- 56.0
- 78.4 - Alpha

