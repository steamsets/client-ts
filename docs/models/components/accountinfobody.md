# AccountInfoBody

## Example Usage

```typescript
import { AccountInfoBody } from "@steamsets/client-ts/models/components";

let value: AccountInfoBody = {
  dollarSchema: "https://api.steamsets.com/schemas/AccountInfoBody.json",
  accountId: 123456,
  animatedAvatar: "steamsets",
  appCost: 123456,
  appPrivacy: "public",
  apps: 123456,
  appsUpdatedAt: new Date("2023-01-01T00:00:00Z"),
  avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
  avatarFrame: "steamsets",
  averagePlaytime: 123456,
  awardsGiven: 123456,
  awardsReceived: 123456,
  background: "steamsets",
  badges: 123456,
  badgesUpdatedAt: new Date("2023-01-01T00:00:00Z"),
  bans: 606393,
  city: {
    code: "DE",
    id: 1,
    name: "Germany",
  },
  communityBan: false,
  connections: [
    {
      avatar:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f1/f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
      externalId: "123456",
      hide: true,
      name: "steamsets",
      provider: "discord",
      publicId: "123456",
      verified: true,
    },
  ],
  country: {
    code: "DE",
    id: 1,
    name: "Germany",
  },
  createdAt: new Date("2023-01-01T00:00:00Z"),
  currentBestRanks: [
    {
      leaderboard: "apps",
      ranks: "1,1,1,1,1",
    },
  ],
  currentRanks: [
    {
      leaderboard: "bans",
      ranks: "1,1,1,1,1",
    },
  ],
  economyBan: "steam",
  foilBadgeCost: 123456,
  foilBadges: 123456,
  friendPrivacy: "public",
  friends: 123456,
  friendsUpdatedAt: new Date("2023-01-01T00:00:00Z"),
  gameBans: 660174,
  hidden: true,
  images: [
    {
      active: true,
      fileName: "avatar.png",
      imageId: "img_wasd123",
      imageType: "avatar",
    },
  ],
  lastBanDate: new Date("2024-03-07 07:31:46"),
  level: 123456,
  limitedApps: 123456,
  miniBackground: "steamsets",
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
      rating: 290077,
      role: "diamond",
    },
  ],
  state: {
    code: "DE",
    id: 1,
    name: "Germany",
  },
  steamId: "76561198842603734",
  steamSetsScore: 428769,
  steamSetsVanity: "steamsets",
  steamVanity: "steamsets",
  theme: "steamsets",
  updatedAt: new Date("2023-01-01T00:00:00Z"),
  vacBans: 135474,
  xp: 123456,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/AccountInfoBody.json                                        |
| `accountId`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | The account id                                                                                | 123456                                                                                        |
| `animatedAvatar`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The animated avatar of the account                                                            | steamsets                                                                                     |
| `appCost`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The cost of an app                                                                            | 123456                                                                                        |
| `appPrivacy`                                                                                  | [components.AppPrivacy](../../models/components/appprivacy.md)                                | :heavy_check_mark:                                                                            | The privacy of the account                                                                    | public                                                                                        |
| `apps`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of apps the account has                                                            | 123456                                                                                        |
| `appsUpdatedAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the apps were updated                                                                | 2023-01-01T00:00:00Z                                                                          |
| `avatar`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The avatar hash of the account                                                                | f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9                                                              |
| `avatarFrame`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The avatar frame of the account                                                               | steamsets                                                                                     |
| `averagePlaytime`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | The average playtime of the account                                                           | 123456                                                                                        |
| `awardsGiven`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of awards the account has                                                          | 123456                                                                                        |
| `awardsReceived`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of awards the account has                                                          | 123456                                                                                        |
| `background`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The background of the account                                                                 | steamsets                                                                                     |
| `badges`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of badges the account has                                                          | 123456                                                                                        |
| `badgesUpdatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the badges were updated                                                              | 2023-01-01T00:00:00Z                                                                          |
| `bans`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of bans                                                                            |                                                                                               |
| `city`                                                                                        | [components.Location](../../models/components/location.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `communityBan`                                                                                | *boolean*                                                                                     | :heavy_check_mark:                                                                            | If the account is community banned or not                                                     | false                                                                                         |
| `connections`                                                                                 | [components.Connection](../../models/components/connection.md)[]                              | :heavy_check_mark:                                                                            | The connections of the account                                                                |                                                                                               |
| `country`                                                                                     | [components.Location](../../models/components/location.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the account was created                                                              | 2023-01-01T00:00:00Z                                                                          |
| `currentBestRanks`                                                                            | [components.BestLeaderboardRank](../../models/components/bestleaderboardrank.md)[]            | :heavy_check_mark:                                                                            | The current best ranks                                                                        |                                                                                               |
| `currentRanks`                                                                                | [components.BestLeaderboardRank](../../models/components/bestleaderboardrank.md)[]            | :heavy_check_mark:                                                                            | The current ranks                                                                             |                                                                                               |
| `economyBan`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The economy ban of the account                                                                | steam                                                                                         |
| `foilBadgeCost`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The cost of a foil badge                                                                      | 123456                                                                                        |
| `foilBadges`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of foil badges the account has                                                     | 123456                                                                                        |
| `friendPrivacy`                                                                               | [components.FriendPrivacy](../../models/components/friendprivacy.md)                          | :heavy_check_mark:                                                                            | The privacy of the account                                                                    | public                                                                                        |
| `friends`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of friends the account has                                                         | 123456                                                                                        |
| `friendsUpdatedAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the friends were updated                                                             | 2023-01-01T00:00:00Z                                                                          |
| `gameBans`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of game bans                                                                       |                                                                                               |
| `hidden`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the account is hidden in the leaderboards                                             | true                                                                                          |
| `images`                                                                                      | [components.Image](../../models/components/image.md)[]                                        | :heavy_check_mark:                                                                            | The images of the account                                                                     |                                                                                               |
| `lastBanDate`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The Last date the account got a ban on                                                        | 2024-03-07 07:31:46                                                                           |
| `level`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | The level of the account                                                                      | 123456                                                                                        |
| `limitedApps`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of limited apps the account has                                                    | 123456                                                                                        |
| `miniBackground`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The mini background of the account                                                            | steamsets                                                                                     |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the account                                                                       | steamsets                                                                                     |
| `normalBadgeCost`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | The cost of a normal badge                                                                    | 123456                                                                                        |
| `normalBadges`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of normal badges the account has                                                   | 123456                                                                                        |
| `playtime`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | The playtime of the account                                                                   | 123456                                                                                        |
| `pointsGiven`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of points the account has                                                          | 123456                                                                                        |
| `pointsReceived`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of points the account has                                                          | 123456                                                                                        |
| `privacy`                                                                                     | [components.Privacy](../../models/components/privacy.md)                                      | :heavy_check_mark:                                                                            | The privacy of the account                                                                    | public                                                                                        |
| `region`                                                                                      | [components.Location](../../models/components/location.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `roles`                                                                                       | [components.Role](../../models/components/role.md)[]                                          | :heavy_check_mark:                                                                            | The roles of the account                                                                      |                                                                                               |
| `state`                                                                                       | [components.Location](../../models/components/location.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `steamId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The steam id                                                                                  | 76561198842603734                                                                             |
| `steamSetsScore`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | The steam sets score                                                                          |                                                                                               |
| `steamSetsVanity`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | The vanity of the account                                                                     | steamsets                                                                                     |
| `steamVanity`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The vanity of the account                                                                     | steamsets                                                                                     |
| `theme`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The theme of the account                                                                      | steamsets                                                                                     |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the account was updated                                                              | 2023-01-01T00:00:00Z                                                                          |
| `vacBans`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of vac bans                                                                        |                                                                                               |
| `xp`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of xp the account has                                                              | 123456                                                                                        |