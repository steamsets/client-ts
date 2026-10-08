# V1AdminUsersSummary

## Example Usage

```typescript
import { V1AdminUsersSummary } from "@steamsets/client-ts/models/components";

let value: V1AdminUsersSummary = {
  active: {
    day: 40,
    month: 1100,
    week: 260,
  },
  signups: {
    day: 40,
    month: 1100,
    week: 260,
  },
  totalUsers: 52000,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `active`                                                                     | [components.V1AdminUserCounts](../../models/components/v1adminusercounts.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `signups`                                                                    | [components.V1AdminUserCounts](../../models/components/v1adminusercounts.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `totalUsers`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | Every account that ever signed in                                            | 52000                                                                        |