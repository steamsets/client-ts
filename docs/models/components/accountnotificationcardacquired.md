# AccountNotificationCardAcquired

## Example Usage

```typescript
import { AccountNotificationCardAcquired } from "@steamsets/client-ts/models/components";

let value: AccountNotificationCardAcquired = {
  appId: 339756,
  appName: "<value>",
  cardName: "<value>",
  holder: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 721385,
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
    gameBans: 835341,
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
        extras: {
          "key": "<value>",
          "key1": "<value>",
        },
        rating: 66480,
        role: "donator",
      },
    ],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 561012,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
    },
    themeColor: "#FF5733",
    vacBans: 311995,
    xp: 123456,
  },
  icon: "<value>",
  isFoil: true,
  itemId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `appId`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `appName`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `cardName`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `holder`                                                                       | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `icon`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | Steam economy image hash, or a full URL                                        |
| `isFoil`                                                                       | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `itemId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |