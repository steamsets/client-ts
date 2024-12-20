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
        appId: 602763,
        appImage: "<value>",
        appName: "<value>",
        bookmarks: 544883,
        colors: [
          "<value>",
        ],
        designs: [
          "<value>",
        ],
        firstCompletion: 423655,
        highestLevel: 645894,
        id: "<id>",
        image: "https://picsum.photos/seed/NwzV451/1750/3567",
        isEvent: false,
        isFoil: false,
        isSale: false,
        lastCompletion: 832620,
        level: 778157,
        name: "<value>",
        price: 870013,
        scarcity: 978619,
        steamId: 799159,
        xp: 4614.79,
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `v1BadgeSearchResponseBody`                                                                  | [components.V1BadgeSearchResponseBody](../../models/components/v1badgesearchresponsebody.md) | :heavy_minus_sign:                                                                           | OK                                                                                           |