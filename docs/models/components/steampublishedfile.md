# SteamPublishedFile

## Example Usage

```typescript
import { SteamPublishedFile } from "@steamsets/client-ts/models/components";

let value: SteamPublishedFile = {
  adult: false,
  appId: 480,
  comments: 4,
  creator: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 379157,
    city: {
      name: "Bad Krozingen",
    },
    country: {
      code: "DE",
      name: "Germany",
    },
    createdAt: new Date("2023-01-01T00:00:00Z"),
    donated: 123456,
    economyBan: "steam",
    foilBadges: 123456,
    friends: 123456,
    gameBans: 626508,
    isHidden: true,
    level: 123456,
    miniBackground: "<value>",
    name: "steamsets",
    nameEffect: "rainbow",
    normalBadges: 123456,
    playtime: 123456,
    pointsGiven: 123456,
    pointsReceived: 123456,
    privacy: "public",
    region: {
      name: "Europe",
    },
    roles: [
      {
        extras: {},
        rating: 418270,
        role: "donator",
      },
    ],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 792471,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
      streak: 0,
    },
    themeColor: "#FF5733",
    vacBans: 960246,
    xp: 123456,
  },
  description: "a drawing",
  favorites: 9,
  fileType: 3,
  height: 1080,
  id: "3658928530",
  previewUrl:
    "https://images.steamusercontent.com/ugc/13031636269445036799/8A7D1B41B8FD6635847859C87AB7F28551D88B10/",
  score: 0.82,
  subscriptions: 0,
  title: "winter",
  views: 230,
  votesDown: 1,
  votesUp: 12,
  width: 1920,
  youtubeId: "2YqHhq3zAU8",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `adult`                                                                                                                        | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | Whether Steam hides the file behind its mature content warning for a signed-out visitor: it carries sexual content descriptors | false                                                                                                                          |
| `appId`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The app the file belongs to                                                                                                    | 480                                                                                                                            |
| `comments`                                                                                                                     | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | Public comments                                                                                                                | 4                                                                                                                              |
| `creator`                                                                                                                      | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                                                 | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `description`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Steam's short description, in Steam's BBCode                                                                                   | a drawing                                                                                                                      |
| `favorites`                                                                                                                    | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | Times favorited                                                                                                                | 9                                                                                                                              |
| `fileType`                                                                                                                     | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | Steam's EWorkshopFileType: 0 a workshop item, 3 artwork, 4 a video, 5 a screenshot, 9 a guide                                  | 3                                                                                                                              |
| `height`                                                                                                                       | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The image height in pixels, 0 when Steam gives none                                                                            | 1080                                                                                                                           |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Steam's publishedfileid, a decimal 64-bit number                                                                               | 3658928530                                                                                                                     |
| `previewUrl`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The image the showcase draws: the full image of an artwork or screenshot, the preview of anything else                         | https://images.steamusercontent.com/ugc/13031636269445036799/8A7D1B41B8FD6635847859C87AB7F28551D88B10/                         |
| `score`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | Steam's vote score, 0 to 1                                                                                                     | 0.82                                                                                                                           |
| `subscriptions`                                                                                                                | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | Current subscribers of a workshop item                                                                                         | 0                                                                                                                              |
| `title`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The title                                                                                                                      | winter                                                                                                                         |
| `views`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | Unique views                                                                                                                   | 230                                                                                                                            |
| `votesDown`                                                                                                                    | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | Rate-downs                                                                                                                     | 1                                                                                                                              |
| `votesUp`                                                                                                                      | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | Rate-ups                                                                                                                       | 12                                                                                                                             |
| `width`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The image width in pixels, 0 when Steam gives none                                                                             | 1920                                                                                                                           |
| `youtubeId`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The YouTube video id of a video, empty otherwise                                                                               | 2YqHhq3zAU8                                                                                                                    |