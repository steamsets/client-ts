# BotGetResponseBody

## Example Usage

```typescript
import { BotGetResponseBody } from "@steamsets/client-ts/models/components";

let value: BotGetResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/BotGetResponseBody.json",
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
  commands: [
    "<value 1>",
    "<value 2>",
  ],
  games: [
    {
      adult: false,
      appId: 627251,
      content: [
        "gore",
      ],
      copies: 994202,
      name: "<value>",
    },
  ],
  history: {
    bucket: "hour",
    points: [
      {
        at: new Date("2026-01-06T12:33:54.418Z"),
        gameStock: {
          copies: 375590,
          games: 20779,
        },
        online: true,
        prices: {
          games: {
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
          gems: {
            cs2: {
              buy: 9659.08,
              sell: 5137.31,
            },
            hydra: null,
            tf2: {
              buy: 424.96,
              sell: 5584.04,
            },
            tod: {
              buy: null,
              sell: 3380.87,
            },
          },
          sets: {
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
            tf2: null,
            tod: {
              buy: null,
              sell: 3380.87,
            },
          },
        },
        stock: {
          apps: 97310,
          foil: 502506,
          maxLevel: 325578,
          normal: 287499,
        },
      },
    ],
  },
  payment: {
    cs2: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    gems: [],
    hydra: [],
    tf2: [
      "Mann Co. Supply Crate Key",
    ],
    tod: [
      "<value 1>",
    ],
  },
  sets: [
    {
      adult: true,
      appId: 865802,
      content: [],
      foil: 313193,
      name: "<value>",
      normal: 329697,
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | A URL to the JSON Schema for this object.                                                    | https://api.steamsets.com/schemas/BotGetResponseBody.json                                    |
| `bot`                                                                                        | [components.TradeBot](../../models/components/tradebot.md)                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `commands`                                                                                   | *string*[]                                                                                   | :heavy_check_mark:                                                                           | Every chat command the bot answers, as it lists them. Empty when it does not say.            |                                                                                              |
| `games`                                                                                      | [components.BotGetGame](../../models/components/botgetgame.md)[]                             | :heavy_check_mark:                                                                           | The bot's whole game stock, one entry per game, by name. Empty when the bot stocks no games. |                                                                                              |
| `history`                                                                                    | [components.BotGetHistory](../../models/components/botgethistory.md)                         | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `payment`                                                                                    | [components.BotGetPayment](../../models/components/botgetpayment.md)                         | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `sets`                                                                                       | [components.BotGetSet](../../models/components/botgetset.md)[]                               | :heavy_check_mark:                                                                           | The bot's whole set stock, one entry per app, by game name.                                  |                                                                                              |