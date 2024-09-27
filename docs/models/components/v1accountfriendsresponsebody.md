# V1AccountFriendsResponseBody

## Example Usage

```typescript
import { V1AccountFriendsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountFriendsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountFriendsResponseBody.json",
  friends: [
    {
      appCost: 123456,
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      averagePlaytime: 123456,
      awardsGiven: 123456,
      awardsReceived: 123456,
      badgeInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
      },
      badges: 123456,
      bans: 223081,
      city: {
        code: "DE",
        id: 1,
        name: "Germany",
      },
      country: {
        code: "DE",
        id: 1,
        name: "Germany",
      },
      createdAt: new Date("2023-01-01T00:00:00Z"),
      economyBan: "steam",
      foilBadgeCost: 123456,
      foilBadges: 123456,
      friends: 123456,
      friendsSince: new Date("2024-11-10T05:06:35.997Z"),
      gameBans: 447125,
      hidden: true,
      level: 123456,
      limitedApps: 123456,
      name: "steamsets",
      normalBadgeCost: 123456,
      normalBadges: 123456,
      playtime: 123456,
      pointsGiven: 123456,
      pointsReceived: 123456,
      privacy: "public",
      region: {
        code: "DE",
        id: 1,
        name: "Germany",
      },
      roles: [
        {
          colorr: "#ff0000",
          icon: "tier_1.svg",
          name: "Tier 1",
          rating: 846409,
          role: "contributor",
        },
      ],
      state: {
        code: "DE",
        id: 1,
        name: "Germany",
      },
      steamId: "76561198842603734",
      steamSetsScore: 297437,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      vacBans: 813798,
      xp: 123456,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | https://api.steamsets.com/schemas/V1AccountFriendsResponseBody.json        |
| `friends`                                                                  | [components.V1AccountFriend](../../models/components/v1accountfriend.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |