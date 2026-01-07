# V1AdminUpdateRolesRequestBody

## Example Usage

```typescript
import { V1AdminUpdateRolesRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminUpdateRolesRequestBody = {
  roles: [
    "amber",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | [components.IDSearch](../../models/components/idsearch.md)         | :heavy_minus_sign:                                                 | N/A                                                                |
| `roles`                                                            | [components.Roles](../../models/components/roles.md)[]             | :heavy_check_mark:                                                 | N/A                                                                |
| `vanity`                                                           | [components.VanitySearch](../../models/components/vanitysearch.md) | :heavy_minus_sign:                                                 | N/A                                                                |