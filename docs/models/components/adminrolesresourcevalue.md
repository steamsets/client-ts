# AdminRolesResourceValue

## Example Usage

```typescript
import { AdminRolesResourceValue } from "@steamsets/client-ts/models/components";

let value: AdminRolesResourceValue = {
  resource: "vanity",
  value: "3",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                               | [components.AdminRolesResourceValueResource](../../models/components/adminrolesresourcevalueresource.md) | :heavy_check_mark:                                                                                       | The resource key                                                                                         | vanity                                                                                                   |
| `value`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The value the role grants, in the format its kind names                                                  | 3                                                                                                        |