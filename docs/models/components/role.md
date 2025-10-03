# Role

## Example Usage

```typescript
import { Role } from "@steamsets/client-ts/models/components";

let value: Role = {
  extras: {
    "key": "<value>",
  },
  rating: 570967,
  role: "diamond",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `extras`                                                   | Record<string, *any*>                                      | :heavy_check_mark:                                         | Extra data associated with the role                        |
| `rating`                                                   | *number*                                                   | :heavy_check_mark:                                         | The higher the more presedence it has                      |
| `role`                                                     | [components.RoleRole](../../models/components/rolerole.md) | :heavy_check_mark:                                         | N/A                                                        |