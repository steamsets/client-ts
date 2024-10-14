# Role

## Example Usage

```typescript
import { Role } from "@steamsets/client-ts/models/components";

let value: Role = {
  color: "#ff0000",
  icon: "tier_1.svg",
  name: "Tier 1",
  rating: 643990,
  role: "amber",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `color`                                                    | *string*                                                   | :heavy_check_mark:                                         | The role color                                             | #ff0000                                                    |
| `icon`                                                     | *string*                                                   | :heavy_check_mark:                                         | The role icon                                              | tier_1.svg                                                 |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | The Group name                                             | Tier 1                                                     |
| `rating`                                                   | *number*                                                   | :heavy_check_mark:                                         | The higher the more presedence it has                      |                                                            |
| `role`                                                     | [components.RoleRole](../../models/components/rolerole.md) | :heavy_check_mark:                                         | N/A                                                        |                                                            |