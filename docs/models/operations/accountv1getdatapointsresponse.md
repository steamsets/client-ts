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
        appId: 568434,
        appImage: "<value>",
        appName: "<value>",
        badgeImage: "<value>",
        baseLevel: 18789,
        baseXp: 617636,
        firstCompletion: new Date("2023-11-02T20:33:57.206Z"),
        highestLevel: 616934,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-10-31T08:20:58.047Z"),
        name: "<value>",
        price: 681820,
        publicId: "<id>",
        scarcity: 359508,
        steamId: 437032,
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
        appId: 697631,
        appImage: "<value>",
        appName: "<value>",
        badgeImage: "<value>",
        baseLevel: 60225,
        baseXp: 666767,
        firstCompletion: new Date("2024-01-06T00:27:30.681Z"),
        highestLevel: 210382,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2022-05-22T07:16:38.400Z"),
        name: "<value>",
        price: 315428,
        publicId: "<id>",
        scarcity: 363711,
        steamId: 570197,
      },
    ],
    xp: {
      "key": {
        "key": 438601,
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