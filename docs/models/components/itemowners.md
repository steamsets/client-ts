# ItemOwners

## Example Usage

```typescript
import { ItemOwners } from "@steamsets/client-ts/models/components";

let value: ItemOwners = {
  classId: 176105,
  owners: [
    {
      account: {
        animatedAvatar: "<value>",
        appCost: 123456,
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
        foilBadgeCost: 123456,
        foilBadges: 123456,
        friends: 123456,
        gameBans: 747187,
        images: [
          {
            active: true,
            fileName: "avatar.png",
            imageId: "img_wasd123",
            imageType: "avatar",
          },
        ],
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
        steamSetsScore: 990709,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        vacBans: 122687,
        xp: 123456,
      },
      amount: 543948,
      assetId: 45673,
      path: [
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
          bans: 28798,
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
          foilBadgeCost: 123456,
          foilBadges: 123456,
          friends: 123456,
          gameBans: 708752,
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
          roles: [],
          state: {
            name: "Baden-Wurttemberg",
          },
          steamId: "76561198842603734",
          steamSetsScore: 198469,
          steamSetsVanity: "steamsets",
          steamVanity: "steamsets",
          vacBans: 295508,
          xp: 123456,
        },
      ],
      pathFound: false,
    },
  ],
  totalOwners: 674462,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `classId`                                              | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `owners`                                               | [components.Owner](../../models/components/owner.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `totalOwners`                                          | *number*                                               | :heavy_check_mark:                                     | Total accounts that own at least one copy of this item |