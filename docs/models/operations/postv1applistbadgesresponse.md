# PostV1AppListBadgesResponse

## Example Usage

```typescript
import { PostV1AppListBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AppListBadgesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AppListBadgesResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AppListBadgesResponseBody.json",
    badges: [
      {
        accountInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        appId: 105259,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 281916,
        baseXp: 144566,
        firstCompletion: new Date("2025-08-23T05:37:15.825Z"),
        highestLevel: 755530,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-08-23T12:06:04.465Z"),
        name: "<value>",
        price: 993799,
        scarcity: 918082,
        steamId: 850373,
      },
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `v1AppListBadgesResponseBody`                                                                    | [components.V1AppListBadgesResponseBody](../../models/components/v1applistbadgesresponsebody.md) | :heavy_minus_sign:                                                                               | OK                                                                                               |