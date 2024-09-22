# Leaderboard
(*leaderboard*)

## Overview

### Available Operations

* [leaderboardV1GetAccount](#leaderboardv1getaccount) - Get an leaderboard for accounts

## leaderboardV1GetAccount

Get an leaderboard for accounts

### Example Usage

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  session: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.leaderboard.leaderboardV1GetAccount({
    appId: 730,
    badgeId: "4",
    badgeIsFoil: true,
    end: 10,
    leaderboard: "xp",
    location: {
      city: "berlin",
      country: "germany",
      region: "europe",
      state: "berlin",
    },
    start: 1,
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
import { leaderboardLeaderboardV1GetAccount } from "@steamsets/client-ts/funcs/leaderboardLeaderboardV1GetAccount.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  session: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await leaderboardLeaderboardV1GetAccount(steamSets, {
    appId: 730,
    badgeId: "4",
    badgeIsFoil: true,
    end: 10,
    leaderboard: "xp",
    location: {
      city: "berlin",
      country: "germany",
      region: "europe",
      state: "berlin",
    },
    start: 1,
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
| `request`                                                                                                                                                                      | [components.V1AccountLeaderboardRequestBody](../../models/components/v1accountleaderboardrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LeaderboardV1GetAccountResponse](../../models/operations/leaderboardv1getaccountresponse.md)\>**

### Errors

| Error Object             | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 404,422,500              | application/problem+json |
| errors.SDKError          | 4xx-5xx                  | */*                      |
