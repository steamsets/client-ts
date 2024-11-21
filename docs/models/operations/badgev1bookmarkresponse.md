# BadgeV1BookmarkResponse

## Example Usage

```typescript
import { BadgeV1BookmarkResponse } from "@steamsets/client-ts/models/operations";

let value: BadgeV1BookmarkResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1BadgeBookmarkResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1BadgeBookmarkResponseBody.json",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `v1BadgeBookmarkResponseBody`                                                                    | [components.V1BadgeBookmarkResponseBody](../../models/components/v1badgebookmarkresponsebody.md) | :heavy_minus_sign:                                                                               | OK                                                                                               |