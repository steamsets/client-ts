# PostV1AccountGetDataPointsResponse

## Example Usage

```typescript
import { PostV1AccountGetDataPointsResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountGetDataPointsResponse = {
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
        appId: 475261,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 40009,
        baseXp: 417731,
        firstCompletion: new Date("2024-08-09T01:23:44.759Z"),
        highestLevel: 522375,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2023-06-20T00:33:39.815Z"),
        name: "<value>",
        price: 212839,
        scarcity: 610618,
        steamId: 645680,
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
        appId: 237027,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 788144,
        baseXp: 551117,
        firstCompletion: new Date("2025-08-08T11:37:25.947Z"),
        highestLevel: 677315,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2023-10-26T12:35:20.320Z"),
        name: "<value>",
        price: 940449,
        scarcity: 884529,
        steamId: 943444,
      },
    ],
    xp: {
      "key": {
        "key": 44035,
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