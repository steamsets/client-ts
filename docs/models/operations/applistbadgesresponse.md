# AppListBadgesResponse

## Example Usage

```typescript
import { AppListBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: AppListBadgesResponse = {
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
        appId: 289393,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 199611,
        baseXp: 779178,
        firstCompletion: new Date("2025-07-18T11:58:08.932Z"),
        highestLevel: 947291,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2023-11-20T02:33:59.200Z"),
        name: "<value>",
        price: 246057,
        scarcity: 778894,
        steamId: 852336,
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