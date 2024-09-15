# Public
(*public*)

## Overview

This API can be accessed by anyone with an API Key

### Available Operations

* [accountV1GetApps](#accountv1getapps) - Get Account Apps
* [accountV1GetBadges](#accountv1getbadges) - Get Account Badges
* [accountV1GetDataPoints](#accountv1getdatapoints) - Get Account DataPoints
* [accountV1GetFriends](#accountv1getfriends) - Get Account Friends
* [accountV1GetInfo](#accountv1getinfo) - Get Account Info
* [accountV1GetLeaderboardHistory](#accountv1getleaderboardhistory) - Get Account Leaderboard History
* [accountV1Queue](#accountv1queue) - Queue a app for processing

## accountV1GetApps

Get Account Apps

### Example Usage

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await steamSets.public.accountV1GetApps({});
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { publicAccountV1GetApps } from "@steamsets/client-ts/funcs/publicAccountV1GetApps.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await publicAccountV1GetApps(steamSets, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AccountSearch](../../models/components/accountsearch.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountV1GetAppsResponse](../../models/operations/accountv1getappsresponse.md)\>**

### Errors

| Error Object             | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400,404,422,500          | application/problem+json |
| errors.SDKError          | 4xx-5xx                  | */*                      |


## accountV1GetBadges

Get Account Badges

### Example Usage

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await steamSets.public.accountV1GetBadges({});
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { publicAccountV1GetBadges } from "@steamsets/client-ts/funcs/publicAccountV1GetBadges.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await publicAccountV1GetBadges(steamSets, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AccountSearch](../../models/components/accountsearch.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountV1GetBadgesResponse](../../models/operations/accountv1getbadgesresponse.md)\>**

### Errors

| Error Object             | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400,404,422,500          | application/problem+json |
| errors.SDKError          | 4xx-5xx                  | */*                      |


## accountV1GetDataPoints

Get Account DataPoints

### Example Usage

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await steamSets.public.accountV1GetDataPoints({});
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { publicAccountV1GetDataPoints } from "@steamsets/client-ts/funcs/publicAccountV1GetDataPoints.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await publicAccountV1GetDataPoints(steamSets, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AccountSearch](../../models/components/accountsearch.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountV1GetDataPointsResponse](../../models/operations/accountv1getdatapointsresponse.md)\>**

### Errors

| Error Object             | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400,404,422,500          | application/problem+json |
| errors.SDKError          | 4xx-5xx                  | */*                      |


## accountV1GetFriends

Get Account Friends

### Example Usage

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await steamSets.public.accountV1GetFriends({});
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { publicAccountV1GetFriends } from "@steamsets/client-ts/funcs/publicAccountV1GetFriends.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await publicAccountV1GetFriends(steamSets, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AccountSearch](../../models/components/accountsearch.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountV1GetFriendsResponse](../../models/operations/accountv1getfriendsresponse.md)\>**

### Errors

| Error Object             | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400,404,422,500          | application/problem+json |
| errors.SDKError          | 4xx-5xx                  | */*                      |


## accountV1GetInfo

Get Account Info

### Example Usage

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await steamSets.public.accountV1GetInfo({});
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { publicAccountV1GetInfo } from "@steamsets/client-ts/funcs/publicAccountV1GetInfo.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await publicAccountV1GetInfo(steamSets, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AccountSearch](../../models/components/accountsearch.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountV1GetInfoResponse](../../models/operations/accountv1getinforesponse.md)\>**

### Errors

| Error Object             | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 404,422,429,500          | application/problem+json |
| errors.SDKError          | 4xx-5xx                  | */*                      |


## accountV1GetLeaderboardHistory

Get Account Leaderboard History

### Example Usage

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await steamSets.public.accountV1GetLeaderboardHistory({});
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { publicAccountV1GetLeaderboardHistory } from "@steamsets/client-ts/funcs/publicAccountV1GetLeaderboardHistory.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await publicAccountV1GetLeaderboardHistory(steamSets, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AccountSearch](../../models/components/accountsearch.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountV1GetLeaderboardHistoryResponse](../../models/operations/accountv1getleaderboardhistoryresponse.md)\>**

### Errors

| Error Object             | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400,404,422,500          | application/problem+json |
| errors.SDKError          | 4xx-5xx                  | */*                      |


## accountV1Queue

Queue a app for processing

### Example Usage

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await steamSets.public.accountV1Queue({
    id: 730,
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { publicAccountV1Queue } from "@steamsets/client-ts/funcs/publicAccountV1Queue.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
    session: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await publicAccountV1Queue(steamSets, {
    id: 730,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AppSearch](../../models/components/appsearch.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountV1QueueResponse](../../models/operations/accountv1queueresponse.md)\>**

### Errors

| Error Object             | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400,422,429,500          | application/problem+json |
| errors.SDKError          | 4xx-5xx                  | */*                      |
