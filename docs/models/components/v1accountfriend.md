# V1AccountFriend

## Example Usage

```typescript
import { V1AccountFriend } from "@steamsets/client-ts/models/components";

let value: V1AccountFriend = {
  appCost: 123456,
  apps: 123456,
  avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
  averagePlaytime: 123456,
  awardsGiven: 123456,
  awardsReceived: 123456,
  badgeInfo: {
    completionTime: new Date("2023-01-01T00:00:00Z"),
    level: 123456,
  },
  badges: 123456,
  bans: 396506,
  city: {
    code: "DE",
    id: 1,
    name: "Germany",
  },
  country: {
    code: "DE",
    id: 1,
    name: "Germany",
  },
  createdAt: new Date("2023-01-01T00:00:00Z"),
  economyBan: "steam",
  foilBadgeCost: 123456,
  foilBadges: 123456,
  friends: 123456,
  friendsSince: new Date("2024-08-23T16:32:18.589Z"),
  gameBans: 581273,
  hidden: true,
  level: 123456,
  limitedApps: 123456,
  name: "steamsets",
  normalBadgeCost: 123456,
  normalBadges: 123456,
  playtime: 123456,
  pointsGiven: 123456,
  pointsReceived: 123456,
  privacy: "public",
  region: {
    code: "DE",
    id: 1,
    name: "Germany",
  },
  roles: [
    {
      colorr: "#ff0000",
      icon: "tier_1.svg",
      name: "Tier 1",
      rating: 881736,
      role: "diamond",
    },
  ],
  state: {
    code: "DE",
    id: 1,
    name: "Germany",
  },
  steamId: "76561198842603734",
  steamSetsScore: 725255,
  steamSetsVanity: "steamsets",
  steamVanity: "steamsets",
  vacBans: 501324,
  xp: 123456,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appCost`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The cost of an app                                                                            | 123456                                                                                        |
| `appPlaytime`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | The playtime of the account, incase of an app leaderboard                                     |                                                                                               |
| `apps`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of apps the account has                                                            | 123456                                                                                        |
| `avatar`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The avatar hash of the account                                                                | f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9                                                              |
| `averagePlaytime`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | The average playtime of the account                                                           | 123456                                                                                        |
| `awardsGiven`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of awards the account has                                                          | 123456                                                                                        |
| `awardsReceived`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of awards the account has                                                          | 123456                                                                                        |
| `badgeInfo`                                                                                   | [components.LeaderboardBadgeInfo](../../models/components/leaderboardbadgeinfo.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `badges`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of badges the account has                                                          | 123456                                                                                        |
| `bans`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of bans                                                                            |                                                                                               |
| `city`                                                                                        | [components.Location](../../models/components/location.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `country`                                                                                     | [components.Location](../../models/components/location.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the account was created                                                              | 2023-01-01T00:00:00Z                                                                          |
| `economyBan`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The economy ban of the account                                                                | steam                                                                                         |
| `foilBadgeCost`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The cost of a foil badge                                                                      | 123456                                                                                        |
| `foilBadges`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of foil badges the account has                                                     | 123456                                                                                        |
| `friends`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of friends the account has                                                         | 123456                                                                                        |
| `friendsSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `gameBans`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of game bans                                                                       |                                                                                               |
| `hidden`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the account is hidden in the leaderboards                                             | true                                                                                          |
| `level`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | The level of the account                                                                      | 123456                                                                                        |
| `limitedApps`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of limited apps the account has                                                    | 123456                                                                                        |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the account                                                                       | steamsets                                                                                     |
| `normalBadgeCost`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | The cost of a normal badge                                                                    | 123456                                                                                        |
| `normalBadges`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of normal badges the account has                                                   | 123456                                                                                        |
| `playtime`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | The playtime of the account                                                                   | 123456                                                                                        |
| `pointsGiven`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of points the account has                                                          | 123456                                                                                        |
| `pointsReceived`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of points the account has                                                          | 123456                                                                                        |
| `privacy`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The privacy of the account                                                                    | public                                                                                        |
| `region`                                                                                      | [components.Location](../../models/components/location.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `roles`                                                                                       | [components.Role](../../models/components/role.md)[]                                          | :heavy_check_mark:                                                                            | The roles of the account                                                                      |                                                                                               |
| `state`                                                                                       | [components.Location](../../models/components/location.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `steamId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The steam id                                                                                  | 76561198842603734                                                                             |
| `steamSetsScore`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | The steam sets score                                                                          |                                                                                               |
| `steamSetsVanity`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | The vanity of the account                                                                     | steamsets                                                                                     |
| `steamVanity`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The vanity of the account                                                                     | steamsets                                                                                     |
| `vacBans`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of vac bans                                                                        |                                                                                               |
| `xp`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of xp the account has                                                              | 123456                                                                                        |