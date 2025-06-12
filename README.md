# openapi

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=<no value>&utm_campaign=go"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @steamsets/client-ts
```

### PNPM

```bash
pnpm add @steamsets/client-ts
```

### Bun

```bash
bun add @steamsets/client-ts
```

### Yarn

```bash
yarn add @steamsets/client-ts zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.bookmarkBadge({
    badgeId: "bdg_123",
    bookmark: true,
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [account](docs/sdks/account/README.md)

* [bookmarkBadge](docs/sdks/account/README.md#bookmarkbadge)
* [compareBadges](docs/sdks/account/README.md#comparebadges)
* [createConnection](docs/sdks/account/README.md#createconnection)
* [createDeveloperApp](docs/sdks/account/README.md#createdeveloperapp)
* [deleteConnection](docs/sdks/account/README.md#deleteconnection)
* [deleteDeveloperApp](docs/sdks/account/README.md#deletedeveloperapp)
* [deleteImages](docs/sdks/account/README.md#deleteimages)
* [deleteSession](docs/sdks/account/README.md#deletesession)
* [getBadgeStats](docs/sdks/account/README.md#getbadgestats)
* [getDataPoints](docs/sdks/account/README.md#getdatapoints)
* [getInfo](docs/sdks/account/README.md#getinfo)
* [getMeta](docs/sdks/account/README.md#getmeta)
* [getSession](docs/sdks/account/README.md#getsession)
* [getSettings](docs/sdks/account/README.md#getsettings)
* [listApps](docs/sdks/account/README.md#listapps)
* [listBadgeBookmarks](docs/sdks/account/README.md#listbadgebookmarks)
* [listBadges](docs/sdks/account/README.md#listbadges)
* [listFriends](docs/sdks/account/README.md#listfriends)
* [listImages](docs/sdks/account/README.md#listimages)
* [listLeaderboardHistory](docs/sdks/account/README.md#listleaderboardhistory)
* [listOwnedBadges](docs/sdks/account/README.md#listownedbadges)
* [login](docs/sdks/account/README.md#login)
* [logout](docs/sdks/account/README.md#logout)
* [queueUpdate](docs/sdks/account/README.md#queueupdate)
* [reconnectConnection](docs/sdks/account/README.md#reconnectconnection)
* [refreshSession](docs/sdks/account/README.md#refreshsession)
* [sendEmailVerification](docs/sdks/account/README.md#sendemailverification)
* [subscribeEmail](docs/sdks/account/README.md#subscribeemail)
* [updateConnection](docs/sdks/account/README.md#updateconnection)
* [updateDeveloperApp](docs/sdks/account/README.md#updatedeveloperapp)
* [updateImages](docs/sdks/account/README.md#updateimages)
* [updateRole](docs/sdks/account/README.md#updaterole)
* [updateSettings](docs/sdks/account/README.md#updatesettings)
* [updateVanity](docs/sdks/account/README.md#updatevanity)
* [uploadImages](docs/sdks/account/README.md#uploadimages)
* [verifyConnection](docs/sdks/account/README.md#verifyconnection)
* [verifyEmail](docs/sdks/account/README.md#verifyemail)

### [admin](docs/sdks/admin/README.md)

* [getAccount](docs/sdks/admin/README.md#getaccount)
* [removeVanity](docs/sdks/admin/README.md#removevanity)
* [updateResources](docs/sdks/admin/README.md#updateresources)
* [updateRoles](docs/sdks/admin/README.md#updateroles)

### [apps](docs/sdks/apps/README.md)

* [listBadges](docs/sdks/apps/README.md#listbadges)

### [badge](docs/sdks/badge/README.md)

* [badgeListAccounts](docs/sdks/badge/README.md#badgelistaccounts)
* [search](docs/sdks/badge/README.md#search)
* [suggestSearch](docs/sdks/badge/README.md#suggestsearch)
* [suggestTags](docs/sdks/badge/README.md#suggesttags)

### [badges](docs/sdks/badges/README.md)

* [listPrices](docs/sdks/badges/README.md#listprices)
* [listTags](docs/sdks/badges/README.md#listtags)
* [tag](docs/sdks/badges/README.md#tag)

### [leaderboard](docs/sdks/leaderboard/README.md)

* [getAccount](docs/sdks/leaderboard/README.md#getaccount)
* [getAccountsMeta](docs/sdks/leaderboard/README.md#getaccountsmeta)
* [getGroup](docs/sdks/leaderboard/README.md#getgroup)
* [getGroupsMeta](docs/sdks/leaderboard/README.md#getgroupsmeta)
* [getLowestRanks](docs/sdks/leaderboard/README.md#getlowestranks)
* [previewAccountRank](docs/sdks/leaderboard/README.md#previewaccountrank)

### [leaderboards](docs/sdks/leaderboards/README.md)

* [list](docs/sdks/leaderboards/README.md#list)

### [liveness](docs/sdks/liveness/README.md)

* [check](docs/sdks/liveness/README.md#check) - Liveness check

### [location](docs/sdks/location/README.md)

* [get](docs/sdks/location/README.md#get)

### [staff](docs/sdks/staff/README.md)

* [list](docs/sdks/staff/README.md#list)

### [stats](docs/sdks/stats/README.md)

* [get](docs/sdks/stats/README.md#get)


</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.bookmarkBadge({
    badgeId: "bdg_123",
    bookmark: true,
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.bookmarkBadge({
    badgeId: "bdg_123",
    bookmark: true,
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`SteamSetsError`](./src/models/errors/steamsetserror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property                  | Type       | Description                                                                             |
| ------------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`           | `string`   | Error message                                                                           |
| `error.httpMeta.response` | `Response` | HTTP response. Access to headers and more.                                              |
| `error.httpMeta.request`  | `Request`  | HTTP request. Access to headers and more.                                               |
| `error.data$`             |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { SteamSets } from "@steamsets/client-ts";
import * as errors from "@steamsets/client-ts/models/errors";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  try {
    const result = await steamSets.account.bookmarkBadge({
      badgeId: "bdg_123",
      bookmark: true,
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.SteamSetsError) {
      console.log(error.message);
      console.log(error.httpMeta.response.status);
      console.log(error.httpMeta.response.headers);
      console.log(error.httpMeta.request);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorModel) {
        console.log(error.data$.dollarSchema); // string
        console.log(error.data$.detail); // string
        console.log(error.data$.errors); // ErrorDetail[]
        console.log(error.data$.instance); // string
        console.log(error.data$.status); // number
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`SteamSetsError`](./src/models/errors/steamsetserror.ts): The base class for HTTP error responses.
  * [`ErrorModel`](docs/models/errors/errormodel.md): Generic error.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`SteamSetsError`](./src/models/errors/steamsetserror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                      | Description |
| --- | --------------------------- | ----------- |
| 0   | `https://api.steamsets.com` |             |
| 1   | `http://localhost:7388`     |             |

#### Example

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  serverIdx: 1,
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.bookmarkBadge({
    badgeId: "bdg_123",
    bookmark: true,
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  serverURL: "http://localhost:7388",
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.bookmarkBadge({
    badgeId: "bdg_123",
    bookmark: true,
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SteamSets } from "@steamsets/client-ts";
import { HTTPClient } from "@steamsets/client-ts/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SteamSets({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name    | Type | Scheme      |
| ------- | ---- | ----------- |
| `token` | http | HTTP Bearer |

To authenticate with the API the `token` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.bookmarkBadge({
    badgeId: "bdg_123",
    bookmark: true,
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Special Types [types] -->

## Special Types

<!-- End Special Types [types] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @steamsets/client-ts
```

### PNPM

```bash
pnpm add @steamsets/client-ts
```

### Bun

```bash
bun add @steamsets/client-ts
```

### Yarn

```bash
yarn add @steamsets/client-ts zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountBookmarkBadge`](docs/sdks/account/README.md#bookmarkbadge)
- [`accountCompareBadges`](docs/sdks/account/README.md#comparebadges)
- [`accountCreateConnection`](docs/sdks/account/README.md#createconnection)
- [`accountCreateDeveloperApp`](docs/sdks/account/README.md#createdeveloperapp)
- [`accountDeleteConnection`](docs/sdks/account/README.md#deleteconnection)
- [`accountDeleteDeveloperApp`](docs/sdks/account/README.md#deletedeveloperapp)
- [`accountDeleteImages`](docs/sdks/account/README.md#deleteimages)
- [`accountDeleteSession`](docs/sdks/account/README.md#deletesession)
- [`accountGetBadgeStats`](docs/sdks/account/README.md#getbadgestats)
- [`accountGetDataPoints`](docs/sdks/account/README.md#getdatapoints)
- [`accountGetInfo`](docs/sdks/account/README.md#getinfo)
- [`accountGetMeta`](docs/sdks/account/README.md#getmeta)
- [`accountGetSession`](docs/sdks/account/README.md#getsession)
- [`accountGetSettings`](docs/sdks/account/README.md#getsettings)
- [`accountListApps`](docs/sdks/account/README.md#listapps)
- [`accountListBadgeBookmarks`](docs/sdks/account/README.md#listbadgebookmarks)
- [`accountListBadges`](docs/sdks/account/README.md#listbadges)
- [`accountListFriends`](docs/sdks/account/README.md#listfriends)
- [`accountListImages`](docs/sdks/account/README.md#listimages)
- [`accountListLeaderboardHistory`](docs/sdks/account/README.md#listleaderboardhistory)
- [`accountListOwnedBadges`](docs/sdks/account/README.md#listownedbadges)
- [`accountLogin`](docs/sdks/account/README.md#login)
- [`accountLogout`](docs/sdks/account/README.md#logout)
- [`accountQueueUpdate`](docs/sdks/account/README.md#queueupdate)
- [`accountReconnectConnection`](docs/sdks/account/README.md#reconnectconnection)
- [`accountRefreshSession`](docs/sdks/account/README.md#refreshsession)
- [`accountSendEmailVerification`](docs/sdks/account/README.md#sendemailverification)
- [`accountSubscribeEmail`](docs/sdks/account/README.md#subscribeemail)
- [`accountUpdateConnection`](docs/sdks/account/README.md#updateconnection)
- [`accountUpdateDeveloperApp`](docs/sdks/account/README.md#updatedeveloperapp)
- [`accountUpdateImages`](docs/sdks/account/README.md#updateimages)
- [`accountUpdateRole`](docs/sdks/account/README.md#updaterole)
- [`accountUpdateSettings`](docs/sdks/account/README.md#updatesettings)
- [`accountUpdateVanity`](docs/sdks/account/README.md#updatevanity)
- [`accountUploadImages`](docs/sdks/account/README.md#uploadimages)
- [`accountVerifyConnection`](docs/sdks/account/README.md#verifyconnection)
- [`accountVerifyEmail`](docs/sdks/account/README.md#verifyemail)
- [`adminGetAccount`](docs/sdks/admin/README.md#getaccount)
- [`adminRemoveVanity`](docs/sdks/admin/README.md#removevanity)
- [`adminUpdateResources`](docs/sdks/admin/README.md#updateresources)
- [`adminUpdateRoles`](docs/sdks/admin/README.md#updateroles)
- [`appsListBadges`](docs/sdks/apps/README.md#listbadges)
- [`badgeBadgeListAccounts`](docs/sdks/badge/README.md#badgelistaccounts)
- [`badgeSearch`](docs/sdks/badge/README.md#search)
- [`badgesListPrices`](docs/sdks/badges/README.md#listprices)
- [`badgesListTags`](docs/sdks/badges/README.md#listtags)
- [`badgesTag`](docs/sdks/badges/README.md#tag)
- [`badgeSuggestSearch`](docs/sdks/badge/README.md#suggestsearch)
- [`badgeSuggestTags`](docs/sdks/badge/README.md#suggesttags)
- [`leaderboardGetAccount`](docs/sdks/leaderboard/README.md#getaccount)
- [`leaderboardGetAccountsMeta`](docs/sdks/leaderboard/README.md#getaccountsmeta)
- [`leaderboardGetGroup`](docs/sdks/leaderboard/README.md#getgroup)
- [`leaderboardGetGroupsMeta`](docs/sdks/leaderboard/README.md#getgroupsmeta)
- [`leaderboardGetLowestRanks`](docs/sdks/leaderboard/README.md#getlowestranks)
- [`leaderboardPreviewAccountRank`](docs/sdks/leaderboard/README.md#previewaccountrank)
- [`leaderboardsList`](docs/sdks/leaderboards/README.md#list)
- [`livenessCheck`](docs/sdks/liveness/README.md#check) - Liveness check
- [`locationGet`](docs/sdks/location/README.md#get)
- [`staffList`](docs/sdks/staff/README.md#list)
- [`statsGet`](docs/sdks/stats/README.md#get)

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { SteamSets } from "@steamsets/client-ts";

const sdk = new SteamSets({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [openapi](#openapi)
  * [SDK Installation](#sdk-installation)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Special Types](#special-types)
  * [SDK Installation](#sdk-installation-1)
  * [Requirements](#requirements)
  * [Standalone functions](#standalone-functions)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=<no value>&utm_campaign=go)
