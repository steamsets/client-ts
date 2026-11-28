# AdminRolesCreateRequestBody

## Example Usage

```typescript
import { AdminRolesCreateRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminRolesCreateRequestBody = {
  description: "Friend of SteamSets",
  name: "Stasik",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `description`                                   | *string*                                        | :heavy_minus_sign:                              | The tooltip text                                | Friend of SteamSets                             |
| `name`                                          | *string*                                        | :heavy_check_mark:                              | The display name. The role slug is made from it | Stasik                                          |