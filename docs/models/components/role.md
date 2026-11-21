# Role

## Example Usage

```typescript
import { Role } from "@steamsets/client-ts/models/components";

let value: Role = {
  extras: {
    "key": "<value>",
  },
  rating: 570967,
  role: "donator",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `extras`                              | Record<string, *any*>                 | :heavy_check_mark:                    | Extra data associated with the role   |                                       |
| `rating`                              | *number*                              | :heavy_check_mark:                    | The higher the more presedence it has |                                       |
| `role`                                | *string*                              | :heavy_check_mark:                    | The role slug                         | donator                               |