# AdminAccountResourceInherited

## Example Usage

```typescript
import { AdminAccountResourceInherited } from "@steamsets/client-ts/models/components";

let value: AdminAccountResourceInherited = {
  role: "diamond",
  value: "600000",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `role`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | The highest-rated held role that grants the resource, or null when the code default applies | diamond                                                                                     |
| `value`                                                                                     | *string*                                                                                    | :heavy_check_mark:                                                                          | That role's value, or null when the code default applies                                    | 600000                                                                                      |