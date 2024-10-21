# BadgeV1TagsResponse

## Example Usage

```typescript
import { BadgeV1TagsResponse } from "@steamsets/client-ts/models/operations";

let value: BadgeV1TagsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1BadgeTagsResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1BadgeTagsResponseBody.json",
    colorTags: [
      {
        gradient: "<value>",
        group: "<value>",
        groupOwner: false,
        hex: "<value>",
        hsl: "<value>",
        id: 270008,
        name: "<value>",
      },
    ],
    designTags: [
      {
        id: 735194,
        name: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `v1BadgeTagsResponseBody`                                                                | [components.V1BadgeTagsResponseBody](../../models/components/v1badgetagsresponsebody.md) | :heavy_minus_sign:                                                                       | OK                                                                                       |