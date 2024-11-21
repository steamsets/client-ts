# BadgeV1GetBookmarksResponse

## Example Usage

```typescript
import { BadgeV1GetBookmarksResponse } from "@steamsets/client-ts/models/operations";

let value: BadgeV1GetBookmarksResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1GetBadgeBookmarksResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1GetBadgeBookmarksResponseBody.json",
    bookmarks: [
      {
        badgeId: "bdg_123",
        bookmarkedAt: new Date("2023-01-01T00:00:00Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `v1GetBadgeBookmarksResponseBody`                                                                        | [components.V1GetBadgeBookmarksResponseBody](../../models/components/v1getbadgebookmarksresponsebody.md) | :heavy_minus_sign:                                                                                       | OK                                                                                                       |