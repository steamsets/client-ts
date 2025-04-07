# AccountListBadgeBookmarksResponse

## Example Usage

```typescript
import { AccountListBadgeBookmarksResponse } from "@steamsets/client-ts/models/operations";

let value: AccountListBadgeBookmarksResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountBadgeBookmarksResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountBadgeBookmarksResponseBody.json",
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `v1AccountBadgeBookmarksResponseBody`                                                                            | [components.V1AccountBadgeBookmarksResponseBody](../../models/components/v1accountbadgebookmarksresponsebody.md) | :heavy_minus_sign:                                                                                               | OK                                                                                                               |