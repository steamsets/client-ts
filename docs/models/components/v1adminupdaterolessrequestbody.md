# V1AdminUpdateRolessRequestBody

## Example Usage

```typescript
import { V1AdminUpdateRolessRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminUpdateRolessRequestBody = {
  deletedRoles: [
    "owner",
  ],
  newRoles: [
    "amber",
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `deletedRoles`                                                       | [components.DeletedRoles](../../models/components/deletedroles.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `id`                                                                 | [components.IDStruct](../../models/components/idstruct.md)           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `newRoles`                                                           | [components.NewRoles](../../models/components/newroles.md)[]         | :heavy_check_mark:                                                   | N/A                                                                  |
| `vanity`                                                             | [components.VanityStruct](../../models/components/vanitystruct.md)   | :heavy_minus_sign:                                                   | N/A                                                                  |