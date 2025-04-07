# AccountGetDataPointsResponse

## Example Usage

```typescript
import { AccountGetDataPointsResponse } from "@steamsets/client-ts/models/operations";

let value: AccountGetDataPointsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountGetDataPointsResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountGetDataPointsResponseBody.json",
    mostXp: [
      {
        accountInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        appId: 621368,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 601599,
        baseXp: 889462,
        firstCompletion: new Date("2025-08-09T06:45:22.864Z"),
        highestLevel: 514697,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2024-06-05T12:04:30.746Z"),
        name: "<value>",
        price: 654618,
        scarcity: 739512,
        steamId: 810160,
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
        appId: 524696,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 218653,
        baseXp: 993100,
        firstCompletion: new Date("2025-12-24T07:12:26.568Z"),
        highestLevel: 831550,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2023-10-21T00:50:49.820Z"),
        name: "<value>",
        price: 988583,
        scarcity: 586837,
        steamId: 34072,
      },
    ],
    xp: {
      "key": {
        "key": 323401,
      },
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `v1AccountGetDataPointsResponseBody`                                                                           | [components.V1AccountGetDataPointsResponseBody](../../models/components/v1accountgetdatapointsresponsebody.md) | :heavy_minus_sign:                                                                                             | OK                                                                                                             |