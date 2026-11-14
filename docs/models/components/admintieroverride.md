# AdminTierOverride

## Example Usage

```typescript
import { AdminTierOverride } from "@steamsets/client-ts/models/components";

let value: AdminTierOverride = {
  createdAt: new Date("2025-09-30T15:53:56.306Z"),
  createdBy: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 420323,
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
    gameBans: 916174,
    level: 123456,
    miniBackground: "<value>",
    name: "steamsets",
    nameEffect: "rainbow",
    normalBadges: 123456,
    playtime: 123456,
    pointsGiven: 123456,
    pointsReceived: 123456,
    privacy: "public",
    region: null,
    roles: [
      {
        extras: {
          "key": "<value>",
          "key1": "<value>",
        },
        rating: 66480,
        role: "donator",
      },
    ],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 679460,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
    },
    themeColor: "#FF5733",
    vacBans: 877992,
    xp: 123456,
  },
  reason: "PayPal donation",
  tier: "tier_2",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When staff set the override                                                                   |                                                                                               |
| `createdBy`                                                                                   | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The staff-facing reason for the override, empty when none was given                           | PayPal donation                                                                               |
| `tier`                                                                                        | [components.Tier](../../models/components/tier.md)                                            | :heavy_check_mark:                                                                            | The tier the override sets                                                                    | tier_2                                                                                        |