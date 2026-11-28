# SteamAchievementStats

## Example Usage

```typescript
import { SteamAchievementStats } from "@steamsets/client-ts/models/components";

let value: SteamAchievementStats = {
  averageCompletion: 63,
  completedGames: 167,
  completedSets: 170,
  games: 184,
  rare: 312,
  rarest: [
    {
      appId: 1250,
      description: "Win a Long Game on West London on Normal Difficulty.",
      groupId: 0,
      hidden: false,
      icon:
        "https://shared.fastly.steamstatic.com/community_assets/images/apps/1250/c4412d094405c8e08680d9445610f113c3afd560.jpg",
      iconGray:
        "https://shared.fastly.steamstatic.com/community_assets/images/apps/1250/3e9b1110806f5fc0b8151570dd57b7e78e6a93c4.jpg",
      key: 10246,
      name: "Pub Crawl",
      percent: 18,
      unlockedAt: 1310308469,
    },
  ],
  unlocked: 5120,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `averageCompletion`                                                                                                     | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The mean share of base achievements unlocked over the games with an unlock, in whole percent: Avg. Game Completion Rate | 63                                                                                                                      |
| `completedGames`                                                                                                        | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Games whose base achievements are all unlocked: the Completionist showcase's Completed Games                            | 167                                                                                                                     |
| `completedSets`                                                                                                         | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Achievement sets (a game's base achievements, and each DLC's) that are all unlocked: Completed Sets                     | 170                                                                                                                     |
| `games`                                                                                                                 | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Games with at least one unlocked achievement                                                                            | 184                                                                                                                     |
| `rare`                                                                                                                  | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Unlocked achievements that fewer than 10% of the game's players have                                                    | 312                                                                                                                     |
| `rarest`                                                                                                                | [components.SteamAchievement](../../models/components/steamachievement.md)[]                                            | :heavy_check_mark:                                                                                                      | The rarest unlocked achievements, rarest first, at most 21                                                              |                                                                                                                         |
| `unlocked`                                                                                                              | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Achievements unlocked over every crawled game                                                                           | 5120                                                                                                                    |