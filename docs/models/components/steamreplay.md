# SteamReplay

## Example Usage

```typescript
import { SteamReplay } from "@steamsets/client-ts/models/components";

let value: SteamReplay = {
  achievements: 5636,
  gamesPlayed: 121,
  hidden: false,
  newGames: 86,
  playedApps: [
    440,
    15620,
  ],
  sessions: 1007,
  topApps: [],
  year: 2025,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `achievements`                                                                                          | *number*                                                                                                | :heavy_check_mark:                                                                                      | Achievements unlocked in the year                                                                       | 5636                                                                                                    |
| `gamesPlayed`                                                                                           | *number*                                                                                                | :heavy_check_mark:                                                                                      | Games played, demos and playtests left out                                                              | 121                                                                                                     |
| `hidden`                                                                                                | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | Whether the year in review is private, so Steam draws no Replay showcase for it; the numbers are then 0 | false                                                                                                   |
| `newGames`                                                                                              | *number*                                                                                                | :heavy_check_mark:                                                                                      | Games played for the first time                                                                         | 86                                                                                                      |
| `playedApps`                                                                                            | *number*[]                                                                                              | :heavy_check_mark:                                                                                      | The app ids of the games played, in Steam's order, which the showcase background draws                  | [<br/>440,<br/>15620<br/>]                                                                              |
| `sessions`                                                                                              | *number*                                                                                                | :heavy_check_mark:                                                                                      | Play sessions                                                                                           | 1007                                                                                                    |
| `topApps`                                                                                               | [components.SteamReplayTop](../../models/components/steamreplaytop.md)[]                                | :heavy_check_mark:                                                                                      | The most played games, most first, at most 5                                                            |                                                                                                         |
| `year`                                                                                                  | *number*                                                                                                | :heavy_check_mark:                                                                                      | The year                                                                                                | 2025                                                                                                    |