# CustomRoleUpdateRequestBody

## Example Usage

```typescript
import { CustomRoleUpdateRequestBody } from "@steamsets/client-ts/models/components";

let value: CustomRoleUpdateRequestBody = {
  description: "Friend of SteamSets",
  name: "Stasik",
  role: "stasik",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `description`                              | *string*                                   | :heavy_minus_sign:                         | The tooltip text                           | Friend of SteamSets                        |
| `name`                                     | *string*                                   | :heavy_check_mark:                         | The display name. The slug does not change | Stasik                                     |
| `role`                                     | *string*                                   | :heavy_check_mark:                         | The custom role slug                       | stasik                                     |