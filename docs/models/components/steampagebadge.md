# SteamPageBadge

## Example Usage

```typescript
import { SteamPageBadge } from "@steamsets/client-ts/models/components";

let value: SteamPageBadge = {
  appId: 727130,
  isFoil: false,
  steamBadgeId: 13,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `appId`                                                | *number*                                               | :heavy_check_mark:                                     | The game's app id, 753 for a Steam badge               | 727130                                                 |
| `isFoil`                                               | *boolean*                                              | :heavy_check_mark:                                     | Whether the game badge is the foil one                 | false                                                  |
| `steamBadgeId`                                         | *number*                                               | :heavy_check_mark:                                     | Steam's badge id for a Steam badge, 0 for a game badge | 13                                                     |