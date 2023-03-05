## DisTok CutTheCord: Show Tag Patch

This patch shows user's username after their nickname, if user has a nickname.

Example, no nickname:

![](https://lasagna.cat/i/c28755s6.png)

Example, with nickname:

![](https://lasagna.cat/i/uy68njkr.png)


#### Technical notes

This hooks into `getNickOrUsername` function, specifically after `getNickname` is verified to be not empty. It creates a stringbuilder and appends ` (username#discriminator)` to it.

As of 78.4 - Alpha, it also appends `#discriminator` to username.

#### Available and tested on:
- 33.1
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

