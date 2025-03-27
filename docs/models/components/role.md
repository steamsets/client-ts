# Role

## Example Usage

```typescript
import { Role } from "@steamsets/client-ts/models/components";

let value: Role = {
  rating: 55374,
  role: "owner",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `rating`                                                   | *number*                                                   | :heavy_check_mark:                                         | The higher the more presedence it has                      |
| `role`                                                     | [components.RoleRole](../../models/components/rolerole.md) | :heavy_check_mark:                                         | N/A                                                        |