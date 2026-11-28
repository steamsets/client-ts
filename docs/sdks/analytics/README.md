# Analytics

## Overview

API key and developer analytics.

### Available Operations

* [trackEvent](#trackevent) - Track a frontend-only profile view. Frontend API key + logged-in users only.
* [trackSearchParse](#tracksearchparse) - Record what the search parse model read from a settled query
* [trackSearches](#tracksearches) - Record the site's settled searches and the results opened from them

## trackEvent

Track a frontend-only profile view. Frontend API key + logged-in users only.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="trackEvent" method="post" path="/v1/analytics.trackEvent" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.analytics.trackEvent({
    analyticsTrackEventRequestBody: {
      payload: {
        "key": "<value>",
      },
      type: "profile_view",
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
import { analyticsTrackEvent } from "@steamsets/client-ts/funcs/analyticsTrackEvent.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await analyticsTrackEvent(steamSets, {
    analyticsTrackEventRequestBody: {
      payload: {
        "key": "<value>",
      },
      type: "profile_view",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsTrackEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TrackEventRequest](../../models/operations/trackeventrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TrackEventResponse](../../models/operations/trackeventresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## trackSearchParse

Feeds the admin's search query report and the distilled parser's training set. No account, session, visitor id or address is stored. Call it from the site's server with the visitor's request headers. The response is always empty.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="trackSearchParse" method="post" path="/v1/analytics.trackSearchParse" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.analytics.trackSearchParse({
    analyticsTrackSearchParseRequestBody: {
      cached: false,
      chips: [
        "<value 1>",
      ],
      model: "Element",
      ms: 189489,
      names: [
        "<value 1>",
      ],
      page: "badges",
      picks: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      promptVersion: 250416,
      query: "<value>",
      raw: "<value>",
      rejected: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      schemaHash: "<value>",
      schemaVersion: 395963,
      text: "<value>",
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
import { analyticsTrackSearchParse } from "@steamsets/client-ts/funcs/analyticsTrackSearchParse.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await analyticsTrackSearchParse(steamSets, {
    analyticsTrackSearchParseRequestBody: {
      cached: false,
      chips: [
        "<value 1>",
      ],
      model: "Element",
      ms: 189489,
      names: [
        "<value 1>",
      ],
      page: "badges",
      picks: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      promptVersion: 250416,
      query: "<value>",
      raw: "<value>",
      rejected: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      schemaHash: "<value>",
      schemaVersion: 395963,
      text: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsTrackSearchParse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TrackSearchParseRequest](../../models/operations/tracksearchparserequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TrackSearchParseResponse](../../models/operations/tracksearchparseresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## trackSearches

Feeds the admin's search query report. No account, session, visitor id or address is stored with an event. Send it from the browser after hydration, never from the server render. The response is always empty.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="trackSearches" method="post" path="/v1/analytics.trackSearches" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.analytics.trackSearches({
    analyticsTrackSearchesRequestBody: {
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
import { analyticsTrackSearches } from "@steamsets/client-ts/funcs/analyticsTrackSearches.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await analyticsTrackSearches(steamSets, {
    analyticsTrackSearchesRequestBody: {
      events: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsTrackSearches failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TrackSearchesRequest](../../models/operations/tracksearchesrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TrackSearchesResponse](../../models/operations/tracksearchesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401, 422            | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |