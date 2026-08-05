# Owner

## Example Usage

```typescript
import { Owner } from "@steamsets/client-ts/models/components";

let value: Owner = {
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
    themeColor: "#FF5733",
    vacBans: 121724,
    xp: 123456,
  },
  amount: 425941,
  assetId: 982501,
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
      bans: 28798,
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
      gameBans: 708752,
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
      roles: [
        {
          extras: {},
          rating: 138555,
          role: "sapphire",
        },
      ],
      state: {
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 291402,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      themeColor: "#FF5733",
      vacBans: 314179,
      xp: 123456,
    },
  ],
  pathFound: false,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `account`                                                                                              | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `amount`                                                                                               | *number*                                                                                               | :heavy_check_mark:                                                                                     | Number of copies owned                                                                                 |
| `assetId`                                                                                              | *number*                                                                                               | :heavy_check_mark:                                                                                     | A representative asset id for deep-linking into the owner's inventory (#{appId}_{contextId}_{assetId}) |
| `distance`                                                                                             | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Number of hops from requester to owner                                                                 |
| `path`                                                                                                 | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)[]                       | :heavy_minus_sign:                                                                                     | Accounts from requester (first) to owner (last), inclusive                                             |
| `pathFound`                                                                                            | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | Whether a friend path was found within maxDepth                                                        |