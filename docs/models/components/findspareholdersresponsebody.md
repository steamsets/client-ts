# FindSpareHoldersResponseBody

## Example Usage

```typescript
import { FindSpareHoldersResponseBody } from "@steamsets/client-ts/models/components";

let value: FindSpareHoldersResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/FindSpareHoldersResponseBody.json",
  items: [
    {
      classId: 918367,
      holders: [
        {
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
          path: [
            {
              animatedAvatar: "<value>",
              apps: 123456,
              avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
              avatarFrame: "<value>",
              awardsGiven: 123456,
              awardsReceived: 123456,
              background: "<value>",
              badges: 123456,
              bans: 34892,
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
              gameBans: 809650,
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
              roles: null,
              state: {
                name: "Baden-Wurttemberg",
              },
              steamId: "76561198842603734",
              steamSetsScore: 681590,
              steamSetsVanity: "steamsets",
              steamVanity: "steamsets",
              supporter: {
                active: true,
                months: 3,
              },
              themeColor: "#FF5733",
              vacBans: 922010,
              xp: 123456,
            },
          ],
          pathFound: false,
          spare: 13269,
        },
      ],
      tooCommon: false,
      totalHolders: 440722,
    },
  ],
  locked: false,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | A URL to the JSON Schema for this object.                                                    | https://api.steamsets.com/schemas/FindSpareHoldersResponseBody.json                          |
| `items`                                                                                      | [components.ItemSpareHolders](../../models/components/itemspareholders.md)[]                 | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `locked`                                                                                     | *boolean*                                                                                    | :heavy_check_mark:                                                                           | True when the caller's role does not include the holder list. The totals are still returned. |                                                                                              |