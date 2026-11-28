# BotPlanResponseBody

## Example Usage

```typescript
import { BotPlanResponseBody } from "@steamsets/client-ts/models/components";

let value: BotPlanResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/BotPlanResponseBody.json",
  basis: "account",
  cheapest: {
    cost: 681166,
    trades: 579715,
  },
  complete: true,
  cost: 638233,
  costUsd: 846275,
  currency: "cs2",
  levels: {
    reached: 525132,
    start: 682394,
    target: 402932,
  },
  purchases: [
    {
      apps: [],
      bot: {
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
          isHidden: false,
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
          steamSetsScore: 121724,
          steamSetsVanity: "steamsets",
          steamVanity: "steamsets",
          supporter: {
            active: true,
            months: 3,
            streak: 0,
          },
          themeColor: "#FF5733",
          vacBans: 325508,
          xp: 123456,
        },
        avatarUrl: "https://kooky-onset.org",
        brand: {
          id: "bbr_5n7dZq1rFJx3WmPa",
          logoUrl: "https://uncommon-outrun.net/",
          name: "<value>",
          sponsored: true,
          websiteUrl: "https://polite-hyena.net/",
        },
        crypto: {
          foilPrices: [],
          prices: [
            {
              buy: "<value>",
              coin: "btc",
              sell: "0.0000038",
            },
          ],
        },
        features: [],
        games: {
          prices: {
            cs2: {
              buy: 9659.08,
              sell: 5137.31,
            },
            gems: {
              buy: 3165.18,
              sell: 1399.45,
            },
            hydra: {
              buy: 1545.42,
              sell: 6956.24,
            },
            tf2: {
              buy: 424.96,
              sell: 5584.04,
            },
            tod: {
              buy: null,
              sell: 3380.87,
            },
          },
          stock: {
            copies: 877656,
            games: 376171,
          },
        },
        gems: {
          prices: {
            cs2: {
              buy: 9659.08,
              sell: 5137.31,
            },
            hydra: {
              buy: 1545.42,
              sell: 6956.24,
            },
            tf2: {
              buy: 424.96,
              sell: 5584.04,
            },
            tod: {
              buy: null,
              sell: 3380.87,
            },
          },
          stock: 546710,
        },
        id: "bot_3cVFAKxh8Q2ZqkTq",
        isPreview: false,
        keys: {
          cs2: 62202,
          hydra: 459968,
          tf2: null,
          tod: 941983,
        },
        languages: {
          default: "en",
          supported: [
            "en",
            "pt",
          ],
        },
        levelRange: {
          max: 185997,
          min: 569839,
        },
        name: "lvlupbot.com - legendary",
        offers: {
          buysGames: true,
          buysGems: true,
          buysSets: false,
          hasEventSets: true,
          sellsFoilSets: false,
          sellsGames: false,
          sellsGems: true,
          sellsSets: true,
        },
        owner: {
          animatedAvatar: "<value>",
          apps: 123456,
          avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
          avatarFrame: "<value>",
          awardsGiven: 123456,
          awardsReceived: 123456,
          background: "<value>",
          badges: 123456,
          bans: 17565,
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
          gameBans: 463913,
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
          roles: [],
          state: {
            name: "Baden-Wurttemberg",
          },
          steamId: "76561198842603734",
          steamSetsScore: 984614,
          steamSetsVanity: "steamsets",
          steamVanity: "steamsets",
          supporter: {
            active: true,
            months: 3,
            streak: 0,
          },
          themeColor: "#FF5733",
          vacBans: 40595,
          xp: 123456,
        },
        rules: {
          acceptsDonations: true,
          acceptsLimitedAccounts: true,
          acceptsTradeBannedUsers: null,
          acceptsTradeHolds: false,
          acceptsVacBannedUsers: false,
        },
        sets: null,
        source: "push",
        status: {
          online: false,
          stale: true,
          updatedAt: new Date("2025-07-02T12:13:21.096Z"),
        },
        type: "crypto",
        websiteUrl: "https://old-fashioned-import.net/",
      },
      cost: 5993,
      payments: [],
      sets: {
        foil: 965948,
        normal: 635121,
      },
      setsPerUnit: 190.73,
      spareSets: 716563,
    },
  ],
  sets: 96444,
  xpNeeded: 34430,
};
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   | Example                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                                                                                | *string*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                            | A URL to the JSON Schema for this object.                                                                                                                                     | https://api.steamsets.com/schemas/BotPlanResponseBody.json                                                                                                                    |
| `basis`                                                                                                                                                                       | [components.BotPlanResponseBodyBasis](../../models/components/botplanresponsebodybasis.md)                                                                                    | :heavy_check_mark:                                                                                                                                                            | account plans against your badges and XP. estimate plans without a session: from fromLevel with no badges crafted, so it can buy sets of badges you already have.             |                                                                                                                                                                               |
| `cheapest`                                                                                                                                                                    | [components.BotPlanCheapest](../../models/components/botplancheapest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                            | N/A                                                                                                                                                                           |                                                                                                                                                                               |
| `complete`                                                                                                                                                                    | *boolean*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                            | False when stock or the budget runs out before the target. Bots trade whole keys, so a complete plan can buy a few sets more than the target needs.                           |                                                                                                                                                                               |
| `cost`                                                                                                                                                                        | *number*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | What the plan costs in total, in whole units of currency.                                                                                                                     |                                                                                                                                                                               |
| `costUsd`                                                                                                                                                                     | *number*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | What the plan costs in US cents: TF2 keys at the bot_plan_key_cents setting, gems at the Steam Market price of a Sack of Gems. Null for CS2 keys, Hydra keys and TOD tickets. |                                                                                                                                                                               |
| `currency`                                                                                                                                                                    | [components.BotPlanResponseBodyCurrency](../../models/components/botplanresponsebodycurrency.md)                                                                              | :heavy_check_mark:                                                                                                                                                            | N/A                                                                                                                                                                           |                                                                                                                                                                               |
| `levels`                                                                                                                                                                      | [components.BotPlanLevels](../../models/components/botplanlevels.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                            | N/A                                                                                                                                                                           |                                                                                                                                                                               |
| `purchases`                                                                                                                                                                   | [components.BotPlanPurchase](../../models/components/botplanpurchase.md)[]                                                                                                    | :heavy_check_mark:                                                                                                                                                            | Cheapest bot first.                                                                                                                                                           |                                                                                                                                                                               |
| `sets`                                                                                                                                                                        | *number*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | Sets in total.                                                                                                                                                                |                                                                                                                                                                               |
| `xpNeeded`                                                                                                                                                                    | *number*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | N/A                                                                                                                                                                           |                                                                                                                                                                               |