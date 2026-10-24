# Item

## Overview

Steam item catalog and ownership lookups (trading cards, booster packs).

### Available Operations

* [findOwners](#findowners) - Find owners of one or more trading cards or booster packs. Friend paths from the requester are included for logged-in callers.
* [findSpareHolders](#findspareholders) - Find accounts with a spare copy of one or more trading cards: a copy their badge does not need. Only cards with few owners are looked up. Every caller gets the totals. A donator gets the holders, nearest in the friend graph first.
* [findWanters](#findwanters) - Find accounts that want one or more trading cards: they watch the card, have it on their wishlist, or need it to finish a set they almost have, and do not own it. Every caller gets the totals. A donator gets the wanters, nearest in the friend graph first.

## findOwners

Find owners of one or more trading cards or booster packs. Friend paths from the requester are included for logged-in callers.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="item.findOwners" method="post" path="/v1/item.findOwners" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.item.findOwners({
    itemIds: [
      93791,
      811107,
      737160,
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
import { itemFindOwners } from "@steamsets/client-ts/funcs/itemFindOwners.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await itemFindOwners(steamSets, {
    itemIds: [
      93791,
      811107,
      737160,
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("itemFindOwners failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.FindOwnersRequestBody](../../models/components/findownersrequestbody.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ItemFindOwnersResponse](../../models/operations/itemfindownersresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 422                 | application/problem+json |
| errors.ErrorModel        | 500, 503                 | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## findSpareHolders

Find accounts with a spare copy of one or more trading cards: a copy their badge does not need. Only cards with few owners are looked up. Every caller gets the totals. A donator gets the holders, nearest in the friend graph first.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="item.findSpareHolders" method="post" path="/v1/item.findSpareHolders" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.item.findSpareHolders({
    itemIds: [
      827147,
      174424,
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
import { itemFindSpareHolders } from "@steamsets/client-ts/funcs/itemFindSpareHolders.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await itemFindSpareHolders(steamSets, {
    itemIds: [
      827147,
      174424,
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("itemFindSpareHolders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.FindSpareHoldersRequestBody](../../models/components/findspareholdersrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ItemFindSpareHoldersResponse](../../models/operations/itemfindspareholdersresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 422                 | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## findWanters

Find accounts that want one or more trading cards: they watch the card, have it on their wishlist, or need it to finish a set they almost have, and do not own it. Every caller gets the totals. A donator gets the wanters, nearest in the friend graph first.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="item.findWanters" method="post" path="/v1/item.findWanters" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.item.findWanters({
    itemIds: [
      530978,
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
import { itemFindWanters } from "@steamsets/client-ts/funcs/itemFindWanters.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await itemFindWanters(steamSets, {
    itemIds: [
      530978,
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("itemFindWanters failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.FindWantersRequestBody](../../models/components/findwantersrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ItemFindWantersResponse](../../models/operations/itemfindwantersresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 422                 | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |