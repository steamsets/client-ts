# Account.Me

## Overview

### Available Operations

* [listAppIds](#listappids) - List the apps you own
* [listBadges](#listbadges) - List your crafted badges
* [listInventorySets](#listinventorysets) - List the card sets in your inventory
* [refreshInventory](#refreshinventory) - Refresh your inventory

## listAppIds

Returns the ids of the apps your own account owns, and the privacy of your game details on Steam.

Steam lists owned games only when the game details are public, so with any other `appPrivacy` the list is empty or old.

## Paging

A page holds 50,000 app ids by default and up to 100,000. Send `nextCursor` back as `cursor` for the next page.

## Freshness

The list is as old as your account's last refresh.

## Cost

This route is free. Your own data uses no units of the key's daily allowance.

## Example

```json
{ "appIds": [440, 730], "appPrivacy": "public", "nextCursor": null }
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="account.me.listAppIds" method="post" path="/v1/account.me.listAppIds" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.me.listAppIds({
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
import { accountMeListAppIds } from "@steamsets/client-ts/funcs/accountMeListAppIds.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountMeListAppIds(steamSets, {
    cursor: "730",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountMeListAppIds failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AccountMeListAppIDsRequestBody](../../models/components/accountmelistappidsrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountMeListAppIdsResponse](../../models/operations/accountmelistappidsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## listBadges

Returns the badges of your own account: one entry per app and badge type, with the highest level crafted.

`badgeIds` lists the SteamSets id of every crafted level of that badge. An event or sale app can have more than one badge per type.

## Paging

A page holds 5,000 badges by default and up to 20,000. Send `nextCursor` back as `cursor` for the next page. Use `appIds` to ask for some apps only.

## Freshness

The data is as fresh as `badgesUpdatedAt`.

## Cost

This route is free. Your own data uses no units of the key's daily allowance.

## Example

```json
{
  "badges": [
    { "appId": 730, "isFoil": false, "level": 5, "xp": 500, "completedAt": "2025-05-01T12:00:00Z", "badgeIds": ["bdg_1", "bdg_5"] }
  ],
  "badgesUpdatedAt": "2026-11-15T08:30:00Z",
  "nextCursor": null
}
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="account.me.listBadges" method="post" path="/v1/account.me.listBadges" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.me.listBadges({
    appIds: [
      730,
    ],
    cursor: "730_normal",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { accountMeListBadges } from "@steamsets/client-ts/funcs/accountMeListBadges.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountMeListBadges(steamSets, {
    appIds: [
      730,
    ],
    cursor: "730_normal",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountMeListBadges failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AccountMeListBadgesRequestBody](../../models/components/accountmelistbadgesrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountMeListBadgesResponse](../../models/operations/accountmelistbadgesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## listInventorySets

Returns the trading cards in your own Steam inventory grouped by app, with the cards you hold of each set and the complete sets you can craft.

For each side, `cardCount` is the number of cards in one set, and `craftableSets` is 0 unless you hold every card of the set.

## Paging

A page holds 100 apps by default and up to 500. Send `nextCursor` back as `cursor` for the next page.

## Freshness

The data is as fresh as `inventoryUpdatedAt`. Call `account.me.refreshInventory` to read the inventory again, from `nextRefreshAt` on.

## Cost

This route is free. Your own data uses no units of the key's daily allowance.

## Example

```json
{
  "sets": [
    {
      "appId": 730,
      "normal": { "cards": [{ "name": "Phoenix", "owned": 2 }], "cardCount": 5, "craftableSets": 0 },
      "foil": { "cards": [], "cardCount": 5, "craftableSets": 0 }
    }
  ],
  "total": 1,
  "inventoryUpdatedAt": "2026-11-16T09:00:00Z",
  "nextRefreshAt": "2026-11-16T10:00:00Z",
  "nextCursor": null
}
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="account.me.listInventorySets" method="post" path="/v1/account.me.listInventorySets" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.me.listInventorySets({
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
import { accountMeListInventorySets } from "@steamsets/client-ts/funcs/accountMeListInventorySets.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountMeListInventorySets(steamSets, {
    cursor: "730",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountMeListInventorySets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AccountMeListInventorySetsRequestBody](../../models/components/accountmelistinventorysetsrequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountMeListInventorySetsResponse](../../models/operations/accountmelistinventorysetsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422            | application/problem+json |
| errors.ErrorModel        | 500, 503                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## refreshInventory

Queues a new read of your own Steam inventory.

An account may refresh once an hour, or more often on a supporter tier. A refresh before `nextRefreshAt` gets a 429. `account.me.listInventorySets` shows the result once `inventoryUpdatedAt` moves.

## Cost

This route is free. It uses no units of the key's daily allowance.

## Example

```json
{ "nextRefreshAt": "2026-11-16T11:00:00Z" }
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="account.me.refreshInventory" method="post" path="/v1/account.me.refreshInventory" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.me.refreshInventory({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { accountMeRefreshInventory } from "@steamsets/client-ts/funcs/accountMeRefreshInventory.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await accountMeRefreshInventory(steamSets, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountMeRefreshInventory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AccountMeRefreshInventoryRequestBody](../../models/components/accountmerefreshinventoryrequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountMeRefreshInventoryResponse](../../models/operations/accountmerefreshinventoryresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 401, 422, 429            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |