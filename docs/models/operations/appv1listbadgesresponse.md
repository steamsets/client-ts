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
        appId: 975522,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 855804,
        baseXp: 11714,
        firstCompletion: new Date("2024-01-30T12:51:46.829Z"),
        highestLevel: 729991,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2023-07-08T02:32:49.310Z"),
        name: "<value>",
        price: 521037,
        scarcity: 54338,
        steamId: 199996,
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