# V1GroupLeaderboardGroup

## Example Usage

```typescript
import { V1GroupLeaderboardGroup } from "@steamsets/client-ts/models/components";

let value: V1GroupLeaderboardGroup = {
  avatar: "f1a1d2c3d0c9de1f2f3f4f5f6f7f8f9.jpg",
  foundedAt: new Date("2023-01-01T00:00:00Z"),
  id: 730,
  members: 100,
  name: "Group Name",
  owner: {
    appCost: 123456,
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    averagePlaytime: 123456,
    awardsGiven: 123456,
    awardsReceived: 123456,
    badges: 123456,
    bans: 628899,
    city: {
      id: 1,
      name: "Bad Krozingen",
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
    gameBans: 398434,
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
      id: 1,
      name: "Europe",
    },
    roles: [
      {
        rating: 62713,
        role: "amber",
      },
    ],
    state: {
      id: 1,
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 258684,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    vacBans: 849039,
    xp: 123456,
  },
  privacy: "public",
  rank: 1,
  tag: "Group Tag",
  vanity: "Group Vanity",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `avatar`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | The avatar of the group                                                                                | f1a1d2c3d0c9de1f2f3f4f5f6f7f8f9.jpg                                                                    |
| `foundedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | The time the group was founded                                                                         | 2023-01-01T00:00:00Z                                                                                   |
| `id`                                                                                                   | *number*                                                                                               | :heavy_check_mark:                                                                                     | The id of the group                                                                                    | 730                                                                                                    |
| `members`                                                                                              | *number*                                                                                               | :heavy_check_mark:                                                                                     | The number of members in the group                                                                     | 100                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | The name of the group                                                                                  | Group Name                                                                                             |
| `owner`                                                                                                | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `privacy`                                                                                              | [components.V1GroupLeaderboardGroupPrivacy](../../models/components/v1groupleaderboardgroupprivacy.md) | :heavy_check_mark:                                                                                     | The privacy of the group                                                                               | public                                                                                                 |
| `rank`                                                                                                 | *number*                                                                                               | :heavy_check_mark:                                                                                     | The rank of the account                                                                                | 1                                                                                                      |
| `tag`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | The tag of the group                                                                                   | Group Tag                                                                                              |
| `vanity`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | The vanity of the group                                                                                | Group Vanity                                                                                           |