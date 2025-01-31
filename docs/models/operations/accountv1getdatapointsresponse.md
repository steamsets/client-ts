# AccountV1GetDataPointsResponse

## Example Usage

```typescript
import { AccountV1GetDataPointsResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1GetDataPointsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountDataPointsResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountDataPointsResponseBody.json",
    mostXp: [
      {
        accountInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        appId: 612096,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 616934,
        baseXp: 943749,
        firstCompletion: new Date("2025-01-17T06:36:04.132Z"),
        highestLevel: 359508,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-04-23T23:41:18.646Z"),
        name: "<value>",
        price: 697631,
        scarcity: 60225,
        steamId: 666767,
      },
    ],
    playtime: [
      {
        appId: 730,
        image: "someHash.idk",
        name: "CS2",
        playtime: 15,
      },
    ],
    scarcity: [
      {
        accountInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        appId: 670638,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 210382,
        baseXp: 128926,
        firstCompletion: new Date("2023-12-12T17:01:38.434Z"),
        highestLevel: 363711,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-09-16T22:27:21.057Z"),
        name: "<value>",
        price: 438601,
        scarcity: 988374,
        steamId: 102044,
      },
    ],
    xp: {
      "key": {
        "key": 208876,
      },
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `v1AccountDataPointsResponseBody`                                                                        | [components.V1AccountDataPointsResponseBody](../../models/components/v1accountdatapointsresponsebody.md) | :heavy_minus_sign:                                                                                       | OK                                                                                                       |