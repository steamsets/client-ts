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
        appId: 780529,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 118274,
        baseXp: 639921,
        firstCompletion: new Date("2023-06-07T02:45:53.539Z"),
        highestLevel: 944669,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-07-25T22:41:53.719Z"),
        name: "<value>",
        price: 414662,
        scarcity: 264555,
        steamId: 774234,
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
        appId: 456150,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 568434,
        baseXp: 18789,
        firstCompletion: new Date("2024-11-07T22:17:02.814Z"),
        highestLevel: 612096,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-11-07T03:49:54.674Z"),
        name: "<value>",
        price: 943749,
        scarcity: 681820,
        steamId: 359508,
      },
    ],
    xp: {
      "key": {
        "key": 437032,
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