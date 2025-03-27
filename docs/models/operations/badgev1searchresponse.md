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
        vectors: {
          image: [
            4471.25,
          ],
        },
        appId: 846409,
        appImage: "<value>",
        appName: "<value>",
        bookmarks: 699479,
        colors: [
          "<value>",
        ],
        designs: [
          "<value>",
        ],
        firstCompletion: 297437,
        highestLevel: 813798,
        id: "<id>",
        image: "https://picsum.photos/seed/GIvXDqB1iE/1586/3524",
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: 290077,
        level: 618016,
        name: "<value>",
        scarcity: 428769,
        steamId: 135474,
        xp: 2982.82,
      },
    ],
    facets: "<value>",
    pages: 569965,
    results: 590873,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `v1BadgeSearchResponseBody`                                                                  | [components.V1BadgeSearchResponseBody](../../models/components/v1badgesearchresponsebody.md) | :heavy_minus_sign:                                                                           | OK                                                                                           |