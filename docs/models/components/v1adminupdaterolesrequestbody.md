# V1AdminUpdateRolesRequestBody

## Example Usage

```typescript
import { V1AdminUpdateRolesRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminUpdateRolesRequestBody = {
  roles: [
    "amethyst",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | [components.IDStruct](../../models/components/idstruct.md)         | :heavy_minus_sign:                                                 | N/A                                                                |
| `roles`                                                            | [components.Roles](../../models/components/roles.md)[]             | :heavy_check_mark:                                                 | N/A                                                                |
| `vanity`                                                           | [components.VanityStruct](../../models/components/vanitystruct.md) | :heavy_minus_sign:                                                 | N/A                                                                |