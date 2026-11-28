# EventActivityGlobal

## Example Usage

```typescript
import { EventActivityGlobal } from "@steamsets/client-ts/models/operations";

let value: EventActivityGlobal = {
  data: {
    value: {
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
        isHidden: false,
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
            rating: 418270,
            role: "donator",
          },
        ],
        state: {
          name: "Baden-Wurttemberg",
        },
        steamId: "76561198842603734",
        steamSetsScore: 121724,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        supporter: {
          active: true,
          months: 3,
          streak: 0,
        },
        themeColor: "#FF5733",
        vacBans: 325508,
        xp: 123456,
      },
      appBadge: {
        accountInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        appId: 255278,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 267127,
        baseXp: 569677,
        cardCount: 451732,
        firstCompletion: new Date("2025-10-14T14:59:56.930Z"),
        highestLevel: 642587,
        isEvent: false,
        isFoil: true,
        isNmc: true,
        isSale: false,
        lastCompletion: new Date("2026-03-31T21:12:39.791Z"),
        name: "<value>",
        noListing: false,
        price: 215870,
        scarcity: 499252,
        steamId: 372005,
        trackedHolders: 138718,
      },
      eventType: "<value>",
      occurredAt: new Date("2024-08-13T22:27:20.667Z"),
      rank: {
        bucket: "<value>",
        current: 160121,
        leaderboard: "<value>",
        location: {
          countryCode: "DE",
          countryName: "Germany",
          region: "Europe",
          type: "<value>",
        },
        previous: 524914,
      },
    },
  },
  event: "activity.global",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [components.LiveSubscribeActivityGlobal](../../models/components/livesubscribeactivityglobal.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `event`                                                                                          | *"activity.global"*                                                                              | :heavy_check_mark:                                                                               | The event name.                                                                                  |
| `id`                                                                                             | *string*                                                                                         | :heavy_minus_sign:                                                                               | The event ID.                                                                                    |
| `retry`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | The retry time in milliseconds.                                                                  |