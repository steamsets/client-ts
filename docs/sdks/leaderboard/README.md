# Leaderboard
(*leaderboard*)

## Overview

Any requests that is somehow used for getting leaderboard data.

### Available Operations

* [getAccount](#getaccount)
* [getAccountMeta](#getaccountmeta)
* [getGroup](#getgroup)
* [getGroupMeta](#getgroupmeta)

## getAccount

### Example Usage

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.leaderboard.getAccount({
    app: {
      appId: 730,
    },
    badge: {
      id: 279811,
      isFoil: true,
    },
    end: 10,
    goToLeaderboardRank: 1,
    leaderboard: "xp",
    location: [
      {
        city: "Bad Krozingen",
        country: "Germany",
        region: "Europe",
        state: "Baden-Wurttemberg",
      },
      {
        city: "Bad Krozingen",
        country: "Germany",
        region: "Europe",
        state: "Baden-Wurttemberg",
      },
    ],
    start: 1,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { leaderboardGetAccount } from "@steamsets/client-ts/funcs/leaderboardGetAccount.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await leaderboardGetAccount(steamSets, {
    app: {
      appId: 730,
    },
    badge: {
      id: 279811,
      isFoil: true,
    },
    end: 10,
    goToLeaderboardRank: 1,
    leaderboard: "xp",
    location: [
      {
        city: "Bad Krozingen",
        country: "Germany",
        region: "Europe",
        state: "Baden-Wurttemberg",
      },
      {
        city: "Bad Krozingen",
        country: "Germany",
        region: "Europe",
        state: "Baden-Wurttemberg",
      },
    ],
    start: 1,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V1AccountLeaderboardRequestBody](../../models/components/v1accountleaderboardrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LeaderboardV1GetAccountLeaderboardResponse](../../models/operations/leaderboardv1getaccountleaderboardresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 404, 422                 | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getAccountMeta

### Example Usage

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.leaderboard.getAccountMeta({
    app: {
      appId: 730,
    },
    badge: {
      id: 835004,
      isFoil: true,
    },
    leaderboard: "xp",
    location: [
      {
        city: "Bad Krozingen",
        country: "Germany",
        region: "Europe",
        state: "Baden-Wurttemberg",
      },
    ],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { leaderboardGetAccountMeta } from "@steamsets/client-ts/funcs/leaderboardGetAccountMeta.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await leaderboardGetAccountMeta(steamSets, {
    app: {
      appId: 730,
    },
    badge: {
      id: 835004,
      isFoil: true,
    },
    leaderboard: "xp",
    location: [
      {
        city: "Bad Krozingen",
        country: "Germany",
        region: "Europe",
        state: "Baden-Wurttemberg",
      },
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V1LeaderboardAccountMetaRequestBody](../../models/components/v1leaderboardaccountmetarequestbody.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LeaderboardV1GetAccountLeaderboardMetaResponse](../../models/operations/leaderboardv1getaccountleaderboardmetaresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 404, 422                 | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getGroup

### Example Usage

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.leaderboard.getGroup({
    end: 10,
    goToLeaderboardRank: 1,
    leaderboard: "most_members",
    start: 1,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { leaderboardGetGroup } from "@steamsets/client-ts/funcs/leaderboardGetGroup.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await leaderboardGetGroup(steamSets, {
    end: 10,
    goToLeaderboardRank: 1,
    leaderboard: "most_members",
    start: 1,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V1GroupLeaderboardRequestBody](../../models/components/v1groupleaderboardrequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LeaderboardV1GetGroupResponse](../../models/operations/leaderboardv1getgroupresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 404, 422                 | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getGroupMeta

### Example Usage

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.leaderboard.getGroupMeta({
    leaderboard: "most_members",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { leaderboardGetGroupMeta } from "@steamsets/client-ts/funcs/leaderboardGetGroupMeta.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await leaderboardGetGroupMeta(steamSets, {
    leaderboard: "most_members",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V1LeaderboardGroupMetaRequestBody](../../models/components/v1leaderboardgroupmetarequestbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LeaderboardV1GetGroupLeaderboardMetaResponse](../../models/operations/leaderboardv1getgroupleaderboardmetaresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 404, 422                 | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |