# AppV1GetResponse

## Example Usage

```typescript
import { AppV1GetResponse } from "@steamsets/client-ts/models/operations";

let value: AppV1GetResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AppResponseBody: {
    dollarSchema: "https://api.steamsets.com/schemas/V1AppResponseBody.json",
    badges: [
      {
        accountBadge: {
          completedAt: new Date("2024-02-04T14:29:27.520Z"),
          level: 60225,
          xp: 666767,
        },
        badgeImage: "<value>",
        firstCompletion: new Date("2024-01-06T00:27:30.681Z"),
        highestLevel: 210382,
        isFoil: false,
        lastCompletion: new Date("2022-05-22T07:16:38.400Z"),
        level: 315428,
        name: "<value>",
        price: 363711,
        publicId: "<value>",
        scarcity: 570197,
        steamId: 438601,
        xp: 988374,
      },
    ],
    detail: {
      appId: 730,
      image: "a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
      isEvent: true,
      isSale: true,
      itadId: "<value>",
      name: "CS2",
      price: 1200,
      shortName: "csgo",
      type: "game",
    },
    items: [
      {
        cost: 102044,
        description: "Diverse clear-thinking moderator",
        largeImage: "<value>",
        name: "<value>",
        publicId: "<value>",
        smallImage: "<value>",
        title: "<value>",
        type: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `v1AppResponseBody`                                                          | [components.V1AppResponseBody](../../models/components/v1appresponsebody.md) | :heavy_minus_sign:                                                           | OK                                                                           |