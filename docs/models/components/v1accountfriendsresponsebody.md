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
      badges: 123456,
      bans: 613966,
      city: {
        id: 1,
        name: "Bad Krozingen",
      },
      country: {
        code: "DE",
        id: 1,
        name: "Germany",
      },
      createdAt: new Date("2023-01-01T00:00:00Z"),
      donated: 123456,
      economyBan: "steam",
      foilBadgeCost: 123456,
      foilBadges: 123456,
      friends: 123456,
      friendsSince: new Date("2024-08-10T01:17:06.903Z"),
      gameBans: 589910,
      level: 123456,
      name: "steamsets",
      normalBadgeCost: 123456,
      normalBadges: 123456,
      playtime: 123456,
      pointsGiven: 123456,
      pointsReceived: 123456,
      privacy: "public",
      region: {
        id: 1,
        name: "Europe",
      },
      roles: [
        {
          rating: 730122,
          role: "owner",
        },
      ],
      state: {
        id: 1,
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 398221,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      vacBans: 209843,
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