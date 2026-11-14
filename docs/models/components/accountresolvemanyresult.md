# AccountResolveManyResult

## Example Usage

```typescript
import { AccountResolveManyResult } from "@steamsets/client-ts/models/components";

let value: AccountResolveManyResult = {
  account: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 337406,
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
    gameBans: 747187,
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
    roles: [],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 634507,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
    },
    themeColor: "#FF5733",
    vacBans: 121724,
    xp: 123456,
  },
  input: "<value>",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `account`                                                                                                                 | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                                            | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `error`                                                                                                                   | [components.ErrorT](../../models/components/errort.md)                                                                    | :heavy_minus_sign:                                                                                                        | Why the input has no account: it is neither a SteamID64 nor a vanity, Steam has no such account, or Steam did not answer. |
| `input`                                                                                                                   | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The input, as sent.                                                                                                       |