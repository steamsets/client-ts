# V1AdminUpdateRolesRequestBody

## Example Usage

```typescript
import { V1AdminUpdateRolesRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminUpdateRolesRequestBody = {
  roles: [
    "user",
    "donator",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | [components.IDSearch](../../models/components/idsearch.md)         | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `roles`                                                            | *string*[]                                                         | :heavy_check_mark:                                                 | Every role the account should hold, built-in or custom             | [<br/>"user",<br/>"donator"<br/>]                                  |
| `vanity`                                                           | [components.VanitySearch](../../models/components/vanitysearch.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |