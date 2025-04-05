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
        appId: 16518,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 482573,
        baseXp: 462381,
        firstCompletion: new Date("2023-08-06T15:57:26.267Z"),
        highestLevel: 898493,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-05-25T09:41:48.011Z"),
        name: "<value>",
        price: 189285,
        scarcity: 562143,
        steamId: 266516,
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