# AdminRolesHolderRequestBody

## Example Usage

```typescript
import { AdminRolesHolderRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminRolesHolderRequestBody = {
  accountId: 1216167888,
  role: "staff",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `accountId`                                     | *number*                                        | :heavy_check_mark:                              | The account to give the role to or take it from | 1216167888                                      |
| `role`                                          | *string*                                        | :heavy_check_mark:                              | The role slug                                   | staff                                           |