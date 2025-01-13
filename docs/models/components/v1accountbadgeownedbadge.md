# V1AccountBadgeOwnedBadge

## Example Usage

```typescript
import { V1AccountBadgeOwnedBadge } from "@steamsets/client-ts/models/components";

let value: V1AccountBadgeOwnedBadge = {
  appId: 730,
  badgeId: "bdg_123",
  level: 123456,
  steamId: 13,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `appId`                        | *number*                       | :heavy_check_mark:             | The app id                     | 730                            |
| `badgeId`                      | *string*                       | :heavy_check_mark:             | The badge id                   | bdg_123                        |
| `level`                        | *number*                       | :heavy_check_mark:             | The level of the badge         | 123456                         |
| `steamId`                      | *number*                       | :heavy_check_mark:             | The internal steam id badge id | 13                             |