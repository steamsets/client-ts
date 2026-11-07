# CustomRoleUploadIconRequestBody

## Example Usage

```typescript
import { CustomRoleUploadIconRequestBody } from "@steamsets/client-ts/models/components";

let value: CustomRoleUploadIconRequestBody = {
  icon: "<value>",
  role: "stasik",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `icon`                                    | *string*                                  | :heavy_check_mark:                        | A square PNG, 64 to 1024 px, at most 1 MB |                                           |
| `role`                                    | *string*                                  | :heavy_check_mark:                        | The custom role slug                      | stasik                                    |