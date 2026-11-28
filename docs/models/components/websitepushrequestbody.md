# WebsitePushRequestBody

## Example Usage

```typescript
import { WebsitePushRequestBody } from "@steamsets/client-ts/models/components";

let value: WebsitePushRequestBody = {
  client: {
    name: "Steam-levelup-BOT",
    version: "2.4.1",
  },
  crypto: {
    coins: [
      "btc",
      "eth",
      "ltc",
    ],
  },
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
  host: "example.com",
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
  languages: {
    default: "en",
    supported: [
      "en",
      "de",
    ],
  },
  sets: {
    levelRange: {
      max: 500,
      min: 0,
    },
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
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            | Example                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client`                                                                                                                                                                               | [components.BotPushRequestClient](../../models/components/botpushrequestclient.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                                                     | N/A                                                                                                                                                                                    | {<br/>"name": "Steam-levelup-BOT",<br/>"version": "2.4.1"<br/>}                                                                                                                        |
| `crypto`                                                                                                                                                                               | [components.WebsitePushRequestCrypto](../../models/components/websitepushrequestcrypto.md)                                                                                             | :heavy_minus_sign:                                                                                                                                                                     | N/A                                                                                                                                                                                    | {<br/>"coins": [<br/>"btc",<br/>"eth",<br/>"ltc"<br/>]<br/>}                                                                                                                           |
| `games`                                                                                                                                                                                | [components.BotPushRequestGames](../../models/components/botpushrequestgames.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                     | N/A                                                                                                                                                                                    | {<br/>"prices": {<br/>"keysPerGame": {<br/>"tf2": {<br/>"sell": 1.5<br/>}<br/>}<br/>},<br/>"stock": {<br/>"730": 2<br/>}<br/>}                                                         |
| `gems`                                                                                                                                                                                 | [components.BotPushRequestGems](../../models/components/botpushrequestgems.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | N/A                                                                                                                                                                                    | {<br/>"prices": {<br/>"gemsPerKey": {<br/>"tf2": {<br/>"buy": 3600,<br/>"sell": 3400<br/>}<br/>}<br/>},<br/>"stock": 100000<br/>}                                                      |
| `host`                                                                                                                                                                                 | *string*                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                     | The website this push is for, in any spelling website.register takes. Required with your account key; optional with the website's key, and then it must be that website's.             | example.com                                                                                                                                                                            |
| `isOnline`                                                                                                                                                                             | *boolean*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                     | Whether the website is taking orders.                                                                                                                                                  | true                                                                                                                                                                                   |
| `keys`                                                                                                                                                                                 | [components.BotPushRequestKeys](../../models/components/botpushrequestkeys.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | N/A                                                                                                                                                                                    | {<br/>"prices": {<br/>"usd": {<br/>"buy": 1.9,<br/>"sell": 2.1<br/>}<br/>},<br/>"stock": {<br/>"tf2": 10,<br/>"tod": 0<br/>}<br/>}                                                     |
| `languages`                                                                                                                                                                            | [components.WebsitePushRequestBodyLanguages](../../models/components/websitepushrequestbodylanguages.md)                                                                               | :heavy_minus_sign:                                                                                                                                                                     | The languages the website serves. null clears them.                                                                                                                                    | {<br/>"default": "en",<br/>"supported": [<br/>"en",<br/>"de"<br/>]<br/>}                                                                                                               |
| `sets`                                                                                                                                                                                 | [components.WebsitePushRequestSets](../../models/components/websitepushrequestsets.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                                                     | N/A                                                                                                                                                                                    | {<br/>"levelRange": {<br/>"max": 500,<br/>"min": 0<br/>},<br/>"limits": {<br/>"maxPerUserPerApp": 5<br/>},<br/>"normal": {<br/>"prices": {<br/>"setsPerKey": {<br/>"tf2": {<br/>"buy": 14,<br/>"sell": 12<br/>}<br/>}<br/>},<br/>"stock": {<br/>"440": 3<br/>}<br/>}<br/>} |
| `additionalProperties`                                                                                                                                                                 | Record<string, *any*>                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                     | N/A                                                                                                                                                                                    |                                                                                                                                                                                        |