# V1Stats

## Example Usage

```typescript
import { V1Stats } from "@steamsets/client-ts/models/components";

let value: V1Stats = {
  dollarSchema: "https://api.steamsets.com/schemas/V1Stats.json",
  accountsAdded: 1,
  accountsUpdated: 1,
  appPlaytime: 1,
  apps: 1,
  awardsGiven: 1,
  awardsReceived: 1,
  badges: 1,
  bans: 1,
  foilBadges: 1,
  friends: 1,
  gameBans: 1,
  level: 1,
  normalBadges: 1,
  playtime: 1,
  pointsGiven: 1,
  pointsReceived: 1,
  steamSetsScore: 1,
  totalAccounts: 1,
  vacBans: 1,
  xp: 1,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `dollarSchema`                                 | *string*                                       | :heavy_minus_sign:                             | A URL to the JSON Schema for this object.      | https://api.steamsets.com/schemas/V1Stats.json |
| `accountsAdded`                                | *number*                                       | :heavy_check_mark:                             | The total number of accounts added             | 1                                              |
| `accountsUpdated`                              | *number*                                       | :heavy_check_mark:                             | The total number of accounts updated           | 1                                              |
| `appPlaytime`                                  | *number*                                       | :heavy_check_mark:                             | The total playtime of apps                     | 1                                              |
| `apps`                                         | *number*                                       | :heavy_check_mark:                             | The total number of apps                       | 1                                              |
| `awardsGiven`                                  | *number*                                       | :heavy_check_mark:                             | The total awards given                         | 1                                              |
| `awardsReceived`                               | *number*                                       | :heavy_check_mark:                             | The total awards received                      | 1                                              |
| `badges`                                       | *number*                                       | :heavy_check_mark:                             | The total number of badges                     | 1                                              |
| `bans`                                         | *number*                                       | :heavy_check_mark:                             | The total number of bans                       | 1                                              |
| `foilBadges`                                   | *number*                                       | :heavy_check_mark:                             | The total number of foil badges                | 1                                              |
| `friends`                                      | *number*                                       | :heavy_check_mark:                             | The total number of friends                    | 1                                              |
| `gameBans`                                     | *number*                                       | :heavy_check_mark:                             | The total number of game bans                  | 1                                              |
| `level`                                        | *number*                                       | :heavy_check_mark:                             | The total level                                | 1                                              |
| `normalBadges`                                 | *number*                                       | :heavy_check_mark:                             | The total number of normal badges              | 1                                              |
| `playtime`                                     | *number*                                       | :heavy_check_mark:                             | The total playtime                             | 1                                              |
| `pointsGiven`                                  | *number*                                       | :heavy_check_mark:                             | The total points given                         | 1                                              |
| `pointsReceived`                               | *number*                                       | :heavy_check_mark:                             | The total points received                      | 1                                              |
| `steamSetsScore`                               | *number*                                       | :heavy_check_mark:                             | The total steam sets score                     | 1                                              |
| `totalAccounts`                                | *number*                                       | :heavy_check_mark:                             | The total number of accounts                   | 1                                              |
| `vacBans`                                      | *number*                                       | :heavy_check_mark:                             | The total number of vac bans                   | 1                                              |
| `xp`                                           | *number*                                       | :heavy_check_mark:                             | The total xp                                   | 1                                              |