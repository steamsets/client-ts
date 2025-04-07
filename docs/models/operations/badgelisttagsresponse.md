# BadgeListTagsResponse

## Example Usage

```typescript
import { BadgeListTagsResponse } from "@steamsets/client-ts/models/operations";

let value: BadgeListTagsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1BadgeListTagsResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1BadgeListTagsResponseBody.json",
    colorTags: [
      {
        group: "<value>",
        groupOwner: false,
        hex: "<value>",
        hsl: "<value>",
        id: "<id>",
        name: "<value>",
      },
    ],
    designTags: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `v1BadgeListTagsResponseBody`                                                                    | [components.V1BadgeListTagsResponseBody](../../models/components/v1badgelisttagsresponsebody.md) | :heavy_minus_sign:                                                                               | OK                                                                                               |