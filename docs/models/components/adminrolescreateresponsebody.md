# AdminRolesCreateResponseBody

## Example Usage

```typescript
import { AdminRolesCreateResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminRolesCreateResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminRolesCreateResponseBody.json",
  role: "stasik",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `dollarSchema`                                                      | *string*                                                            | :heavy_minus_sign:                                                  | A URL to the JSON Schema for this object.                           | https://api.steamsets.com/schemas/AdminRolesCreateResponseBody.json |
| `role`                                                              | *string*                                                            | :heavy_check_mark:                                                  | The slug of the new role                                            | stasik                                                              |