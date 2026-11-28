# SteamFavoriteBadge

## Example Usage

```typescript
import { SteamFavoriteBadge } from "@steamsets/client-ts/models/components";

let value: SteamFavoriteBadge = {
  appId: 730,
  isFoil: false,
  kind: "game",
  level: 5,
  steamBadgeId: 1,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `appId`                                                                   | *number*                                                                  | :heavy_check_mark:                                                        | The game's app id, 0 for a Steam badge                                    | 730                                                                       |
| `isFoil`                                                                  | *boolean*                                                                 | :heavy_check_mark:                                                        | Whether the game badge is the foil one                                    | false                                                                     |
| `kind`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | game for a game's trading card badge, steam for one of Steam's own badges | game                                                                      |
| `level`                                                                   | *number*                                                                  | :heavy_check_mark:                                                        | The badge level the profile shows                                         | 5                                                                         |
| `steamBadgeId`                                                            | *number*                                                                  | :heavy_check_mark:                                                        | Steam's badge id                                                          | 1                                                                         |