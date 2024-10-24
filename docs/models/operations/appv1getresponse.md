# AppV1GetResponse

## Example Usage

```typescript
import { AppV1GetResponse } from "@steamsets/client-ts/models/operations";

let value: AppV1GetResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AppResponseBody: {
    dollarSchema: "https://api.steamsets.com/schemas/V1AppResponseBody.json",
    badges: [
      {
        accountInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        appId: 158969,
        appImage: "<value>",
        appName: "<value>",
        appShortName: "<value>",
        badgeImage: "<value>",
        baseLevel: 110375,
        baseXp: 656330,
        firstCompletion: new Date("2022-06-01T10:45:51.668Z"),
        highestLevel: 196582,
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: new Date("2023-02-09T02:56:48.801Z"),
        name: "<value>",
        price: 820994,
        publicId: "<id>",
        scarcity: 97101,
        steamId: 837945,
      },
    ],
    detail: {
      appId: 730,
      image: "a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
      isEvent: true,
      isSale: true,
      itadId: "<id>",
      name: "CS2",
      price: 1200,
      shortName: "csgo",
      type: "game",
    },
    items: [
      {
        cost: 96098,
        description:
          "colorfully orientate rally wherever minus runny rough agreeable beneath unlike",
        largeImage: "<value>",
        name: "<value>",
        publicId: "<id>",
        smallImage: "<value>",
        title: "<value>",
        type: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `v1AppResponseBody`                                                          | [components.V1AppResponseBody](../../models/components/v1appresponsebody.md) | :heavy_minus_sign:                                                           | OK                                                                           |