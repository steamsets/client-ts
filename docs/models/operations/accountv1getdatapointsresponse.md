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
        appId: 456150,
        appImage: "<value>",
        appName: "<value>",
        badgeImage: "<value>",
        baseLevel: 568434,
        baseXp: 18789,
        firstCompletion: new Date("2023-11-08T22:17:02.814Z"),
        highestLevel: 612096,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2023-11-08T03:49:54.674Z"),
        name: "<value>",
        price: 943749,
        publicId: "<id>",
        scarcity: 681820,
        steamId: 359508,
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
        appId: 437032,
        appImage: "<value>",
        appName: "<value>",
        badgeImage: "<value>",
        baseLevel: 697631,
        baseXp: 60225,
        firstCompletion: new Date("2024-01-01T18:37:54.059Z"),
        highestLevel: 670638,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2022-08-19T13:54:10.391Z"),
        name: "<value>",
        price: 128926,
        publicId: "<id>",
        scarcity: 315428,
        steamId: 363711,
      },
    ],
    xp: {
      "key": {
        "key": 570197,
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