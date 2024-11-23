# V1AccountBadgeBookmarkRequestBody

## Example Usage

```typescript
import { V1AccountBadgeBookmarkRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountBadgeBookmarkRequestBody = {
  badgeId: "bdg_123",
  bookmark: true,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `badgeId`                                   | *string*                                    | :heavy_check_mark:                          | The badge id                                | bdg_123                                     |
| `bookmark`                                  | *boolean*                                   | :heavy_check_mark:                          | Whether to bookmark or unbookmark the badge | true                                        |