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
        appId: 383441,
        appImage: "<value>",
        appName: "<value>",
        appShortName: "<value>",
        badgeImage: "<value>",
        baseLevel: 791725,
        baseXp: 528895,
        firstCompletion: new Date("2023-09-15T13:50:38.886Z"),
        highestLevel: 925597,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2022-03-19T20:31:56.909Z"),
        name: "<value>",
        price: 87129,
        publicId: "<id>",
        scarcity: 20218,
        steamId: 832620,
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
        appId: 778157,
        appImage: "<value>",
        appName: "<value>",
        appShortName: "<value>",
        badgeImage: "<value>",
        baseLevel: 870013,
        baseXp: 978619,
        firstCompletion: new Date("2024-05-25T21:04:00.744Z"),
        highestLevel: 461479,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-05-05T11:02:22.031Z"),
        name: "<value>",
        price: 118274,
        publicId: "<id>",
        scarcity: 639921,
        steamId: 143353,
      },
    ],
    xp: {
      "key": {
        "key": 944669,
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