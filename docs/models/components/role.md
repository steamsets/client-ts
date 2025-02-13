# Role

## Example Usage

```typescript
import { Role } from "@steamsets/client-ts/models/components";

let value: Role = {
  rating: 13236,
  role: "amethyst",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `rating`                                                   | *number*                                                   | :heavy_check_mark:                                         | The higher the more presedence it has                      |
| `role`                                                     | [components.RoleRole](../../models/components/rolerole.md) | :heavy_check_mark:                                         | N/A                                                        |