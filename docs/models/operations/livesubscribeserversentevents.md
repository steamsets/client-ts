# LiveSubscribeServerSentEvents

Each oneOf object in the array represents one possible Server Sent Events (SSE) message, serialized as UTF-8 text according to the SSE specification.


## Supported Types

### `operations.EventAccountProgress`

```typescript
const value: operations.EventAccountProgress = {
  data: {
    key: "<key>",
    value: {
      accountId: 45286,
      currentStep: "<value>",
      percent: 581349,
      runId: "<id>",
      status: "<value>",
      steps: null,
      updatedAt: new Date("2026-03-30T13:09:50.514Z"),
    },
  },
  event: "account.progress",
};
```

### `operations.EventAccountViews`

```typescript
const value: operations.EventAccountViews = {
  data: {
    key: "<key>",
    value: {
      totalDelta: 434555,
    },
  },
  event: "account.views",
};
```

### `operations.EventActivityGlobal`

```typescript
const value: operations.EventActivityGlobal = {
  data: {
    value: {
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
      appBadge: {
        accountInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        appId: 255278,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 267127,
        baseXp: 569677,
        cardCount: 451732,
        firstCompletion: new Date("2025-10-14T14:59:56.930Z"),
        highestLevel: 642587,
        isEvent: false,
        isFoil: true,
        isNmc: true,
        isSale: false,
        lastCompletion: new Date("2026-03-31T21:12:39.791Z"),
        name: "<value>",
        noListing: false,
        price: 215870,
        scarcity: 499252,
        steamId: 372005,
        trackedHolders: 138718,
      },
      eventType: "<value>",
      occurredAt: new Date("2024-08-13T22:27:20.667Z"),
      rank: {
        bucket: "<value>",
        current: 160121,
        leaderboard: "<value>",
        location: {
          countryCode: "DE",
          countryName: "Germany",
          region: "Europe",
          type: "<value>",
        },
        previous: 524914,
      },
    },
  },
  event: "activity.global",
};
```

### `operations.EventBotsDirectory`

```typescript
const value: operations.EventBotsDirectory = {
  data: {
    value: {
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
      id: "<id>",
      removed: false,
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
    },
  },
  event: "bots.directory",
};
```

### `operations.EventHeartbeat`

```typescript
const value: operations.EventHeartbeat = {
  data: {},
  event: "heartbeat",
};
```

### `operations.EventLevelsEvents`

```typescript
const value: operations.EventLevelsEvents = {
  data: {
    value: {
      actor: {
        animatedAvatar: "<value>",
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        avatarFrame: "<value>",
        awardsGiven: 123456,
        awardsReceived: 123456,
        background: "<value>",
        badges: 123456,
        bans: 641917,
        city: {
          name: "Bad Krozingen",
        },
        country: null,
        createdAt: new Date("2023-01-01T00:00:00Z"),
        donated: 123456,
        economyBan: "steam",
        foilBadges: 123456,
        friends: 123456,
        gameBans: 350137,
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
        steamSetsScore: 959936,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        supporter: {
          active: true,
          months: 3,
          streak: 0,
        },
        themeColor: "#FF5733",
        vacBans: 856267,
        xp: 123456,
      },
      at: new Date("2024-10-29T08:30:52.572Z"),
      facts: {},
      id: "<id>",
      kind: "order_paid",
      person: {
        animatedAvatar: "<value>",
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        avatarFrame: "<value>",
        awardsGiven: 123456,
        awardsReceived: 123456,
        background: "<value>",
        badges: 123456,
        bans: 981188,
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
        gameBans: 290226,
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
        region: null,
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
        steamSetsScore: 713973,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        supporter: {
          active: true,
          months: 3,
          streak: 0,
        },
        themeColor: "#FF5733",
        vacBans: 976280,
        xp: 123456,
      },
      product: "levels",
      refs: [],
      severity: "problem",
    },
  },
  event: "levels.events",
};
```

### `operations.EventMarketPrices`

```typescript
const value: operations.EventMarketPrices = {
  data: {
    value: {
      appId: 104369,
      averageListings: 451747,
      badgeType: "<value>",
      buyOrderAveragePrice: 772333,
      cardAveragePrice: 857675,
      setBuyOrderPrice: 821673,
      setPrice: 573523,
      updatedAt: 648110,
    },
  },
  event: "market.prices",
};
```

### `operations.EventReady`

```typescript
const value: operations.EventReady = {
  data: {},
  event: "ready",
};
```

### `operations.EventSiteMaintenance`

```typescript
const value: operations.EventSiteMaintenance = {
  data: {
    value: {
      announcements: [],
      items: [],
    },
  },
  event: "site.maintenance",
};
```

### `operations.EventSiteVersion`

```typescript
const value: operations.EventSiteVersion = {
  data: {
    value: {
      app: "<value>",
      builtAt: 829382,
    },
  },
  event: "site.version",
};
```

### `operations.EventStats`

```typescript
const value: operations.EventStats = {
  data: {
    value: {
      dollarSchema: "https://api.steamsets.com/schemas/V1Stats.json",
      accountsAdded: 1,
      accountsUpdated: 1,
      appPlaytime: 1,
      apps: 1,
      awardsGiven: 1,
      awardsReceived: 1,
      badges: 1,
      bans: 1,
      foilBadges: 1,
      friends: 1,
      gameBans: 1,
      level: 1,
      normalBadges: 1,
      playtime: 1,
      pointsGiven: 1,
      pointsReceived: 1,
      steamSetsScore: 1,
      totalAccounts: 1,
      vacBans: 1,
      xp: 1,
    },
  },
  event: "stats",
};
```

### `operations.EventSteamsetsEvents`

```typescript
const value: operations.EventSteamsetsEvents = {
  data: {
    value: {
      actor: {
        animatedAvatar: "<value>",
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        avatarFrame: "<value>",
        awardsGiven: 123456,
        awardsReceived: 123456,
        background: "<value>",
        badges: 123456,
        bans: 641917,
        city: {
          name: "Bad Krozingen",
        },
        country: null,
        createdAt: new Date("2023-01-01T00:00:00Z"),
        donated: 123456,
        economyBan: "steam",
        foilBadges: 123456,
        friends: 123456,
        gameBans: 350137,
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
        steamSetsScore: 959936,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        supporter: {
          active: true,
          months: 3,
          streak: 0,
        },
        themeColor: "#FF5733",
        vacBans: 856267,
        xp: 123456,
      },
      at: new Date("2024-10-29T08:30:52.572Z"),
      facts: {},
      id: "<id>",
      kind: "order_paid",
      person: {
        animatedAvatar: "<value>",
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        avatarFrame: "<value>",
        awardsGiven: 123456,
        awardsReceived: 123456,
        background: "<value>",
        badges: 123456,
        bans: 981188,
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
        gameBans: 290226,
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
        region: null,
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
        steamSetsScore: 713973,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        supporter: {
          active: true,
          months: 3,
          streak: 0,
        },
        themeColor: "#FF5733",
        vacBans: 976280,
        xp: 123456,
      },
      product: "levels",
      refs: [],
      severity: "problem",
    },
  },
  event: "steamsets.events",
};
```

### `operations.EventWake`

```typescript
const value: operations.EventWake = {
  data: {
    topic: "<value>",
  },
  event: "wake",
};
```

