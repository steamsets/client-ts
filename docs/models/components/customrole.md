# CustomRole

## Example Usage

```typescript
import { CustomRole } from "@steamsets/client-ts/models/components";

let value: CustomRole = {
  dollarSchema: "https://api.steamsets.com/schemas/CustomRole.json",
  description: "Friend of SteamSets",
  iconUrl: "https://cdn.steamsets.com/web/roles/custom/stasik-1.png",
  name: "Stasik",
  rating: 1000000,
  role: "stasik",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `dollarSchema`                                                | *string*                                                      | :heavy_minus_sign:                                            | A URL to the JSON Schema for this object.                     | https://api.steamsets.com/schemas/CustomRole.json             |
| `description`                                                 | *string*                                                      | :heavy_check_mark:                                            | The tooltip text                                              | Friend of SteamSets                                           |
| `iconUrl`                                                     | *string*                                                      | :heavy_check_mark:                                            | The icon URL. Empty until an icon is uploaded                 | https://cdn.steamsets.com/web/roles/custom/stasik-1.png       |
| `name`                                                        | *string*                                                      | :heavy_check_mark:                                            | The display name                                              | Stasik                                                        |
| `rating`                                                      | *number*                                                      | :heavy_check_mark:                                            | The display rank. Custom roles rank above every built-in role | 1000000                                                       |
| `role`                                                        | *string*                                                      | :heavy_check_mark:                                            | The role slug, as it appears in an account's roles            | stasik                                                        |