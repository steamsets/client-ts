# TradeWebsite

## Example Usage

```typescript
import { TradeWebsite } from "@steamsets/client-ts/models/components";

let value: TradeWebsite = {
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
  description: "freely consequently sonar whose if nectarine instantly",
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
  host: "example.com",
  id: "web_3cVFAKxh8Q2ZqkTq",
  isPreview: false,
  keyPrice: {
    buy: 3120.88,
    sell: 3569.45,
  },
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
  listing: {
    billing: {
      graceUntil: new Date("2026-12-06T17:02:53.025Z"),
      keysPerPeriod: 827168,
      paidThrough: new Date("2026-06-03T19:14:14.767Z"),
      plan: "grandfathered",
      standing: "free",
    },
    createdAt: new Date("2024-06-13T18:53:48.398Z"),
    hiddenReason: "<value>",
    isHiddenByStaff: true,
    isListed: true,
    listingFeePaid: true,
    sponsoredUntil: new Date("2025-02-25T07:08:05.584Z"),
    status: "approved",
    verification: {
      methods: [],
      verified: true,
      verifiedAt: new Date("2024-03-07T22:50:41.409Z"),
    },
  },
  logoUrl: "https://accomplished-republican.biz/",
  name: "Example Shop",
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
  sets: {
    foilPrices: {
      cs2: {
        buy: 9659.08,
        sell: 5137.31,
      },
      gems: null,
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
    limits: {
      maxPerApp: 670919,
      maxStockPerApp: 785098,
    },
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
      apps: 97310,
      foil: 502506,
      maxLevel: 325578,
      normal: 287499,
    },
  },
  sponsorRank: 641144,
  sponsored: false,
  status: {
    online: false,
    stale: true,
    updatedAt: new Date("2025-07-02T12:13:21.096Z"),
  },
  type: "holiday",
  url: "https://example.com",
  verified: true,
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `crypto`                                                                                                                              | [components.TradeBotCrypto](../../models/components/tradebotcrypto.md)                                                                | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `description`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | What the owner says about the website. Empty for nothing.                                                                             |                                                                                                                                       |
| `games`                                                                                                                               | [components.TradeBotGames](../../models/components/tradebotgames.md)                                                                  | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `gamesForYou`                                                                                                                         | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Distinct games in the website's stock that the logged-in caller does not own. Missing when logged out or when it stocks no games.     |                                                                                                                                       |
| `gems`                                                                                                                                | [components.TradeBotGems](../../models/components/tradebotgems.md)                                                                    | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `host`                                                                                                                                | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The website's bare domain: lowercase, without www., and in punycode for an international name.                                        | example.com                                                                                                                           |
| `id`                                                                                                                                  | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The website's public id.                                                                                                              | web_3cVFAKxh8Q2ZqkTq                                                                                                                  |
| `isPreview`                                                                                                                           | *boolean*                                                                                                                             | :heavy_check_mark:                                                                                                                    | The website is unlisted, hidden by staff or lapsed: only its owner and staff see it, so show it as a preview.                         |                                                                                                                                       |
| `keyPrice`                                                                                                                            | [components.TradeBotRate](../../models/components/tradebotrate.md)                                                                    | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `keys`                                                                                                                                | [components.TradeBotKeys](../../models/components/tradebotkeys.md)                                                                    | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `languages`                                                                                                                           | [components.TradeBotLanguages](../../models/components/tradebotlanguages.md)                                                          | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `levelRange`                                                                                                                          | [components.TradeBotLevelRange](../../models/components/tradebotlevelrange.md)                                                        | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `listing`                                                                                                                             | [components.TradeWebsiteListing](../../models/components/tradewebsitelisting.md)                                                      | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `logoUrl`                                                                                                                             | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The website's logo: the one staff set, else its site icon. Empty until either is known.                                               |                                                                                                                                       |
| `name`                                                                                                                                | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   | Example Shop                                                                                                                          |
| `offers`                                                                                                                              | [components.TradeBotOffers](../../models/components/tradebotoffers.md)                                                                | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `push`                                                                                                                                | [components.TradeBotPush](../../models/components/tradebotpush.md)                                                                    | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `sets`                                                                                                                                | [components.TradeBotSets](../../models/components/tradebotsets.md)                                                                    | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `setsForYou`                                                                                                                          | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Not computed for websites yet; always missing.                                                                                        |                                                                                                                                       |
| `sponsorRank`                                                                                                                         | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The website's place in the sponsored group, lowest first. Only meaningful while sponsored.                                            |                                                                                                                                       |
| `sponsored`                                                                                                                           | *boolean*                                                                                                                             | :heavy_check_mark:                                                                                                                    | Staff placed the website in the sponsored group and the placement runs. Show at most two sponsored websites per type, by sponsorRank. |                                                                                                                                       |
| `status`                                                                                                                              | [components.TradeBotStatus](../../models/components/tradebotstatus.md)                                                                | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `type`                                                                                                                                | [components.TradeWebsiteType](../../models/components/tradewebsitetype.md)                                                            | :heavy_check_mark:                                                                                                                    | What the website trades, in the bot types. Staff set it.                                                                              |                                                                                                                                       |
| `url`                                                                                                                                 | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Where the directory links to: https and the host.                                                                                     | https://example.com                                                                                                                   |
| `verified`                                                                                                                            | *boolean*                                                                                                                             | :heavy_check_mark:                                                                                                                    | The owner proved they run the host. Every website the public directory lists is verified.                                             |                                                                                                                                       |