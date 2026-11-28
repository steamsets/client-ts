# SteamProfileCustomization

## Example Usage

```typescript
import { SteamProfileCustomization } from "@steamsets/client-ts/models/components";

let value: SteamProfileCustomization = {
  achievements: {
    averageCompletion: 63,
    completedGames: 167,
    completedSets: 170,
    games: 184,
    rare: 312,
    rarest: [],
    unlocked: 5120,
  },
  awards: [
    {
      given: 3,
      reactionId: 13,
      received: 128,
    },
  ],
  comments: {
    shown: [],
    state: "open",
    total: 192,
  },
  favoriteBadge: {
    appId: 730,
    isFoil: false,
    kind: "game",
    level: 5,
    steamBadgeId: 1,
  },
  files: [
    {
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
    },
  ],
  page: {
    groups: null,
    readAt: new Date("2026-11-21T12:00:00Z"),
    recentBadges: [
      {
        appId: 727130,
        isFoil: false,
        steamBadgeId: 13,
      },
    ],
  },
  replays: [],
  reviews: [],
  showcaseStats: {
    dlc: 3626,
    gameCards: 823,
    items: 31020,
    marketTransactions: 12745,
    trades: 11369,
    wishlist: 2594,
  },
  showcases: [],
  sidebarCounts: {
    artwork: 1,
    guides: 1,
    reviews: 1,
    screenshots: 11,
    videos: 2,
    workshopItems: 10,
  },
  slotsAvailable: 132,
  summary: "[b]hello[/b]",
  theme: "darkmode",
  workshopFollowers: 1579,
};
```

## Fields

| Field                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                             | Example                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `achievements`                                                                                                                                                                                                                          | [components.SteamAchievementStats](../../models/components/steamachievementstats.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                         |
| `awards`                                                                                                                                                                                                                                | [components.SteamAward](../../models/components/steamaward.md)[]                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                      | The Points Shop awards the account received, most received first                                                                                                                                                                        |                                                                                                                                                                                                                                         |
| `comments`                                                                                                                                                                                                                              | [components.SteamProfileComments](../../models/components/steamprofilecomments.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                         |
| `favoriteBadge`                                                                                                                                                                                                                         | [components.SteamFavoriteBadge](../../models/components/steamfavoritebadge.md)                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                         |
| `files`                                                                                                                                                                                                                                 | [components.SteamPublishedFile](../../models/components/steampublishedfile.md)[]                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                      | The Workshop files (screenshots, artwork, videos, guides, workshop items) the active showcases name, as a refresh last read them. A file no refresh has read yet, or one Steam no longer shows, is left out                             |                                                                                                                                                                                                                                         |
| `page`                                                                                                                                                                                                                                  | [components.SteamProfilePage](../../models/components/steamprofilepage.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                         |
| `replays`                                                                                                                                                                                                                               | [components.SteamReplay](../../models/components/steamreplay.md)[]                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                      | The Steam Replay years the active Steam Replay showcases show, as a refresh read them                                                                                                                                                   |                                                                                                                                                                                                                                         |
| `reviews`                                                                                                                                                                                                                               | [components.SteamReview](../../models/components/steamreview.md)[]                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                      | The account's reviews of the apps its active Review showcases name                                                                                                                                                                      |                                                                                                                                                                                                                                         |
| `showcaseStats`                                                                                                                                                                                                                         | [components.SteamShowcaseStats](../../models/components/steamshowcasestats.md)                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                         |
| `showcases`                                                                                                                                                                                                                             | [components.SteamProfileShowcase](../../models/components/steamprofileshowcase.md)[]                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                      | The profile's showcases, in Steam's order                                                                                                                                                                                               |                                                                                                                                                                                                                                         |
| `sidebarCounts`                                                                                                                                                                                                                         | [components.SteamSidebarCounts](../../models/components/steamsidebarcounts.md)                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                         |
| `slotsAvailable`                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                      | How many showcases the profile can show: one per 10 Steam levels plus each extra showcase bought in the Points Shop. Left out when it is 0, as it is for a profile below level 10 or one no refresh has read since the column was added | 132                                                                                                                                                                                                                                     |
| `summary`                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                      | The profile header's summary in Steam's BBCode, as a refresh last read it off the profile page. Left out when it is empty or no refresh has read it                                                                                     | [b]hello[/b]                                                                                                                                                                                                                            |
| `theme`                                                                                                                                                                                                                                 | [components.Theme](../../models/components/theme.md)                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                      | The Steam profile theme: Steam's theme_id in lower case, default when Steam reports none or an unknown one. gameprofile is a Points Shop game profile, whose colors come from the equipped profile modifier                             | darkmode                                                                                                                                                                                                                                |
| `workshopFollowers`                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                      | The Followers number the My Workshop and My Guides showcases print, as a refresh last read it off the profile page. Left out until a read drew one                                                                                      | 1579                                                                                                                                                                                                                                    |