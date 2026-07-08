# BadgeListCraftersResponseBody

## Example Usage

```typescript
import { BadgeListCraftersResponseBody } from "@steamsets/client-ts/models/components";

let value: BadgeListCraftersResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/BadgeListCraftersResponseBody.json",
  crafters: [
    {
      animatedAvatar: "<value>",
      appCost: 123456,
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      avatarFrame: "<value>",
      awardsGiven: 123456,
      awardsReceived: 123456,
      background: "<value>",
      badges: 123456,
      bans: 612845,
      city: {
        name: "Bad Krozingen",
      },
      completedAt: new Date("2024-09-24T19:22:27.856Z"),
      country: {
        code: "DE",
        name: "Germany",
      },
      createdAt: new Date("2023-01-01T00:00:00Z"),
      donated: 123456,
      economyBan: "steam",
      foilBadgeCost: 123456,
      foilBadges: 123456,
      friends: 123456,
      gameBans: 583628,
      images: [],
      level: 123456,
      miniBackground: "<value>",
      name: "steamsets",
      normalBadgeCost: 123456,
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
          extras: {
            "key": "<value>",
          },
          rating: 530223,
          role: "top_100",
        },
      ],
      state: {
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 594815,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      vacBans: 728471,
      xp: 123456,
    },
  ],
  maxPageSize: 334421,
  trackedHolders: 589166,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | A URL to the JSON Schema for this object.                                                | https://api.steamsets.com/schemas/BadgeListCraftersResponseBody.json                     |
| `crafters`                                                                               | [components.BadgeListCraftersEntry](../../models/components/badgelistcraftersentry.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `maxPageSize`                                                                            | *number*                                                                                 | :heavy_check_mark:                                                                       | Largest page size your donator tier allows                                               |                                                                                          |
| `nextCursor`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | Pass as cursor to fetch the next page. Absent when there are no more crafters.           |                                                                                          |
| `trackedHolders`                                                                         | *number*                                                                                 | :heavy_check_mark:                                                                       | Holders steamsets tracks for this badge                                                  |                                                                                          |