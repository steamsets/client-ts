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
            9221.98,
          ],
        },
        appId: 137498,
        appImage: "<value>",
        appName: "<value>",
        bookmarks: 100901,
        colors: [
          "<value>",
        ],
        designs: [
          "<value>",
        ],
        firstCompletion: 745637,
        highestLevel: 439138,
        id: "<id>",
        image: "https://picsum.photos/seed/rZpkz1/3804/2196",
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: 928168,
        level: 295324,
        name: "<value>",
        scarcity: 536710,
        steamId: 208744,
        xp: 6660.02,
      },
    ],
    facets: "<value>",
    pages: 275303,
    results: 145309,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `v1BadgeSearchResponseBody`                                                                  | [components.V1BadgeSearchResponseBody](../../models/components/v1badgesearchresponsebody.md) | :heavy_minus_sign:                                                                           | OK                                                                                           |