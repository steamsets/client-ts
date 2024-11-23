# V1AccountBadgeBookmarksResponseBody

## Example Usage

```typescript
import { V1AccountBadgeBookmarksResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountBadgeBookmarksResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountBadgeBookmarksResponseBody.json",
  bookmarks: [
    {
      badgeId: "bdg_123",
      bookmarkedAt: new Date("2023-01-01T00:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | A URL to the JSON Schema for this object.                                                | https://api.steamsets.com/schemas/V1AccountBadgeBookmarksResponseBody.json               |
| `bookmarks`                                                                              | [components.V1AccountBadgeBookmark](../../models/components/v1accountbadgebookmark.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |