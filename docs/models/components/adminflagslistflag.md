# AdminFlagsListFlag

## Example Usage

```typescript
import { AdminFlagsListFlag } from "@steamsets/client-ts/models/components";

let value: AdminFlagsListFlag = {
  codeDefault: true,
  defaultEnabled: null,
  description: "nor intrigue aha gah really whether vet that",
  effectiveDefault: true,
  flag: "<value>",
  inCode: false,
  overrides: [
    {
      account: null,
      createdAt: new Date("2025-05-24T14:24:56.127Z"),
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
      enabled: false,
    },
  ],
  roles: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `codeDefault`                                                                            | *boolean*                                                                                | :heavy_check_mark:                                                                       | The value when no default row exists                                                     |
| `defaultEnabled`                                                                         | *boolean*                                                                                | :heavy_check_mark:                                                                       | The default an admin set, null when none is set                                          |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | What the flag does, empty for a flag the backend does not check                          |
| `effectiveDefault`                                                                       | *boolean*                                                                                | :heavy_check_mark:                                                                       | The default accounts get without a role grant or override                                |
| `flag`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | The flag slug                                                                            |
| `inCode`                                                                                 | *boolean*                                                                                | :heavy_check_mark:                                                                       | True when the backend checks the flag in code                                            |
| `overrides`                                                                              | [components.AdminFlagsListOverride](../../models/components/adminflagslistoverride.md)[] | :heavy_check_mark:                                                                       | Per-account overrides, newest first                                                      |
| `roles`                                                                                  | *string*[]                                                                               | :heavy_check_mark:                                                                       | Roles whose holders get the flag on                                                      |