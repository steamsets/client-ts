# V1GetBadgeBookmarksResponseBody

## Example Usage

```typescript
import { V1GetBadgeBookmarksResponseBody } from "@steamsets/client-ts/models/components";

let value: V1GetBadgeBookmarksResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1GetBadgeBookmarksResponseBody.json",
  bookmarks: [
    {
      badgeId: "bdg_123",
      bookmarkedAt: new Date("2023-01-01T00:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | https://api.steamsets.com/schemas/V1GetBadgeBookmarksResponseBody.json     |
| `bookmarks`                                                                | [components.V1BadgeBookmark](../../models/components/v1badgebookmark.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |