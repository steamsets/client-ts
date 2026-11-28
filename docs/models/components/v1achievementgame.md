# V1AchievementGame

## Example Usage

```typescript
import { V1AchievementGame } from "@steamsets/client-ts/models/components";

let value: V1AchievementGame = {
  achievements: [
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
  appId: 1250,
  crawled: true,
  playtime: 61200,
  total: 285,
  unlocked: 56,
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    | Example                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `achievements`                                                                                                                                                 | [components.SteamAchievement](../../models/components/steamachievement.md)[]                                                                                   | :heavy_check_mark:                                                                                                                                             | Every achievement of the game: the unlocked ones newest first, then the locked ones in Steam's order                                                           |                                                                                                                                                                |
| `appId`                                                                                                                                                        | *number*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | The game's app id                                                                                                                                              | 1250                                                                                                                                                           |
| `crawled`                                                                                                                                                      | *boolean*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                             | Whether SteamSets has read all of the account's unlocks: its first full crawl finished and its game details are public. When false, the unlocks may be missing | true                                                                                                                                                           |
| `playtime`                                                                                                                                                     | *number*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | Minutes the account played the game, 0 when it does not own it or its game details are private                                                                 | 61200                                                                                                                                                          |
| `total`                                                                                                                                                        | *number*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | How many achievements the game has                                                                                                                             | 285                                                                                                                                                            |
| `unlocked`                                                                                                                                                     | *number*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | How many of them the account unlocked                                                                                                                          | 56                                                                                                                                                             |