# AdminBotUpdateResponseBody

## Example Usage

```typescript
import { AdminBotUpdateResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminBotUpdateResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminBotUpdateResponseBody.json",
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
    avatarUrl: "https://kooky-onset.org",
    brand: {
      id: "bbr_5n7dZq1rFJx3WmPa",
      logoUrl: "https://uncommon-outrun.net/",
      name: "<value>",
      sponsored: true,
      websiteUrl: "https://polite-hyena.net/",
    },
    crypto: {
      prices: [],
    },
    games: {
      prices: {
        cs2: {
          buy: 3575.04,
          sell: 7944.62,
        },
        gems: {
          buy: 5137.31,
          sell: 8357.36,
        },
        hydra: {
          buy: 1399.45,
          sell: 6787.06,
        },
        tf2: {
          buy: 6956.24,
          sell: 1826.38,
        },
        tod: null,
      },
      stock: {
        copies: 533897,
        games: 558404,
      },
    },
    gems: {
      prices: {
        cs2: null,
        hydra: {
          buy: 1399.45,
          sell: 6787.06,
        },
        tf2: {
          buy: 6956.24,
          sell: 1826.38,
        },
        tod: {
          buy: 8655.46,
          sell: 6938.24,
        },
      },
      stock: 217260,
    },
    id: "bot_3cVFAKxh8Q2ZqkTq",
    keys: {
      cs2: 760241,
      hydra: 216631,
      tf2: null,
      tod: 459968,
    },
    name: "lvlupbot.com - legendary",
    owner: null,
    sets: {
      limits: {
        maxPerApp: 678747,
      },
      prices: {
        cs2: {
          buy: 3575.04,
          sell: 7944.62,
        },
        gems: {
          buy: 5137.31,
          sell: 8357.36,
        },
        hydra: {
          buy: 1399.45,
          sell: 6787.06,
        },
        tf2: {
          buy: 6956.24,
          sell: 1826.38,
        },
        tod: {
          buy: 8655.46,
          sell: 6938.24,
        },
      },
      stock: {
        apps: 192228,
        foil: 622898,
        maxLevel: 187921,
        normal: 574620,
      },
    },
    source: "scrape",
    status: {
      online: true,
      stale: true,
      updatedAt: new Date("2024-01-20T06:01:50.417Z"),
    },
    type: "other",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `dollarSchema`                                                    | *string*                                                          | :heavy_minus_sign:                                                | A URL to the JSON Schema for this object.                         | https://api.steamsets.com/schemas/AdminBotUpdateResponseBody.json |
| `bot`                                                             | [components.TradeBot](../../models/components/tradebot.md)        | :heavy_check_mark:                                                | N/A                                                               |                                                                   |