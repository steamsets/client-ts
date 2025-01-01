# AccountV1GetBadgesResponse

## Example Usage

```typescript
import { AccountV1GetBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1GetBadgesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1BadgesResponseBody: {
    dollarSchema: "https://api.steamsets.com/schemas/V1BadgesResponseBody.json",
    badges: [
      {
        accountInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        appId: 71036,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 87129,
        baseXp: 20218,
        firstCompletion: new Date("2025-07-01T13:13:56.703Z"),
        highestLevel: 778157,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2025-08-11T12:47:58.371Z"),
        name: "<value>",
        price: 978619,
        scarcity: 799159,
        steamId: 461479,
      },
    ],
    pages: 1,
    totalHits: 1,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `httpMeta`                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `v1BadgesResponseBody`                                                             | [components.V1BadgesResponseBody](../../models/components/v1badgesresponsebody.md) | :heavy_minus_sign:                                                                 | OK                                                                                 |