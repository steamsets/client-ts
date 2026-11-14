# AccountNotification

## Example Usage

```typescript
import { AccountNotification } from "@steamsets/client-ts/models/components";

let value: AccountNotification = {
  archivedAt: new Date("2025-01-30T18:10:08.887Z"),
  cardAcquired: {
    appId: 674025,
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
  },
  createdAt: new Date("2024-03-31T14:24:32.344Z"),
  id: 146908,
  kind: "submission_replied",
  message: {
    action: "<value>",
    icon: "<value>",
    lines: [],
    title: "<value>",
    url: "https://handsome-information.name/",
  },
  readAt: new Date("2025-02-19T16:18:45.397Z"),
  tradeMatch: {
    cards: [],
    locked: false,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `archivedAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | When the account archived it, null in the inbox                                                                    |
| `cardAcquired`                                                                                                     | [components.AccountNotificationCardAcquired](../../models/components/accountnotificationcardacquired.md)           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `connectionBroken`                                                                                                 | [components.AccountNotificationConnectionBroken](../../models/components/accountnotificationconnectionbroken.md)   | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `kind`                                                                                                             | [components.AccountNotificationKind](../../models/components/accountnotificationkind.md)                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `message`                                                                                                          | [components.AccountNotificationMessage](../../models/components/accountnotificationmessage.md)                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `readAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | When the account read it, null while unread                                                                        |
| `submissionReplied`                                                                                                | [components.AccountNotificationSubmissionReplied](../../models/components/accountnotificationsubmissionreplied.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `tradeMatch`                                                                                                       | [components.AccountNotificationTradeMatch](../../models/components/accountnotificationtradematch.md)               | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |