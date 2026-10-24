# AccountNotificationTradeMatchCard

## Example Usage

```typescript
import { AccountNotificationTradeMatchCard } from "@steamsets/client-ts/models/components";

let value: AccountNotificationTradeMatchCard = {
  accounts: 508240,
  appId: 147157,
  appName: "<value>",
  cardName: "<value>",
  classId: 828394,
  icon: "<value>",
  isFoil: true,
  missingInSet: 187945,
  people: [
    {
      animatedAvatar: "<value>",
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      avatarFrame: "<value>",
      awardsGiven: 123456,
      awardsReceived: 123456,
      background: "<value>",
      badges: 123456,
      bans: 610995,
      city: {
        name: "Bad Krozingen",
      },
      country: null,
      createdAt: new Date("2023-01-01T00:00:00Z"),
      donated: 123456,
      economyBan: "steam",
      foilBadges: 123456,
      friends: 123456,
      gameBans: 990011,
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
      steamSetsScore: 268826,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      supporter: {
        active: true,
        months: 3,
      },
      themeColor: "#FF5733",
      vacBans: 710906,
      xp: 123456,
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accounts`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | How many accounts matched this card                                              |
| `appId`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `appName`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `cardName`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `classId`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `icon`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Steam economy image hash, or a full URL                                          |
| `isFoil`                                                                         | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `missingInSet`                                                                   | *number*                                                                         | :heavy_check_mark:                                                               | How many cards of the set the needer lacks                                       |
| `people`                                                                         | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)[] | :heavy_check_mark:                                                               | The first matched accounts, empty when locked                                    |