# LeaderboardV1GetBadgesResponse

## Example Usage

```typescript
import { LeaderboardV1GetBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: LeaderboardV1GetBadgesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1LeaderboardBadgeResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1LeaderboardBadgeResponseBody.json",
    badges: [
      {
        appId: 730,
        appImage:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
        appName: "Counter-Strike: Global Offensive",
        badgeId: "bdg_123",
        event: {
          bodyImage: "8659ea8bf04142fb4634342b24fd3288008a3b4b.jpg",
          downvotes: 123456,
          endsAt: new Date("2023-01-01T00:00:00Z"),
          gid: "123456",
          headerImage: "9d6874c4a700cee137b22c60604eb4443f41ce54.jpg",
          name: "Counter-Strike: Global Offensive",
          postedAt: new Date("2023-01-01T00:00:00Z"),
          startsAt: new Date("2023-01-01T00:00:00Z"),
          title: "Counter-Strike: Global Offensive",
          upvotes: 123456,
        },
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `v1LeaderboardBadgeResponseBody`                                                                       | [components.V1LeaderboardBadgeResponseBody](../../models/components/v1leaderboardbadgeresponsebody.md) | :heavy_minus_sign:                                                                                     | OK                                                                                                     |