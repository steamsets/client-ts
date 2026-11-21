# PublicAccount

## Example Usage

```typescript
import { PublicAccount } from "@steamsets/client-ts/models/components";

let value: PublicAccount = {
  accountId: 882338006,
  avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
  badges: {
    foil: 489981,
    normal: 713157,
    total: 346959,
  },
  level: 78832,
  name: "steamsets",
  ranks: {
    apps: {
      rank: 309369,
      score: 26649,
      total: 134299,
    },
    awardsGiven: {
      rank: 551877,
      score: 848969,
      total: 701802,
    },
    awardsReceived: {
      rank: 442745,
      score: 101229,
      total: 380622,
    },
    badges: {
      rank: 374669,
      score: 312892,
      total: 838084,
    },
    bans: {
      rank: 167695,
      score: 560320,
      total: 36282,
    },
    foilBadges: {
      rank: 311671,
      score: 181825,
      total: 541288,
    },
    gameBans: {
      rank: 368093,
      score: 662770,
      total: 41548,
    },
    normalBadges: {
      rank: 421436,
      score: 658314,
      total: 640274,
    },
    playtime: {
      rank: 151989,
      score: 263395,
      total: 577235,
    },
    pointsGiven: {
      rank: 986580,
      score: 666771,
      total: 729684,
    },
    pointsReceived: {
      rank: 180315,
      score: 268359,
      total: 823153,
    },
    steamSets: {
      rank: 166474,
      score: 489242,
      total: 831785,
    },
    vacBans: {
      rank: 321151,
      score: 654193,
      total: 919638,
    },
    xp: {
      rank: 586728,
      score: 215947,
      total: 246712,
    },
  },
  steamId64: "76561198842603734",
  vanity: {
    steam: "<value>",
    steamSets: "<value>",
  },
  xp: 522147,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accountId`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | The Steam account id, the low 32 bits of the SteamID64.                          | 882338006                                                                        |
| `avatar`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | The Steam avatar hash.                                                           | f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9                                                 |
| `badges`                                                                         | [components.PublicAccountBadges](../../models/components/publicaccountbadges.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `level`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | The Steam level.                                                                 |                                                                                  |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | steamsets                                                                        |
| `ranks`                                                                          | [components.PublicAccountRanks](../../models/components/publicaccountranks.md)   | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `steamId64`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The SteamID64, as a string because it does not fit a JSON number.                | 76561198842603734                                                                |
| `vanity`                                                                         | [components.PublicAccountVanity](../../models/components/publicaccountvanity.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `xp`                                                                             | *number*                                                                         | :heavy_check_mark:                                                               | The Steam XP.                                                                    |                                                                                  |