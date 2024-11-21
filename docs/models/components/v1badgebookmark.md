# V1BadgeBookmark

## Example Usage

```typescript
import { V1BadgeBookmark } from "@steamsets/client-ts/models/components";

let value: V1BadgeBookmark = {
  badgeId: "bdg_123",
  bookmarkedAt: new Date("2023-01-01T00:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `badgeId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The badge id                                                                                  | bdg_123                                                                                       |
| `bookmarkedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the badge was bookmarked                                                             | 2023-01-01T00:00:00Z                                                                          |