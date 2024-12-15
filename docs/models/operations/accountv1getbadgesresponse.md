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
        appId: 602763,
        appImage: "<value>",
        appName: "<value>",
        badgeImage: "<value>",
        baseLevel: 544883,
        baseXp: 423655,
        firstCompletion: new Date("2023-12-09T21:35:55.501Z"),
        highestLevel: 437587,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-09-04T09:11:49.246Z"),
        name: "<value>",
        price: 963663,
        publicId: "<id>",
        scarcity: 383441,
        steamId: 791725,
      },
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `httpMeta`                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `v1BadgesResponseBody`                                                             | [components.V1BadgesResponseBody](../../models/components/v1badgesresponsebody.md) | :heavy_minus_sign:                                                                 | OK                                                                                 |