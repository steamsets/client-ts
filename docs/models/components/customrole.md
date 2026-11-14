# CustomRole

## Example Usage

```typescript
import { CustomRole } from "@steamsets/client-ts/models/components";

let value: CustomRole = {
  description: "Friend of SteamSets",
  iconUrl: "https://cdn.steamsets.com/web/roles/custom/stasik-1.png",
  name: "Stasik",
  rating: 120,
  role: "stasik",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The tooltip text                                                                                                  | Friend of SteamSets                                                                                               |
| `iconUrl`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The uploaded icon URL. Empty until an owner uploads one, and the role then shows the icon that ships for its slug | https://cdn.steamsets.com/web/roles/custom/stasik-1.png                                                           |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The display name                                                                                                  | Stasik                                                                                                            |
| `rating`                                                                                                          | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The display rank, higher first                                                                                    | 120                                                                                                               |
| `role`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The role slug, as it appears in an account's roles                                                                | stasik                                                                                                            |