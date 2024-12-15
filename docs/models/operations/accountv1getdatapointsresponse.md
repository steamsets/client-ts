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
        appId: 528895,
        appImage: "<value>",
        appName: "<value>",
        badgeImage: "<value>",
        baseLevel: 568045,
        baseXp: 925597,
        firstCompletion: new Date("2022-03-19T20:31:56.909Z"),
        highestLevel: 87129,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2022-01-23T03:49:29.014Z"),
        name: "<value>",
        price: 832620,
        publicId: "<id>",
        scarcity: 778157,
        steamId: 870013,
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
        appId: 978619,
        appImage: "<value>",
        appName: "<value>",
        badgeImage: "<value>",
        baseLevel: 799159,
        baseXp: 461479,
        firstCompletion: new Date("2024-05-05T11:02:22.031Z"),
        highestLevel: 118274,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2023-12-03T08:28:57.162Z"),
        name: "<value>",
        price: 143353,
        publicId: "<id>",
        scarcity: 944669,
        steamId: 521848,
      },
    ],
    xp: {
      "key": {
        "key": 414662,
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