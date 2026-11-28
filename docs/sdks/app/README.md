# App

## Overview

Steam app (game) metadata and badges.

### Available Operations

* [get](#get) - Get the trading card badges of apps
* [list](#list) - List every app with trading cards
* [listCapsules](#listcapsules) - List the small capsule art of apps
* [queueUpdate](#queueupdate) - Queue app update
* [appBadgesFile](#appbadgesfile) - Download every app's card count and name
* [appBadgesSlimFile](#appbadgesslimfile) - Download every app's card count

## get

Returns the trading card badges of up to 100 apps, sale and event apps included.

## What you get

- Every badge level with its id, image, XP, scarcity, tracked holders, the highest level crafted, and the first and latest craft SteamSets knows.
- For card badges, the cards and the card, set, badge and booster prices in US cents.
- A badge without prices, such as a sale or event tier, has no `prices`, `booster`, `isMarketable`, `isEveryCardListed` or `updatedAt`.

Ids that SteamSets does not know, or that have no badge, are in `missing`.

## Freshness

Prices are up to an hour behind steamsets.com, and badge data up to 30 minutes.

## Cost

Each app id uses one unit of the key's 5,000 daily units, found or not.

## Example

```json
{
  "apps": [
    {
      "appId": 730,
      "name": "Counter-Strike 2",
      "isSale": false,
      "isEvent": false,
      "normal": {
        "cardCount": 5,
        "isMarketable": true,
        "prices": { "setCents": 52, "toLevelCents": [52, 104, 157, 210] },
        "levels": [{ "badgeId": "bdg_4f2k", "steamBadgeId": 2, "level": 1, "xp": 100, "scarcity": 812345 }]
      }
    }
  ],
  "missing": [],
  "snapshotAt": "2026-11-16T10:00:00Z"
}
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.get" method="post" path="/v1/app.get" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.app.get({
    appIds: [
      730,
      753,
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
import { appGet } from "@steamsets/client-ts/funcs/appGet.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await appGet(steamSets, {
    appIds: [
      730,
      753,
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AppGetRequestBody](../../models/components/appgetrequestbody.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppGetResponse](../../models/operations/appgetresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422, 429       | application/problem+json |
| errors.ErrorModel        | 500, 503                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## list

Returns the id, name and card count of every app with a trading card badge, by app id.

## Paging

A page holds 5,000 apps by default and up to 20,000. Send `nextCursor` back as `cursor` for the next page. It is null on the last page.

## Freshness

The list is up to an hour behind steamsets.com.

## Cost

This route is free. It uses no units of the key's daily allowance.

## Example

```json
{
  "apps": [
    { "appId": 220, "name": "Half-Life 2", "cardCount": 8, "hasNormal": true, "hasFoil": true }
  ],
  "nextCursor": "220"
}
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.list" method="post" path="/v1/app.list" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.app.list({
    cursor: "730",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { appList } from "@steamsets/client-ts/funcs/appList.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await appList(steamSets, {
    cursor: "730",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AppListRequestBody](../../models/components/applistrequestbody.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppListResponse](../../models/operations/applistresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422            | application/problem+json |
| errors.ErrorModel        | 500, 503                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## listCapsules

List the small capsule art of apps

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.listCapsules" method="post" path="/v1/app.listCapsules" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.app.listCapsules({
    appIds: [
      730,
      440,
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
import { appListCapsules } from "@steamsets/client-ts/funcs/appListCapsules.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await appListCapsules(steamSets, {
    appIds: [
      730,
      440,
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appListCapsules failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AppListCapsulesRequestBody](../../models/components/applistcapsulesrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppListCapsulesResponse](../../models/operations/applistcapsulesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## queueUpdate

Queue app update

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.queueUpdate" method="post" path="/v1/app.queueUpdate" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.app.queueUpdate({
    appIds: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { appQueueUpdate } from "@steamsets/client-ts/funcs/appQueueUpdate.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await appQueueUpdate(steamSets, {
    appIds: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appQueueUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V1AppQueueUpdateRequestBody](../../models/components/v1appqueueupdaterequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppQueueUpdateResponse](../../models/operations/appqueueupdateresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 403, 422       | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## appBadgesFile

Every app with trading cards, as a JSON object keyed by app id. Each value is the app's name and its number of cards in one set.

The format is the one of [steam-badges-db](https://github.com/nolddor/steam-badges-db), so a bot that reads that project's `badges.min.json` only changes the URL.

## Freshness and cost

The file is rebuilt every hour, and you can cache it for an hour. It needs no API key and is free. It holds no prices; use `app.get` for those.

## Example

```json
{ "220": { "name": "Half-Life 2", "size": 8 }, "440": { "name": "Team Fortress 2", "size": 9 } }
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="appBadgesFile" method="get" path="/v1/badges.json" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets();

async function run() {
  const result = await steamSets.app.appBadgesFile();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { appAppBadgesFile } from "@steamsets/client-ts/funcs/appAppBadgesFile.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore();

async function run() {
  const res = await appAppBadgesFile(steamSets);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appAppBadgesFile failed:", res.error);
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

**Promise\<[operations.AppBadgesFileResponse](../../models/operations/appbadgesfileresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 500, 503                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## appBadgesSlimFile

Every app with trading cards, as a JSON object keyed by app id. Each value is the number of cards in one set.

The format is the one of [steam-badges-db](https://github.com/nolddor/steam-badges-db), so a bot that reads that project's `badges.slim.json` only changes the URL.

## Freshness and cost

The file is rebuilt every hour, and you can cache it for an hour. It needs no API key and is free. It holds no prices; use `app.get` for those.

## Example

```json
{ "220": 8, "440": 9 }
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="appBadgesSlimFile" method="get" path="/v1/badges.slim.json" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets();

async function run() {
  const result = await steamSets.app.appBadgesSlimFile();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { appAppBadgesSlimFile } from "@steamsets/client-ts/funcs/appAppBadgesSlimFile.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore();

async function run() {
  const res = await appAppBadgesSlimFile(steamSets);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appAppBadgesSlimFile failed:", res.error);
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

**Promise\<[operations.AppBadgesSlimFileResponse](../../models/operations/appbadgesslimfileresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 500, 503                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |