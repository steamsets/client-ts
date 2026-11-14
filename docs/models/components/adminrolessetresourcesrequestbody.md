# AdminRolesSetResourcesRequestBody

## Example Usage

```typescript
import { AdminRolesSetResourcesRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminRolesSetResourcesRequestBody = {
  resources: [],
  role: "donator",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `resources`                                                                                | [components.AdminRolesResourceValue](../../models/components/adminrolesresourcevalue.md)[] | :heavy_check_mark:                                                                         | Every resource the role grants. A resource left out is no longer granted by the role       |                                                                                            |
| `role`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | The role slug, built-in or custom                                                          | donator                                                                                    |