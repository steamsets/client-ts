# PostV1BadgeTagResponse

## Example Usage

```typescript
import { PostV1BadgeTagResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1BadgeTagResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1BadgeTagBadgeResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1BadgeTagBadgeResponseBody.json",
    colorTags: [
      {
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
| `v1BadgeTagBadgeResponseBody`                                                                    | [components.V1BadgeTagBadgeResponseBody](../../models/components/v1badgetagbadgeresponsebody.md) | :heavy_minus_sign:                                                                               | OK                                                                                               |