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
        appId: 289406,
        appImage: "<value>",
        appName: "<value>",
        bookmarks: 183191,
        colors: [
          "<value>",
        ],
        designs: [
          "<value>",
        ],
        firstCompletion: 586513,
        highestLevel: 20107,
        id: "<id>",
        image: "https://picsum.photos/seed/JXfzAz/3315/19",
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: 223081,
        level: 952749,
        name: "<value>",
        price: 447125,
        scarcity: 846409,
        steamId: 699479,
        xp: 2974.37,
      },
    ],
    facets: "<value>",
    pages: 813798,
    results: 396506,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `v1BadgeSearchResponseBody`                                                                  | [components.V1BadgeSearchResponseBody](../../models/components/v1badgesearchresponsebody.md) | :heavy_minus_sign:                                                                           | OK                                                                                           |