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
        appId: 944669,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 521848,
        baseXp: 414662,
        firstCompletion: new Date("2023-10-17T22:52:14.955Z"),
        highestLevel: 774234,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-05-14T22:34:42.019Z"),
        name: "<value>",
        price: 568434,
        scarcity: 18789,
        steamId: 617636,
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