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
          completedAt: new Date("2023-02-03T15:02:53.228Z"),
          level: 570197,
          xp: 438601,
        },
        badgeImage: "<value>",
        firstCompletion: new Date("2024-12-19T06:11:07.571Z"),
        highestLevel: 102044,
        isFoil: false,
        lastCompletion: new Date("2022-08-17T22:17:39.092Z"),
        level: 161309,
        name: "<value>",
        price: 653108,
        publicId: "<id>",
        scarcity: 253291,
        steamId: 466311,
        xp: 244425,
      },
    ],
    detail: {
      appId: 730,
      image: "a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
      isEvent: true,
      isSale: true,
      itadId: "<id>",
      name: "CS2",
      price: 1200,
      shortName: "csgo",
      type: "game",
    },
    items: [
      {
        cost: 158969,
        description: "gosh arraign barracks",
        largeImage: "<value>",
        name: "<value>",
        publicId: "<id>",
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