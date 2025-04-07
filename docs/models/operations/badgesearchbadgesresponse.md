# BadgeSearchBadgesResponse

## Example Usage

```typescript
import { BadgeSearchBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: BadgeSearchBadgesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1BadgeSearchBadgesResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1BadgeSearchBadgesResponseBody.json",
    badges: [
      {
        vectors: {
          image: [
            4674.58,
          ],
        },
        appId: 532202,
        appImage: "<value>",
        appName: "<value>",
        bookmarks: 32200,
        colors: [
          "<value>",
        ],
        designs: [
          "<value>",
        ],
        firstCompletion: 64538,
        highestLevel: 353675,
        id: "<id>",
        image: "https://loremflickr.com/2276/2424?lock=2663585923398028",
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: 945501,
        level: 489094,
        name: "<value>",
        scarcity: 840796,
        steamId: 611451,
        xp: 3800.1,
      },
    ],
    facets: "<value>",
    pages: 753795,
    results: 506902,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `v1BadgeSearchBadgesResponseBody`                                                                        | [components.V1BadgeSearchBadgesResponseBody](../../models/components/v1badgesearchbadgesresponsebody.md) | :heavy_minus_sign:                                                                                       | OK                                                                                                       |