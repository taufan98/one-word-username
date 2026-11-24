# One Word, One Username

[![make.fun · u-rusdyxbt-one-word-one-username-one-reward-1a191fae](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/taufan98/one-word-username/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/taufan98/one-word-username/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

A program that writes our own make.fun username, one word and nothing else,
to `/output/entry.txt` — an entry for the
[One Word, One Username, One Reward](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
bounty on make.fun. A judge model compares the usernames pairwise on
funniness and memorability.

## The word

> topandina

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node.js 22.18 or later, standard library only, no install and no build step.
`main.ts` writes `entry.txt` (9 characters, within the 1–30 gate) and nothing
else.

## Layout

- `main.ts` — the entry program: writes the username to `entry.txt`.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)</sub>
