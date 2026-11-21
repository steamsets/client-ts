# SteamSidebarCounts

## Example Usage

```typescript
import { SteamSidebarCounts } from "@steamsets/client-ts/models/components";

let value: SteamSidebarCounts = {
  artwork: 1,
  games: 22747,
  guides: 1,
  reviews: 1,
  screenshots: 11,
  videos: 2,
  workshopItems: 10,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `artwork`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | Artwork                                                                    | 1                                                                          |
| `games`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | Games, 0 when Steam hides the link because the game details are not public | 22747                                                                      |
| `guides`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | Guides                                                                     | 1                                                                          |
| `reviews`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | Reviews                                                                    | 1                                                                          |
| `screenshots`                                                              | *number*                                                                   | :heavy_check_mark:                                                         | Screenshots                                                                | 11                                                                         |
| `videos`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | Videos                                                                     | 2                                                                          |
| `workshopItems`                                                            | *number*                                                                   | :heavy_check_mark:                                                         | Workshop Items                                                             | 10                                                                         |