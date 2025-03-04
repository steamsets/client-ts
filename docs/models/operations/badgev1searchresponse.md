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
        appId: 548814,
        appImage: "<value>",
        appName: "<value>",
        bookmarks: 715190,
        colors: [
          "<value>",
        ],
        designs: [
          "<value>",
        ],
        firstCompletion: 602763,
        highestLevel: 544883,
        id: "<id>",
        image: "https://loremflickr.com/1695/2583?lock=8032377108042487",
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: 963663,
        level: 383441,
        name: "<value>",
        scarcity: 791725,
        steamId: 528895,
        xp: 5680.45,
      },
    ],
    facets: "<value>",
    pages: 925597,
    results: 71036,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `v1BadgeSearchResponseBody`                                                                  | [components.V1BadgeSearchResponseBody](../../models/components/v1badgesearchresponsebody.md) | :heavy_minus_sign:                                                                           | OK                                                                                           |