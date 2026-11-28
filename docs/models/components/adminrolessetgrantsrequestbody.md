# AdminRolesSetGrantsRequestBody

## Example Usage

```typescript
import { AdminRolesSetGrantsRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminRolesSetGrantsRequestBody = {
  grants: [
    "admin.access",
  ],
  role: "staff",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `grants`                                                                     | *string*[]                                                                   | :heavy_check_mark:                                                           | Every grant the role should carry. A grant left out is removed from the role | [<br/>"admin.access"<br/>]                                                   |
| `role`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The role slug, built-in or custom                                            | staff                                                                        |