# Bot

## Overview

### Available Operations

* [claim](#claim) - List or claim a bot by signing in to Steam as it
* [createKey](#createkey) - Make a push key for all your bots
* [delete](#delete) - Delete a directory bot
* [deleteMany](#deletemany) - Delete many directory bots
* [get](#get) - Get one bot with its set stock and history
* [list](#list) - List the bots in the bot directory
* [listMine](#listmine) - List your own directory bots
* [plan](#plan) - Plan which sets to buy from which bots to reach a level
* [push](#push) - Push a bot's status, prices, stock and features
* [register](#register) - List a bot in the bot directory
* [registerMany](#registermany) - List many bots in the bot directory
* [rotateKey](#rotatekey) - Rotate a bot's API key
* [setListed](#setlisted) - Show or hide one of your bots
* [stats](#stats) - Get a directory bot's daily unique visitors
* [track](#track) - Record directory bots a visitor saw, opened or clicked through to
* [~~update~~](#update) - Report a bot's status, prices and stock :warning: **Deprecated**

## claim

Proves you run a bot with a Steam sign-in made as the bot, and gives you the bot and its push key. You stay signed in to Steamsets as yourself. A bot the directory already lists becomes yours as it is and stays listed; it takes your pushes once its listing fee is paid. A Steam account that is not listed becomes a new bot, pending review, and needs a name: without one the answer is 422 with an error at body.name, and the same sign-in can be sent again with the name.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.claim" method="post" path="/v1/bot.claim" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.claim({
    openid: {
      openidAssocHandle: "123456",
      openidClaimedId: "76561198842603734",
      openidIdentity: "https://steamsets.com/api/v1/openid/login",
      openidMode: "checkid_setup",
      openidNs: "http://specs.openid.net/auth/2.0",
      openidOpEndpoint: "https://steamsets.com/api/v1/openid/login",
      openidResponseNonce: "123456",
      openidReturnTo: "https://example.com",
      openidSig: "123456",
      openidSigned: "123456",
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
import { botClaim } from "@steamsets/client-ts/funcs/botClaim.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botClaim(steamSets, {
    openid: {
      openidAssocHandle: "123456",
      openidClaimedId: "76561198842603734",
      openidIdentity: "https://steamsets.com/api/v1/openid/login",
      openidMode: "checkid_setup",
      openidNs: "http://specs.openid.net/auth/2.0",
      openidOpEndpoint: "https://steamsets.com/api/v1/openid/login",
      openidResponseNonce: "123456",
      openidReturnTo: "https://example.com",
      openidSig: "123456",
      openidSigned: "123456",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botClaim failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotClaimRequestBody](../../models/components/botclaimrequestbody.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotClaimResponse](../../models/operations/botclaimresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 409, 422       | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## createKey

Makes a key that pushes for every bot you own, now and later: send it to bot.update with the bot's steamId in the body. Each bot's own key keeps working.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.createKey" method="post" path="/v1/bot.createKey" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.createKey();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botCreateKey } from "@steamsets/client-ts/funcs/botCreateKey.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botCreateKey(steamSets);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botCreateKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotCreateKeyResponse](../../models/operations/botcreatekeyresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401                      | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## delete

Deletes a bot you registered, in any review state. Staff can delete any bot. The bot leaves the directory within seconds, its key stops working and this cannot be undone. A bot that is not yours answers 404.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.delete" method="post" path="/v1/bot.delete" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.delete({
    id: "bot_3cVFAKxh8Q2ZqkTq",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botDelete } from "@steamsets/client-ts/funcs/botDelete.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botDelete(steamSets, {
    id: "bot_3cVFAKxh8Q2ZqkTq",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotDeleteRequestBody](../../models/components/botdeleterequestbody.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotDeleteResponse](../../models/operations/botdeleteresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 404, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## deleteMany

Deletes up to 100 bots you registered, in any review state, as bot.delete does one. Staff can delete any bot. Each id is reported as deleted or not found; a bot that is not yours counts as not found.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.deleteMany" method="post" path="/v1/bot.deleteMany" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.deleteMany({
    ids: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botDeleteMany } from "@steamsets/client-ts/funcs/botDeleteMany.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botDeleteMany(steamSets, {
    ids: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botDeleteMany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotDeleteManyRequestBody](../../models/components/botdeletemanyrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotDeleteManyResponse](../../models/operations/botdeletemanyresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## get

Get one bot with its set stock and history

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.get" method="post" path="/v1/bot.get" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.get({
    id: "76561199756787903",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botGet } from "@steamsets/client-ts/funcs/botGet.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botGet(steamSets, {
    id: "76561199756787903",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotGetRequestBody](../../models/components/botgetrequestbody.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotGetResponse](../../models/operations/botgetresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 404, 422                 | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## list

List the bots in the bot directory

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.list" method="post" path="/v1/bot.list" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botList } from "@steamsets/client-ts/funcs/botList.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botList(steamSets, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotListRequestBody](../../models/components/botlistrequestbody.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotListResponse](../../models/operations/botlistresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 422                      | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## listMine

List your own directory bots

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.listMine" method="post" path="/v1/bot.listMine" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.listMine();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botListMine } from "@steamsets/client-ts/funcs/botListMine.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botListMine(steamSets);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botListMine failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotListMineResponse](../../models/operations/botlistmineresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401                      | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## plan

Logged in, the plan uses your badges and XP. Without a session it is an estimate from fromLevel with no badges crafted, limited per IP.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.plan" method="post" path="/v1/bot.plan" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.plan({
    targetLevel: 848757,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botPlan } from "@steamsets/client-ts/funcs/botPlan.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botPlan(steamSets, {
    targetLevel: 848757,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botPlan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotPlanRequestBody](../../models/components/botplanrequestbody.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotPlanResponse](../../models/operations/botplanresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422, 429       | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## push

Reports a bot's status, profile, rules, prices, stock and features, and answers what is now stored, what in the push was ignored or looks wrong, and when the bot goes stale.

Pushing is free: it uses no daily units. Authenticate with a bot key, or with your account key and `steamId64`. Push at least every 30 minutes: a bot silent for 45 minutes shows as stale, and after a day it is hidden.

## Patch rules

Every field is optional.

- A field you leave out keeps its stored value, down to each price side, count and rule. This changes the TF2 sell price of normal sets and nothing else:

  ```json
  {
    "sets": {
      "normal": {
        "prices": {
          "setsPerKey": {"tf2": {"sell": 12}}
        }
      }
    }
  }
  ```

- 0 removes a price side or a count. This stops buying normal sets for TF2 keys:

  ```json
  {
    "sets": {
      "normal": {
        "prices": {
          "setsPerKey": {"tf2": {"buy": 0}}
        }
      }
    }
  }
  ```

- A stock you send replaces the stored stock of that side. This leaves the bot with 3 normal sets of app 440 and keeps its foil stock:

  ```json
  {
    "sets": {
      "normal": {"stock": {"440": 3}}
    }
  }
  ```

- `{}` clears a stock or a map, and `[]` clears a list. This empties the game stock, drops every per-game price and clears the chat commands:

  ```json
  {
    "games": {"stock": {}, "priceByApp": {}},
    "commands": []
  }
  ```

- `null` clears an object. This clears the languages, the level range and every rule:

  ```json
  {
    "profile": {"languages": null, "levelRange": null},
    "rules": null
  }
  ```

## Prices

Every price is named after its unit, and `sell` and `buy` are from the bot's side.

- `sets.normal.prices.setsPerKey.tf2.sell` is the normal sets the bot gives you for one TF2 key.
- `sets.foil.prices.setsPerKey.tf2.sell` is the same for foil sets, which have their own prices.
- `sets.normal.prices.gemsPerSet.sell` is the gems it asks for one set.
- `sets.normal.prices.coinsPerSet` prices a set in cryptocurrencies, as decimal strings.
- `games.prices.keysPerGame.tf2.sell` is the keys it asks for one game, and `games.priceByApp` overrides it for single games.
- `gems.prices.gemsPerKey.tf2.sell` is the gems the bot gives you for one TF2 key.

A bot buys what it quotes a buy price for. There is no separate field that says a bot takes supply, and no bot type to send: the directory reads what a bot does from its stock and prices.

```json
{
  "sets": {
    "normal": {
      "stock": {"440": 3},
      "prices": {
        "setsPerKey": {"tf2": {"sell": 12, "buy": 14}}
      }
    },
    "foil": {
      "stock": {"730": 1},
      "prices": {
        "setsPerKey": {"tf2": {"sell": 0.5}}
      }
    },
    "limits": {"maxPerUserPerApp": 5, "maxStockPerApp": 10}
  },
  "games": {
    "stock": {"730": 2},
    "priceByApp": {
      "730": {
        "keysPerGame": {"tf2": {"sell": 4}}
      }
    }
  }
}
```

Sale and event sets need nothing special: send them as app IDs in the normal stock.

## Profile and rules

`profile` says how users reach the bot: its website, the ISO 639-1 languages it answers in (`default` must be in `supported`), and the account levels its stock is meant for. `rules` says which users and trades it accepts. The calculator leaves out a bot whose rules turn the signed-in user away for a VAC or trade ban.

```json
{
  "profile": {
    "website": "https://example.com/order",
    "languages": {"supported": ["en", "pt"], "default": "en"},
    "levelRange": {"min": 1, "max": 200}
  },
  "rules": {"acceptsTradeHolds": false, "acceptsVacBannedUsers": true}
}
```

## Testing unlisted

`profile.isListed` sets whether everyone sees the bot once it is approved. Send `false` while you test your script. The bot keeps taking pushes, but only you and staff see it in the directory, on its page and in the calculator, marked `isPreview`. Everyone else gets 404 for it, as for a missing bot. Send `true`, or use the switch on your bot page, when it is ready. Leave the field out to keep the stored value. New bots start listed. If staff have hidden your bot, it stays hidden whatever you send: your choice is saved, and the push answers a `hiddenByStaff` issue.

```json
{
  "profile": {
    "isListed": false
  }
}
```

## Payment, commands and features

`payment` lists the Steam items, by market hash name, that count as each currency. Items for a currency the bot quotes no price in are kept and reported as `paymentWithoutPrice`. `commands` is every chat command the bot answers, at most 50 of up to 32 characters. `features` declares what the bot does, from the 15 names the `feature` field lists, and each feature can name up to 20 commands of its own, also up to 32 characters each. Neither list is checked against the other. `badgeAware` judges by the customer's badges and `inventoryAware` by the copies in their inventory, so a bot can declare both.

A feature that each customer turns on for themselves names the command that does it in `activationCommand`, free text of up to 32 characters. Leave it out when the feature is always on. The directory shows the command next to the feature, and `bot.plan`'s `requires` still matches the bot, since any customer can turn the feature on.

```json
{
  "payment": {
    "tf2": {"items": ["Mann Co. Supply Crate Key"]},
    "gems": {"items": ["Sack of Gems", "Gems"]}
  },
  "commands": ["!help", "!prices", "!buytf", "!buyonetf", "!check", "!useinv"],
  "features": [
    {"feature": "badgeAware", "commands": ["!check", "!buytf"]},
    {
      "feature": "inventoryAware",
      "commands": ["!check", "!buytf", "!buyonetf"],
      "activationCommand": "!useinv"
    }
  ]
}
```

## Client

A push without `client` is named by its User-Agent (`name/version`). Send `client` so staff can tell your plugin's versions apart.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.push" method="post" path="/v1/bot.push" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.push({
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botPush } from "@steamsets/client-ts/funcs/botPush.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botPush(steamSets, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botPush failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotPushRequestBody](../../models/components/botpushrequestbody.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotPushResponse](../../models/operations/botpushresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 403, 422, 429  | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## register

Lists a bot by its SteamID, with no proof that it is yours. A new bot goes live as soon as its listing fee arrives. A bot the directory already lists keeps its name, type and listing, and takes your pushes once staff mark its fee paid. bot.claim does the same with proof, by a Steam sign-in as the bot.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.register" method="post" path="/v1/bot.register" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.register({
    name: "<value>",
    steamId: "76561199756787903",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botRegister } from "@steamsets/client-ts/funcs/botRegister.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botRegister(steamSets, {
    name: "<value>",
    steamId: "76561199756787903",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botRegister failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotRegisterRequestBody](../../models/components/botregisterrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotRegisterResponse](../../models/operations/botregisterresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 409, 422       | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## registerMany

Lists up to 50 bots in one request, by SteamID and with no proof that they are yours. Each new bot goes live as soon as its own listing fee arrives. Each entry gets its own result: the bot and its push key, or why it was not listed. One entry failing does not stop the others. A bot the directory already lists keeps its name, type and listing, and takes your pushes once staff mark its fee paid. bot.claim lists one bot with proof, by a Steam sign-in as the bot.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.registerMany" method="post" path="/v1/bot.registerMany" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.registerMany({
    bots: [
      {
        name: "<value>",
        steamId: "76561199756787903",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botRegisterMany } from "@steamsets/client-ts/funcs/botRegisterMany.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botRegisterMany(steamSets, {
    bots: [
      {
        name: "<value>",
        steamId: "76561199756787903",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botRegisterMany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotRegisterManyRequestBody](../../models/components/botregistermanyrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotRegisterManyResponse](../../models/operations/botregistermanyresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## rotateKey

Replaces the push key of a bot you own and returns the new key once. The old key keeps working for oldKeyExpiresIn, at most 7 days, and by default stops right away. Staff can rotate the key of any bot that has an owner. A bot that is not yours answers 404.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.rotateKey" method="post" path="/v1/bot.rotateKey" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.rotateKey({
    id: "bot_3cVFAKxh8Q2ZqkTq",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botRotateKey } from "@steamsets/client-ts/funcs/botRotateKey.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botRotateKey(steamSets, {
    id: "bot_3cVFAKxh8Q2ZqkTq",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botRotateKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotRotateKeyRequestBody](../../models/components/botrotatekeyrequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotRotateKeyResponse](../../models/operations/botrotatekeyresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 404, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## setListed

Sets whether everyone sees your bot, or only you and staff. An unlisted bot takes pushes as usual and shows to you in the directory, on its page and in the calculator, marked isPreview. Use it while you test your script. Staff can set it on any bot. While staff have hidden the bot (listing.isHiddenByStaff), your choice is saved but the bot stays hidden until staff show it again. A bot that is not yours answers 404.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.setListed" method="post" path="/v1/bot.setListed" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.setListed({
    id: "bot_3cVFAKxh8Q2ZqkTq",
    isListed: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botSetListed } from "@steamsets/client-ts/funcs/botSetListed.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botSetListed(steamSets, {
    id: "bot_3cVFAKxh8Q2ZqkTq",
    isListed: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botSetListed failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotSetListedRequestBody](../../models/components/botsetlistedrequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotSetListedResponse](../../models/operations/botsetlistedresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 404, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## stats

Unique visitors per UTC day who saw the bot in the directory, opened its page, got it in a calculator plan and clicked through to Steam. For the bot's owner and staff; anyone else gets 404.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.stats" method="post" path="/v1/bot.stats" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.stats({
    id: "bot_3cVFAKxh8Q2ZqkTq",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botStats } from "@steamsets/client-ts/funcs/botStats.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botStats(steamSets, {
    id: "bot_3cVFAKxh8Q2ZqkTq",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botStats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotStatsRequestBody](../../models/components/botstatsrequestbody.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotStatsResponse](../../models/operations/botstatsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 404, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## track

Feeds the bot owner's stats (bot.stats). Send it from the browser after hydration, never from the server render. Unknown bot ids are ignored, and the response is always empty.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.track" method="post" path="/v1/bot.track" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.track({
    botTrackRequestBody: {
      events: [],
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
import { botTrack } from "@steamsets/client-ts/funcs/botTrack.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botTrack(steamSets, {
    botTrackRequestBody: {
      events: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botTrack failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BotTrackRequest](../../models/operations/bottrackrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotTrackResponse](../../models/operations/bottrackresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 422                 | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## ~~update~~

Deprecated: use bot.push, which takes the same key, answers what it stored and what looked wrong, and names every price after its unit. This route keeps working as it is.

Every field is optional and a missing field keeps its stored value. That holds down to each price side and stock count, and 0 removes one: `{"sets": {"prices": {"tf2": {"buy": 0}}}}` stops buying sets for TF2 keys and changes nothing else. `sets.stock`, when sent, replaces the whole stock, and so does `games.stock` for the game stock. Game prices are keys (or gems) per game, not games per key. Push at least every 30 minutes: a bot silent for 45 minutes shows as stale, and after a day it is hidden.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bot.update" method="post" path="/v1/bot.update" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.bot.update({
    steamId: "76561199756787903",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { botUpdate } from "@steamsets/client-ts/funcs/botUpdate.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await botUpdate(steamSets, {
    steamId: "76561199756787903",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("botUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BotPushBody](../../models/components/botpushbody.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BotUpdateResponse](../../models/operations/botupdateresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |