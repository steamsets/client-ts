# AppV1ListBadgesResponse

## Example Usage

```typescript
import { AppV1ListBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: AppV1ListBadgesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AppBadgeListResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AppBadgeListResponseBody.json",
    badges: [
      {
        accountInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        appId: 270008,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 735194,
        baseXp: 962189,
        firstCompletion: new Date("2023-09-30T15:12:09.673Z"),
        highestLevel: 576157,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-10-10T21:04:15.457Z"),
        name: "<value>",
        price: 572252,
        scarcity: 223081,
        steamId: 952749,
      },
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `v1AppBadgeListResponseBody`                                                                   | [components.V1AppBadgeListResponseBody](../../models/components/v1appbadgelistresponsebody.md) | :heavy_minus_sign:                                                                             | OK                                                                                             |