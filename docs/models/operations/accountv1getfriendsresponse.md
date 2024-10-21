# AccountV1GetFriendsResponse

## Example Usage

```typescript
import { AccountV1GetFriendsResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1GetFriendsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountFriendsResponseBody: {
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
        bans: 521848,
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
        economyBan: "steam",
        foilBadgeCost: 123456,
        foilBadges: 123456,
        friends: 123456,
        friendsSince: new Date("2023-03-31T11:16:03.610Z"),
        gameBans: 264555,
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
          id: 1,
          name: "Europe",
        },
        roles: [
          {
            rating: 774234,
            role: "emerald",
          },
        ],
        state: {
          id: 1,
          name: "Baden-Wurttemberg",
        },
        steamId: "76561198842603734",
        steamSetsScore: 568434,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        vacBans: 18789,
        xp: 123456,
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `v1AccountFriendsResponseBody`                                                                     | [components.V1AccountFriendsResponseBody](../../models/components/v1accountfriendsresponsebody.md) | :heavy_minus_sign:                                                                                 | OK                                                                                                 |