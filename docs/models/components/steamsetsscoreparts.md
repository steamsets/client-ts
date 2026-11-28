# SteamSetsScoreParts

## Example Usage

```typescript
import { SteamSetsScoreParts } from "@steamsets/client-ts/models/components";

let value: SteamSetsScoreParts = {
  awards: 112,
  badges: 812,
  foil: 466,
  games: 613,
  hours: 61,
  level: 339,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `awards`                                                            | *number*                                                            | :heavy_check_mark:                                                  | Points from awards given and received together, counted up to 2,000 | 112                                                                 |
| `badges`                                                            | *number*                                                            | :heavy_check_mark:                                                  | Points from normal badges                                           | 812                                                                 |
| `foil`                                                              | *number*                                                            | :heavy_check_mark:                                                  | Points from foil badges                                             | 466                                                                 |
| `games`                                                             | *number*                                                            | :heavy_check_mark:                                                  | Points from the number of games owned                               | 613                                                                 |
| `hours`                                                             | *number*                                                            | :heavy_check_mark:                                                  | Points from playtime, counted up to 30,000 hours                    | 61                                                                  |
| `level`                                                             | *number*                                                            | :heavy_check_mark:                                                  | Points from the Steam level                                         | 339                                                                 |