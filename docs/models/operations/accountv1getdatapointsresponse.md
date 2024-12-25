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
        appId: 18789,
        appImage: "<value>",
        appName: "<value>",
        badgeImage: "<value>",
        baseLevel: 617636,
        baseXp: 612096,
        firstCompletion: new Date("2023-11-08T03:49:54.674Z"),
        highestLevel: 943749,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-01-18T06:36:04.132Z"),
        name: "<value>",
        price: 359508,
        publicId: "<id>",
        scarcity: 437032,
        steamId: 697631,
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
        appId: 60225,
        appImage: "<value>",
        appName: "<value>",
        badgeImage: "<value>",
        baseLevel: 666767,
        baseXp: 670638,
        firstCompletion: new Date("2022-08-19T13:54:10.391Z"),
        highestLevel: 128926,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2022-12-12T17:01:38.434Z"),
        name: "<value>",
        price: 363711,
        publicId: "<id>",
        scarcity: 570197,
        steamId: 438601,
      },
    ],
    xp: {
      "key": {
        "key": 988374,
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