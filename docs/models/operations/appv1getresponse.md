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
          completedAt: new Date("2024-06-09T03:17:10.252Z"),
          level: 528895,
          xp: 479977,
        },
        badgeImage: "<value>",
        firstCompletion: new Date("2023-09-15T13:50:39.138Z"),
        highestLevel: 392785,
        isFoil: false,
        lastCompletion: new Date("2024-10-11T10:53:37.826Z"),
        level: 836079,
        name: "<value>",
        price: 71036,
        publicId: "<value>",
        scarcity: 337396,
        steamId: 87129,
        xp: 648172,
      },
    ],
    detail: {
      appId: 730,
      image: "a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
      isEvent: true,
      isSale: true,
      name: "CS2",
      price: 1200,
      shortName: "csgo",
      type: "game",
    },
    items: [
      {
        cost: 20218,
        description: "Horizontal stable time-frame",
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