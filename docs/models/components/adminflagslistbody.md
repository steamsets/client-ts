# AdminFlagsListBody

## Example Usage

```typescript
import { AdminFlagsListBody } from "@steamsets/client-ts/models/components";

let value: AdminFlagsListBody = {
  dollarSchema: "https://api.steamsets.com/schemas/AdminFlagsListBody.json",
  flags: [
    {
      codeDefault: false,
      defaultEnabled: null,
      description: "sensitize taro really pertinent snack qua as pale",
      effectiveDefault: false,
      flag: "<value>",
      inCode: true,
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
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `dollarSchema`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | A URL to the JSON Schema for this object.                                        | https://api.steamsets.com/schemas/AdminFlagsListBody.json                        |
| `flags`                                                                          | [components.AdminFlagsListFlag](../../models/components/adminflagslistflag.md)[] | :heavy_check_mark:                                                               | Every flag the backend checks or that has a row, sorted by slug                  |                                                                                  |