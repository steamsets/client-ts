# AccountNotificationTradeMatch

## Example Usage

```typescript
import { AccountNotificationTradeMatch } from "@steamsets/client-ts/models/components";

let value: AccountNotificationTradeMatch = {
  cards: [
    {
      accounts: 453417,
      appId: 439969,
      appName: "<value>",
      cardName: "<value>",
      classId: 207796,
      icon: "<value>",
      isFoil: false,
      missingInSet: 223493,
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
          bans: 731882,
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
          gameBans: 904276,
          isHidden: true,
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
          steamSetsScore: 25773,
          steamSetsVanity: "steamsets",
          steamVanity: "steamsets",
          supporter: {
            active: true,
            months: 3,
            streak: 0,
          },
          themeColor: "#FF5733",
          vacBans: 281884,
          xp: 123456,
        },
      ],
    },
  ],
  locked: false,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `cards`                                                                                                        | [components.AccountNotificationTradeMatchCard](../../models/components/accountnotificationtradematchcard.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `locked`                                                                                                       | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | True when the reader's role does not include the names: each card has its account count and no people          |