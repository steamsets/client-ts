# BadgeListCraftersRequestBody

## Example Usage

```typescript
import { BadgeListCraftersRequestBody } from "@steamsets/client-ts/models/components";

let value: BadgeListCraftersRequestBody = {
  badgeId: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `badgeId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Badge id                                                                               |
| `cursor`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Opaque pagination cursor from the previous page's nextCursor. Omit for the first page. |
| `limit`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | Page size (capped by donator tier)                                                     |