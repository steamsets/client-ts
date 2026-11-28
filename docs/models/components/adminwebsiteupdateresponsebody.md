# AdminWebsiteUpdateResponseBody

## Example Usage

```typescript
import { AdminWebsiteUpdateResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminWebsiteUpdateResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminWebsiteUpdateResponseBody.json",
  website: {
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
    description: "rout now react provided",
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
    isPreview: true,
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
    logoUrl: "https://experienced-overload.biz",
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
    sponsorRank: 490773,
    sponsored: true,
    status: {
      online: false,
      stale: true,
      updatedAt: new Date("2025-07-02T12:13:21.096Z"),
    },
    type: "levelup",
    url: "https://example.com",
    verified: true,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `dollarSchema`                                                        | *string*                                                              | :heavy_minus_sign:                                                    | A URL to the JSON Schema for this object.                             | https://api.steamsets.com/schemas/AdminWebsiteUpdateResponseBody.json |
| `website`                                                             | [components.TradeWebsite](../../models/components/tradewebsite.md)    | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |