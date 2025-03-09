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
        appId: 952749,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 447125,
        baseXp: 846409,
        firstCompletion: new Date("2025-02-05T15:06:10.289Z"),
        highestLevel: 297437,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2025-06-10T22:08:16.258Z"),
        name: "<value>",
        price: 396506,
        scarcity: 881104,
        steamId: 581273,
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