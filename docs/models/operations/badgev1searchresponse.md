# BadgeV1SearchResponse

## Example Usage

```typescript
import { BadgeV1SearchResponse } from "@steamsets/client-ts/models/operations";

let value: BadgeV1SearchResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1BadgeSearchResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1BadgeSearchResponseBody.json",
    badges: [
      {
        appId: 447125,
        appImage: "<value>",
        appName: "<value>",
        bookmarks: 846409,
        colors: [
          "<value>",
        ],
        designs: [
          "<value>",
        ],
        firstCompletion: 699479,
        highestLevel: 297437,
        id: "<id>",
        image: "https://picsum.photos/seed/SGIvXDqB/3255/1586",
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: 19193,
        level: 301575,
        name: "<value>",
        scarcity: 660174,
        steamId: 290077,
        xp: 6180.16,
      },
    ],
    facets: "<value>",
    pages: 428769,
    results: 135474,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `v1BadgeSearchResponseBody`                                                                  | [components.V1BadgeSearchResponseBody](../../models/components/v1badgesearchresponsebody.md) | :heavy_minus_sign:                                                                           | OK                                                                                           |