# V1ActivityListGlobalFeedResponseBody

## Example Usage

```typescript
import { V1ActivityListGlobalFeedResponseBody } from "@steamsets/client-ts/models/components";

let value: V1ActivityListGlobalFeedResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1ActivityListGlobalFeedResponseBody.json",
  events: [
    {
      account: {
        animatedAvatar: "<value>",
        appCost: 123456,
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        avatarFrame: "<value>",
        awardsGiven: 123456,
        awardsReceived: 123456,
        background: "<value>",
        badges: 123456,
        bans: 244812,
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
        foilBadgeCost: 123456,
        foilBadges: 123456,
        friends: 123456,
        gameBans: 164389,
        images: [
          {
            active: true,
            fileName: "avatar.png",
            imageId: "img_wasd123",
            imageType: "avatar",
          },
        ],
        level: 123456,
        miniBackground: "<value>",
        name: "steamsets",
        normalBadgeCost: 123456,
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
            },
            rating: 590189,
            role: "badge_scout",
          },
        ],
        state: null,
        steamId: "76561198842603734",
        steamSetsScore: 914444,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        vacBans: 981884,
        xp: 123456,
      },
      accountId: 853550,
      eventType: "<value>",
      occurredAt: new Date("2025-06-16T00:04:54.197Z"),
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | A URL to the JSON Schema for this object.                                                      | https://api.steamsets.com/schemas/V1ActivityListGlobalFeedResponseBody.json                    |
| `events`                                                                                       | [components.V1ActivityGlobalFeedEvent](../../models/components/v1activityglobalfeedevent.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |