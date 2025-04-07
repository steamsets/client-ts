# LeaderboardListBadgesResponse

## Example Usage

```typescript
import { LeaderboardListBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: LeaderboardListBadgesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1LeaderboardListBadgesResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1LeaderboardListBadgesResponseBody.json",
    badges: [
      {
        appId: 730,
        appImage:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
        appName: "Counter-Strike: Global Offensive",
        badgeId: "bdg_123",
        firstCompletion: new Date("2023-01-01T00:00:00Z"),
        highestLevel: 123456,
        image:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2861690/088ef3b86f9529b031929eab0a2e60bf30d1b904.png",
        isEvent: true,
        isFoil: true,
        isSale: true,
        lastCompletion: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        name: "Sommer Sale 2024 Foil 1+",
        price: 1200,
        scarcity: 123456,
        steamId: 76561198842603730,
        xp: 123456,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `v1LeaderboardListBadgesResponseBody`                                                                            | [components.V1LeaderboardListBadgesResponseBody](../../models/components/v1leaderboardlistbadgesresponsebody.md) | :heavy_minus_sign:                                                                                               | OK                                                                                                               |