# PostV1BadgeSearchBadgesResponse

## Example Usage

```typescript
import { PostV1BadgeSearchBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1BadgeSearchBadgesResponse = {
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
            4815.25,
          ],
        },
        appId: 496124,
        appImage: "<value>",
        appName: "<value>",
        bookmarks: 95960,
        colors: [
          "<value>",
        ],
        designs: [
          "<value>",
        ],
        firstCompletion: 481593,
        highestLevel: 575141,
        id: "<id>",
        image: "https://picsum.photos/seed/x3eKlUytor/1645/1104",
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: 212665,
        level: 279957,
        name: "<value>",
        scarcity: 239139,
        steamId: 812291,
        xp: 1096.8,
      },
    ],
    facets: "<value>",
    pages: 467664,
    results: 474406,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `v1BadgeSearchBadgesResponseBody`                                                                        | [components.V1BadgeSearchBadgesResponseBody](../../models/components/v1badgesearchbadgesresponsebody.md) | :heavy_minus_sign:                                                                                       | OK                                                                                                       |