# AccountListBadgesResponse

## Example Usage

```typescript
import { AccountListBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: AccountListBadgesResponse = {
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
        appId: 105170,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 428509,
        baseXp: 290519,
        firstCompletion: new Date("2024-03-04T13:43:28.339Z"),
        highestLevel: 189916,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2025-02-11T18:29:43.586Z"),
        name: "<value>",
        price: 941713,
        scarcity: 957596,
        steamId: 945912,
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