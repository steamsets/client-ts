# AdminRolesListHoldersRequestBody

## Example Usage

```typescript
import { AdminRolesListHoldersRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminRolesListHoldersRequestBody = {
  role: "staff",
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `limit`             | *number*            | :heavy_minus_sign:  | Rows per page       | 50                  |
| `page`              | *number*            | :heavy_minus_sign:  | 1-based page number | 1                   |
| `role`              | *string*            | :heavy_check_mark:  | The role slug       | staff               |