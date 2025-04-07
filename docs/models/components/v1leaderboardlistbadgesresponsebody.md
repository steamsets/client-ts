# V1LeaderboardListBadgesResponseBody

## Example Usage

```typescript
import { V1LeaderboardListBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardListBadgesResponseBody = {
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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `dollarSchema`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | A URL to the JSON Schema for this object.                                        | https://api.steamsets.com/schemas/V1LeaderboardListBadgesResponseBody.json       |
| `badges`                                                                         | [components.V1LeaderboardBadge](../../models/components/v1leaderboardbadge.md)[] | :heavy_check_mark:                                                               | The badges                                                                       |                                                                                  |