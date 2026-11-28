# AdminBadgeTagsTaggerClaims

## Example Usage

```typescript
import { AdminBadgeTagsTaggerClaims } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsTaggerClaims = {
  expired: 914136,
  held: 170442,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `expired`                                    | *number*                                     | :heavy_check_mark:                           | Badges whose claim ran out without a review. |
| `held`                                       | *number*                                     | :heavy_check_mark:                           | Badges with time left on the claim.          |