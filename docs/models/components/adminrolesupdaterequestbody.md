# AdminRolesUpdateRequestBody

## Example Usage

```typescript
import { AdminRolesUpdateRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminRolesUpdateRequestBody = {
  description: "Helps keep the community running smoothly",
  name: "Staff",
  role: "staff",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `description`                              | *string*                                   | :heavy_minus_sign:                         | The tooltip text                           | Helps keep the community running smoothly  |
| `name`                                     | *string*                                   | :heavy_check_mark:                         | The display name. The slug does not change | Staff                                      |
| `role`                                     | *string*                                   | :heavy_check_mark:                         | The role slug, built-in or custom          | staff                                      |