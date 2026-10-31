# Wanter

## Example Usage

```typescript
import { Wanter } from "@steamsets/client-ts/models/components";

let value: Wanter = {
  account: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 337406,
    city: {
      name: "Bad Krozingen",
    },
    country: {
      code: "DE",
      name: "Germany",
    },
    createdAt: new Date("2023-01-01T00:00:00Z"),
    donated: 123456,
    economyBan: "steam",
    foilBadges: 123456,
    friends: 123456,
    gameBans: 747187,
    level: 123456,
    miniBackground: "<value>",
    name: "steamsets",
    nameEffect: "rainbow",
    normalBadges: 123456,
    playtime: 123456,
    pointsGiven: 123456,
    pointsReceived: 123456,
    privacy: "public",
    region: {
      name: "Europe",
    },
    roles: [],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 634507,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
    },
    themeColor: "#FF5733",
    vacBans: 121724,
    xp: 123456,
  },
  badgeImage: "<value>",
  badgeLevel: 550900,
  missingInSet: 593123,
  path: [
    {
      animatedAvatar: "<value>",
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      avatarFrame: "<value>",
      awardsGiven: 123456,
      awardsReceived: 123456,
      background: "<value>",
      badges: 123456,
      bans: 34892,
      city: {
        name: "Bad Krozingen",
      },
      country: {
        code: "DE",
        name: "Germany",
      },
      createdAt: new Date("2023-01-01T00:00:00Z"),
      donated: 123456,
      economyBan: "steam",
      foilBadges: 123456,
      friends: 123456,
      gameBans: 809650,
      level: 123456,
      miniBackground: "<value>",
      name: "steamsets",
      nameEffect: "rainbow",
      normalBadges: 123456,
      playtime: 123456,
      pointsGiven: 123456,
      pointsReceived: 123456,
      privacy: "public",
      region: {
        name: "Europe",
      },
      roles: null,
      state: {
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 681590,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      supporter: {
        active: true,
        months: 3,
      },
      themeColor: "#FF5733",
      vacBans: 922010,
      xp: 123456,
    },
  ],
  pathFound: true,
  reason: "watch",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `account`                                                                                                        | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                                   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `badgeImage`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The art of that badge level, for reason set                                                                      |
| `badgeLevel`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The badge level the card helps the account craft, for reason set: its crafted level plus one, 1 for a foil badge |
| `distance`                                                                                                       | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Number of hops from requester to wanter                                                                          |
| `missingInSet`                                                                                                   | *number*                                                                                                         | :heavy_check_mark:                                                                                               | How many cards of the set the account lacks, for reason set                                                      |
| `path`                                                                                                           | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)[]                                 | :heavy_minus_sign:                                                                                               | Accounts from requester (first) to wanter (last), inclusive                                                      |
| `pathFound`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether a friend path was found within maxDepth                                                                  |
| `reason`                                                                                                         | [components.WanterReason](../../models/components/wanterreason.md)                                               | :heavy_check_mark:                                                                                               | Why the account wants the card: it needs it to finish a set, has it on its wishlist, or watches it               |
| `tradeUrl`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The wanter's Steam trade offer link, when the wanter added one                                                   |