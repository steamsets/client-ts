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
        appId: 118274,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 639921,
        baseXp: 143353,
        firstCompletion: new Date("2025-11-01T08:34:16.299Z"),
        highestLevel: 521848,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-03-30T11:16:03.610Z"),
        name: "<value>",
        price: 264555,
        scarcity: 774234,
        steamId: 456150,
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
        appId: 568434,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 18789,
        baseXp: 617636,
        firstCompletion: new Date("2024-11-01T20:33:57.206Z"),
        highestLevel: 616934,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2025-10-31T08:20:58.047Z"),
        name: "<value>",
        price: 681820,
        scarcity: 359508,
        steamId: 437032,
      },
    ],
    xp: {
      "key": {
        "key": 697631,
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