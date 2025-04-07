# PostV1BadgeGetTagsResponse

## Example Usage

```typescript
import { PostV1BadgeGetTagsResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1BadgeGetTagsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1BadgeGetTagsResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1BadgeGetTagsResponseBody.json",
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `v1BadgeGetTagsResponseBody`                                                                   | [components.V1BadgeGetTagsResponseBody](../../models/components/v1badgegettagsresponsebody.md) | :heavy_minus_sign:                                                                             | OK                                                                                             |