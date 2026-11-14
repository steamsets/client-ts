# AdminRolesResourceDefinition

## Example Usage

```typescript
import { AdminRolesResourceDefinition } from "@steamsets/client-ts/models/components";

let value: AdminRolesResourceDefinition = {
  kind: "count",
  resource: "vanity",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                     | [components.AdminRolesResourceDefinitionKind](../../models/components/adminrolesresourcedefinitionkind.md) | :heavy_check_mark:                                                                                         | The value format: count is a whole number, flag is "true", presence is "1", hostname is a lowercase domain | count                                                                                                      |
| `resource`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The resource key                                                                                           | vanity                                                                                                     |