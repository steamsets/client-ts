# V1AccountListFriendsResponseBody

## Example Usage

```typescript
import { V1AccountListFriendsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListFriendsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountListFriendsResponseBody.json",
  friends: [
    {
      appCost: 123456,
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      awardsGiven: 123456,
      awardsReceived: 123456,
      badges: 123456,
      bans: 671481,
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
      friendsSince: new Date("2024-10-23T09:55:13.055Z"),
      gameBans: 774271,
      level: 123456,
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
      roles: [],
      state: {
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 28732,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      vacBans: 304640,
      xp: 123456,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | https://api.steamsets.com/schemas/V1AccountListFriendsResponseBody.json    |
| `friends`                                                                  | [components.V1AccountFriend](../../models/components/v1accountfriend.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |