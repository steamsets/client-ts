# PostV1AccountListBadgesResponse

## Example Usage

```typescript
import { PostV1AccountListBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountListBadgesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountListBadgesResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountListBadgesResponseBody.json",
    badges: [
      {
        accountInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        appId: 934811,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 189240,
        baseXp: 797946,
        firstCompletion: new Date("2025-01-04T05:05:12.803Z"),
        highestLevel: 555673,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-06-05T22:06:05.993Z"),
        name: "<value>",
        price: 362257,
        scarcity: 674338,
        steamId: 81382,
      },
    ],
    pages: 1,
    totalHits: 1,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `v1AccountListBadgesResponseBody`                                                                        | [components.V1AccountListBadgesResponseBody](../../models/components/v1accountlistbadgesresponsebody.md) | :heavy_minus_sign:                                                                                       | OK                                                                                                       |