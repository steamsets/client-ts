# BotPushRequestBody

## Example Usage

```typescript
import { BotPushRequestBody } from "@steamsets/client-ts/models/components";

let value: BotPushRequestBody = {
  client: {
    name: "Steam-levelup-BOT",
    version: "2.4.1",
  },
  commands: [
    "!help",
    "!prices",
    "!buytf",
    "!check",
  ],
  features: [
    {
      commands: [
        "!check",
        "!buytf",
      ],
      feature: "badgeAware",
    },
  ],
  games: {
    prices: {
      keysPerGame: {
        tf2: {
          sell: 1.5,
        },
      },
    },
    stock: {
      "730": 2,
    },
  },
  gems: {
    prices: {
      gemsPerKey: {
        tf2: {
          buy: 3600,
          sell: 3400,
        },
      },
    },
    stock: 100000,
  },
  isOnline: true,
  keys: {
    prices: {
      usd: {
        buy: 1.9,
        sell: 2.1,
      },
    },
    stock: {
      tf2: 10,
      tod: 0,
    },
  },
  payment: {
    tf2: {
      items: [
        "Mann Co. Supply Crate Key",
      ],
    },
  },
  profile: {
    languages: {
      default: "en",
      supported: [
        "en",
        "pt",
      ],
    },
    levelRange: {
      max: 200,
      min: 1,
    },
    website: "https://example.com/order",
  },
  rules: {
    acceptsTradeHolds: false,
    acceptsVacBannedUsers: true,
  },
  sets: {
    limits: {
      maxPerUserPerApp: 5,
    },
    normal: {
      prices: {
        setsPerKey: {
          tf2: {
            buy: 14,
            sell: 12,
          },
        },
      },
      stock: {
        "440": 3,
      },
    },
  },
  steamId64: "76561199756787903",
};
```

## Fields

| Field                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client`                                                                                                                                                                                                                                             | [components.BotPushRequestClient](../../models/components/botpushrequestclient.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  | {<br/>"name": "Steam-levelup-BOT",<br/>"version": "2.4.1"<br/>}                                                                                                                                                                                      |
| `commands`                                                                                                                                                                                                                                           | *string*[]                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                   | Every chat command the bot answers, as free text, at most 50 of up to 32 characters. Replaces the stored list; [] clears it.                                                                                                                         | [<br/>"!help",<br/>"!prices",<br/>"!buytf",<br/>"!check"<br/>]                                                                                                                                                                                       |
| `features`                                                                                                                                                                                                                                           | [components.BotPushRequestFeature](../../models/components/botpushrequestfeature.md)[]                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                   | Everything the bot does that its prices and stock cannot show. Replaces the stored list; [] clears it. Currencies, buying, foil, gems, games, event sets, languages and limits are not features: the directory reads them from the rest of the push. | [<br/>{<br/>"commands": [<br/>"!check",<br/>"!buytf"<br/>],<br/>"feature": "badgeAware"<br/>}<br/>]                                                                                                                                                  |
| `games`                                                                                                                                                                                                                                              | [components.BotPushRequestGames](../../models/components/botpushrequestgames.md)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  | {<br/>"prices": {<br/>"keysPerGame": {<br/>"tf2": {<br/>"sell": 1.5<br/>}<br/>}<br/>},<br/>"stock": {<br/>"730": 2<br/>}<br/>}                                                                                                                       |
| `gems`                                                                                                                                                                                                                                               | [components.BotPushRequestGems](../../models/components/botpushrequestgems.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  | {<br/>"prices": {<br/>"gemsPerKey": {<br/>"tf2": {<br/>"buy": 3600,<br/>"sell": 3400<br/>}<br/>}<br/>},<br/>"stock": 100000<br/>}                                                                                                                    |
| `isOnline`                                                                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                   | Whether the bot is accepting trades.                                                                                                                                                                                                                 | true                                                                                                                                                                                                                                                 |
| `keys`                                                                                                                                                                                                                                               | [components.BotPushRequestKeys](../../models/components/botpushrequestkeys.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  | {<br/>"prices": {<br/>"usd": {<br/>"buy": 1.9,<br/>"sell": 2.1<br/>}<br/>},<br/>"stock": {<br/>"tf2": 10,<br/>"tod": 0<br/>}<br/>}                                                                                                                   |
| `payment`                                                                                                                                                                                                                                            | [components.BotPushRequestPayment](../../models/components/botpushrequestpayment.md)                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  | {<br/>"tf2": {<br/>"items": [<br/>"Mann Co. Supply Crate Key"<br/>]<br/>}<br/>}                                                                                                                                                                      |
| `profile`                                                                                                                                                                                                                                            | [components.BotPushRequestProfile](../../models/components/botpushrequestprofile.md)                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  | {<br/>"languages": {<br/>"default": "en",<br/>"supported": [<br/>"en",<br/>"pt"<br/>]<br/>},<br/>"levelRange": {<br/>"max": 200,<br/>"min": 1<br/>},<br/>"website": "https://example.com/order"<br/>}                                                |
| `rules`                                                                                                                                                                                                                                              | [components.Rules](../../models/components/rules.md)                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                   | Which users and trades the bot accepts. A rule you leave out keeps its stored value; null clears every rule.                                                                                                                                         | {<br/>"acceptsTradeHolds": false,<br/>"acceptsVacBannedUsers": true<br/>}                                                                                                                                                                            |
| `sets`                                                                                                                                                                                                                                               | [components.BotPushRequestSets](../../models/components/botpushrequestsets.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  | {<br/>"limits": {<br/>"maxPerUserPerApp": 5<br/>},<br/>"normal": {<br/>"prices": {<br/>"setsPerKey": {<br/>"tf2": {<br/>"buy": 14,<br/>"sell": 12<br/>}<br/>}<br/>},<br/>"stock": {<br/>"440": 3<br/>}<br/>}<br/>}                                   |
| `steamId64`                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                   | SteamID64 of the bot this push is for. Required with your account key, which pushes for every bot you own. Optional with a bot key, and then it must be that bot's.                                                                                  | 76561199756787903                                                                                                                                                                                                                                    |