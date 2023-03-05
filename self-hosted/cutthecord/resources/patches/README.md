## CutTheCord: Patch List

This is the list of patches available for CutTheCord. Have an idea? Open an issue, and I'll get to work. PRs are also welcome!

The patches with **bold** names are the ones I'm most proud of.

---

- betterdmheader: Replaces call button on dm header with a search button.
- betterrotation: This patch changes rotation settings to disallow upside down rotation.
- **bettertm**: Replaces the :tm: and :registered: emojis with rendered unicode variants, making them look much better.

Before bettertm:

![nearly unreadable tm and r characters](https://elixi.re/t/saxb4coc0.png)

After bettertm:

![very readable tm and r characters](https://elixi.re/t/snzx9kghi.png)

- bettertmlight: same thing as bettertm, but designed for light theme users.
- blobs: Replaces official twemoji emojis with blobs

![Emoji drawer with blobs](https://elixi.re/t/s0s9e9brg.png)

- branding: Changes app's name from Discord to a custom name, changes app icon to a custom image, changes version number to account better for cutthecord's release schedule (and fixes a captcha link). Also enables backup and debug abilities. This is automatically built into all branches.

![Custom logo and custom app name](https://elixi.re/t/slogu6wei.png)

- customdefaultemoji: Changes default emojis, which show up in a couple places. It's uesd to insert star into the list, as many bots have starboards.
- customfont: Has instructions for changing the font used.

![Google Sans as font on Discord](https://lasagna.cat/t/mxvka1kz9.png)

- customring: Has instructions for changing the ringtone.

Video demonstration: https://www.youtube.com/watch?v=NMRPsAgqtWQ

- **customtheme**: Allows setting a custom theme. The one on repo is a pitch black theme, with green links and red accent theme.

![pitch black theme on discord](https://elixi.re/t/mh3eirsy9.png)

(square avatars are not a part of this patch, scroll down to `squareavatars` if you're looking for them)

- customversion: Changes the version string in settings to include branch information. This is automatically built into all branches.

![custom version string showing patch list, build time, and license information for mutant standard](https://elixi.re/t/me4yb05ds.png)

- disable-mobileindicator: This is the patch inspired me to start working on CutTheCord. It makes your device act like a desktop client, and disables the "mobile indicator" on discord. However, this breaks notifications.
- experiments: Enables some dev-only things, like developer options tab or a secret staff-only, half-assed AMOLED-optimized theme called "pure evil". The developer options tab does not work.
- hideunusableemojis: Only shows the emojis the user can actually use (mostly hides custom emojis from other guilds when you don't have Nitro).
- hqavatars: Uses 256x256 variants of avatars instead of 128x128.
- **litecord**: Changes the server the app connects to, and specifically tries to connect to a Litecord server. [Litecord is a FOSS re-implementation of Discord's backend.](https://wildcard.elixi.re/i/l3lxhd3a.png)
- **mutant**: Replaces official twemoji emojis with [mutant standard emojis](https://mutant.tech/), and injects custom mutantstd emojis to the app. Second patch I ever developed!

![Emoji drawer with mutant standard emojis](https://wildcard.elixi.re/t/ssnmlwgnc.png)

- necessary: Does some necessary things that may be required to get the app running properly, not available for every version, but is automatically built into all branches.
- noblocked: Hides blocked messages and the "# blocked messages" thingy. Useful for those of us who just can't resist tapping those.
- noemojibutton: Hides the emoji button.
- nocamerabutton: Hides the camera button next to album button, and prevents the expand behavior while kb is open.
- nonearby: Intentionally breaks "add nearby people" feature.

![An image of noprofilestrip](https://wildcard.elixi.re/t/szqcunmxi.png)

- nospoiler: Automatically shows all spoilers. Useful for moderation.
- **notrack**: Disables most of the tracking in Discord. Included in all official branches.
- nozlib: Disables zlib-stream field on wss, making it easier to parse wss communications when MITMing the app.
- psuedonitro-viewer: This patch allows viewing emojis sent with pseudoNitro.

![An image of pseudoNitro](https://lasagna.cat/i/nw0kfk2r.png)

- profilemention: Restores the behavior where tapping a user's profile picture adds their mention to the chat box instead of opening their profile.
- **supplemental**: Adds some helper functions needed by certain patches.
- **showtag**: Shows user's username after their nickname, if user has a nickname.
- **slashcommands**: Adds a lot of slash commands (all the decent ones on desktop and more), alongside some other useful features such as an account switcher. Also allows enabling or disabling a couple patches such as `channelleak` (shows all channel names and topics, even those you lack the permissions to read) or `notyping` (disables sending typing event to discord servers). I'm quite proud of this patch :p [Read its own README.md for more information](slashcommands/README.md).

![account switching on cutthecord](https://wildcard.elixi.re/t/sdi6aq1l6.png)

![tableflip slash command](https://wildcard.elixi.re/t/s27h0ghd6.png)

- **squareavatars**: Adds square avatars. Because circles are for losers.

![square avatars on discord](https://elixi.re/t/mh3eirsy9.png)

(pitch black theme is not a part of this patch, scroll up to `customtheme` if you're looking for it)

- **tokenlogin**: Allows logging in with just a token, instead of having to enter email, password, do 2FA, do captcha and possibly also tap a link on email. Especially useful when you don't have gapps as it allows skipping captcha (which relies on GMS).
