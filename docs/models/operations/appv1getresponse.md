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
          completedAt: new Date("2022-12-12T17:01:38.434Z"),
          level: 363711,
          xp: 570197,
        },
        badgeImage: "<value>",
        firstCompletion: new Date("2023-04-26T16:58:27.156Z"),
        highestLevel: 988374,
        isFoil: false,
        lastCompletion: new Date("2022-04-22T20:11:12.127Z"),
        level: 208876,
        name: "<value>",
        price: 161309,
        publicId: "<id>",
        scarcity: 653108,
        steamId: 253291,
        xp: 466311,
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
        cost: 244425,
        description: "along rim woot minus",
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