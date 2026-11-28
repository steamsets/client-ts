# Website

## Overview

### Available Operations

* [push](#push) - Push a website's status, market and coins
* [register](#register) - List a website in the bot directory
* [rotateKey](#rotatekey) - Rotate a website's push key
* [verify](#verify) - Check the proof that you run a website's host

## push

Reports a website's status, market and the coins it takes, and answers what is now stored, what in the push was ignored or looks wrong, and when the website goes stale.

Pushing is free. Authenticate with the website's key from `website.register` or `website.rotateKey`, or with your account key and `host`. Push at least every 30 minutes: a website silent for 45 minutes shows as stale, and after a day it is hidden.

## What a website sends

Every field is optional, and the market objects follow bot.push's patch rules: a field you leave out keeps its stored value, 0 removes a price side or a count, a stock you send replaces the stored stock, `{}` clears a map and `null` clears an object.

A TF2 key shop sends its key price and the coins it takes:

```json
{
  "isOnline": true,
  "keys": {
    "stock": {"tf2": 1200},
    "prices": {"usd": {"sell": 2.15, "buy": 1.95}}
  },
  "crypto": {"coins": ["btc", "eth", "ltc"]}
}
```

`keys.prices.usd.sell` is what you sell one TF2 key for, and `buy` what you pay for one. `crypto.coins` replaces the whole list: a coin you leave out goes. A website that takes no coins leaves `crypto` out, and one that stops taking them sends `"coins": []`. A coin needs no rate; to quote a price per set in a coin, send it in `sets.normal.prices.coinsPerSet` as in bot.push.

A website that sells sets sends them as a bot does, with its per-app limits and, in `sets.levelRange`, the account levels its stock is for. `languages` are the languages the website serves:

```json
{
  "sets": {
    "normal": {
      "stock": {"440": 3},
      "prices": {"setsPerKey": {"tf2": {"sell": 12, "buy": 14}}}
    },
    "limits": {"maxPerUserPerApp": 5},
    "levelRange": {"min": 1, "max": 200}
  },
  "languages": {"supported": ["en", "de"], "default": "en"}
}
```

## What a website does not send

A website has no chat commands, trade rules or feature list, and its URL is its host, fixed at registration. A bot.push field such as `commands`, `rules`, `features`, `profile`, `payment` or `steamId64`, and any other field this body does not define, is ignored and reported as a `fieldIgnored` issue; the rest of the push is stored.

## Testing unlisted

A push never changes who sees the website. To test your script before everyone sees it, hide the website on its page on SteamSets or with `bot.setListed` and its `web_` id: the website takes pushes, but only you and staff see it. New websites start listed.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="website.push" method="post" path="/v1/website.push" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.website.push({
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { websitePush } from "@steamsets/client-ts/funcs/websitePush.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await websitePush(steamSets, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("websitePush failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.WebsitePushRequestBody](../../models/components/websitepushrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WebsitePushResponse](../../models/operations/websitepushresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422, 429       | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## register

Lists a website you run, such as a TF2 key shop, next to the bots. It starts pending. It goes live once you prove you run its host (website.verify) and its first month arrives at the donation bot, in either order. The response holds the website's push key, shown once. A host you registered before, with no proof and no payment yet, returns that website again with no new key. A host another account registered answers 409, unless that website still has no proof and no payment a hold after it was registered (24 hours by default): then it is deleted and the host is yours. During the hold the 409's errors[0] has location body.host and, in value, the RFC 3339 time the host frees up.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="website.register" method="post" path="/v1/website.register" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.website.register({
    host: "example.com",
    name: "Example Shop",
    type: "buying",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { websiteRegister } from "@steamsets/client-ts/funcs/websiteRegister.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await websiteRegister(steamSets, {
    host: "example.com",
    name: "Example Shop",
    type: "buying",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("websiteRegister failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.WebsiteRegisterRequestBody](../../models/components/websiteregisterrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WebsiteRegisterResponse](../../models/operations/websiteregisterresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 409, 422       | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## rotateKey

Replaces the push key of a website you own and returns the new key once. The old key keeps working for oldKeyExpiresIn, at most 7 days, and by default stops right away. A website without a key gets one. Staff can rotate any website's key. A website that is not yours answers 404.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="website.rotateKey" method="post" path="/v1/website.rotateKey" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.website.rotateKey({
    listingId: "web_3cVFAKxh8Q2ZqkTq",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { websiteRotateKey } from "@steamsets/client-ts/funcs/websiteRotateKey.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await websiteRotateKey(steamSets, {
    listingId: "web_3cVFAKxh8Q2ZqkTq",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("websiteRotateKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.WebsiteRotateKeyRequestBody](../../models/components/websiterotatekeyrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WebsiteRotateKeyResponse](../../models/operations/websiterotatekeyresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 404, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## verify

Looks for the website's token as a DNS TXT record `steamsets-verify=<token>` on the host, then as the content of `https://<host>/.well-known/steamsets.txt`. listing.verification in website.register and bot.listMine has both. Either one proves the host, for good. A pending website whose first month is paid goes live with the proof. A host proven before answers verified without a new check. Each account may run 10 checks every 10 minutes.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="website.verify" method="post" path="/v1/website.verify" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.website.verify({
    listingId: "web_3cVFAKxh8Q2ZqkTq",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { websiteVerify } from "@steamsets/client-ts/funcs/websiteVerify.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await websiteVerify(steamSets, {
    listingId: "web_3cVFAKxh8Q2ZqkTq",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("websiteVerify failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.WebsiteVerifyRequestBody](../../models/components/websiteverifyrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WebsiteVerifyResponse](../../models/operations/websiteverifyresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 404, 422, 429       | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |