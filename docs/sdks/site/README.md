# Site

## Overview

### Available Operations

* [subscribe](#subscribe) - Server-sent-events stream of site-wide broadcasts (maintenance, announcements, etc).

## subscribe

Server-sent-events stream of site-wide broadcasts (maintenance, announcements, etc).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="site.subscribe" method="get" path="/v1/site.subscribe" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.site.subscribe();

  if (result.serverSentEvents == null) {
    throw new Error("failed to create stream: received null value");
  }
  for await (const event of result.serverSentEvents) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { siteSubscribe } from "@steamsets/client-ts/funcs/siteSubscribe.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await siteSubscribe(steamSets);
  if (res.ok) {
    const { value: result } = res;
    if (result.serverSentEvents == null) {
    throw new Error("failed to create stream: received null value");
  }
  for await (const event of result.serverSentEvents) {
    console.log(event);
  }
  } else {
    console.log("siteSubscribe failed:", res.error);
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

**Promise\<[operations.SiteSubscribeResponse](../../models/operations/sitesubscriberesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |