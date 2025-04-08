# StaffListStaffResponse

## Example Usage

```typescript
import { StaffListStaffResponse } from "@steamsets/client-ts/models/operations";

let value: StaffListStaffResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  leaderboardAccounts: [
    {
      appCost: 123456,
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      awardsGiven: 123456,
      awardsReceived: 123456,
      badges: 123456,
      bans: 878877,
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
      gameBans: 611252,
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
      roles: [
        {
          rating: 186672,
          role: "partner",
        },
      ],
      state: {
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 171374,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      vacBans: 256574,
      xp: 123456,
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `leaderboardAccounts`                                                            | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)[] | :heavy_minus_sign:                                                               | OK                                                                               |