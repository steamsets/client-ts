# AdminRolesUploadIconResponseBody

## Example Usage

```typescript
import { AdminRolesUploadIconResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminRolesUploadIconResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminRolesUploadIconResponseBody.json",
  iconUrl: "https://cdn.steamsets.com/web/roles/custom/stasik-1.png",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `dollarSchema`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | A URL to the JSON Schema for this object.                               | https://api.steamsets.com/schemas/AdminRolesUploadIconResponseBody.json |
| `iconUrl`                                                               | *string*                                                                | :heavy_check_mark:                                                      | The URL of the new icon                                                 | https://cdn.steamsets.com/web/roles/custom/stasik-1.png                 |