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

### [Account](docs/sdks/account/README.md)

* [bookmarkBadge](docs/sdks/account/README.md#bookmarkbadge) - Bookmark or unbookmark a badge
* [createConnection](docs/sdks/account/README.md#createconnection) - Create OAuth or domain connection
* [createDeveloperApp](docs/sdks/account/README.md#createdeveloperapp) - Create developer application
* [deleteConnection](docs/sdks/account/README.md#deleteconnection) - Delete OAuth or domain connection
* [deleteDeveloperApp](docs/sdks/account/README.md#deletedeveloperapp) - Delete developer application
* [deleteImages](docs/sdks/account/README.md#deleteimages) - Delete uploaded images
* [deleteSession](docs/sdks/account/README.md#deletesession) - Delete user session
* [getBadgeStats](docs/sdks/account/README.md#getbadgestats) - Get account badge statistics
* [getDataPoints](docs/sdks/account/README.md#getdatapoints) - Get account data points for charts
* [getInfo](docs/sdks/account/README.md#getinfo) - Get account profile information
* [getMeta](docs/sdks/account/README.md#getmeta) - Get account metadata
* [getSession](docs/sdks/account/README.md#getsession) - Get user session information
* [getSettings](docs/sdks/account/README.md#getsettings) - Get account settings
* [listApps](docs/sdks/account/README.md#listapps) - List account owned apps
* [listBadgeBookmarks](docs/sdks/account/README.md#listbadgebookmarks) - List bookmarked badges
* [listBadges](docs/sdks/account/README.md#listbadges) - List account badges
* [listFriends](docs/sdks/account/README.md#listfriends) - List account friends
* [listImages](docs/sdks/account/README.md#listimages) - List uploaded images
* [listInventorySets](docs/sdks/account/README.md#listinventorysets) - List inventory sets
* [listLeaderboardHistory](docs/sdks/account/README.md#listleaderboardhistory) - Get leaderboard history
* [listOwnedBadges](docs/sdks/account/README.md#listownedbadges) - List owned badges
* [login](docs/sdks/account/README.md#login) - Login with Steam
* [logout](docs/sdks/account/README.md#logout) - Logout from session
* [queueUpdate](docs/sdks/account/README.md#queueupdate) - Queue account update
* [reconnectConnection](docs/sdks/account/README.md#reconnectconnection) - Reconnect OAuth connection
* [refreshInventory](docs/sdks/account/README.md#refreshinventory) - Refresh inventory
* [refreshSession](docs/sdks/account/README.md#refreshsession) - Refresh session token
* [sendEmailVerification](docs/sdks/account/README.md#sendemailverification) - Send email verification
* [subscribeEmail](docs/sdks/account/README.md#subscribeemail) - Subscribe to email notifications
* [updateConnection](docs/sdks/account/README.md#updateconnection) - Update OAuth connection
* [updateDeveloperApp](docs/sdks/account/README.md#updatedeveloperapp) - Update developer application
* [updateImages](docs/sdks/account/README.md#updateimages) - Update account images
* [updateRole](docs/sdks/account/README.md#updaterole) - Update account role
* [updateSettings](docs/sdks/account/README.md#updatesettings) - Update account settings
* [updateVanity](docs/sdks/account/README.md#updatevanity) - Update account vanity URL
* [uploadImages](docs/sdks/account/README.md#uploadimages) - Upload images
* [verifyConnection](docs/sdks/account/README.md#verifyconnection) - Verify OAuth connection
* [verifyEmail](docs/sdks/account/README.md#verifyemail) - Verify email address

### [Admin](docs/sdks/admin/README.md)

* [getAccount](docs/sdks/admin/README.md#getaccount) - Get account for admin
* [removeVanity](docs/sdks/admin/README.md#removevanity) - Remove vanity URL
* [updateResources](docs/sdks/admin/README.md#updateresources) - Update account resources
* [updateRoles](docs/sdks/admin/README.md#updateroles) - Update account roles

### [Apps](docs/sdks/apps/README.md)

* [listBadges](docs/sdks/apps/README.md#listbadges) - List app badges

### [Badge](docs/sdks/badge/README.md)

* [search](docs/sdks/badge/README.md#search) - Search badges
* [suggestTags](docs/sdks/badge/README.md#suggesttags) - Suggest badge tag

### [Badges](docs/sdks/badges/README.md)

* [listTags](docs/sdks/badges/README.md#listtags) - List badge tags
* [tag](docs/sdks/badges/README.md#tag) - Tag a badge

### [Leaderboard](docs/sdks/leaderboard/README.md)

* [getAccount](docs/sdks/leaderboard/README.md#getaccount) - Get account leaderboard
* [getAccountsMeta](docs/sdks/leaderboard/README.md#getaccountsmeta) - Get accounts leaderboard metadata
* [getGroup](docs/sdks/leaderboard/README.md#getgroup) - Get group leaderboard
* [getGroupsMeta](docs/sdks/leaderboard/README.md#getgroupsmeta) - Get groups leaderboard metadata
* [getLowestRanks](docs/sdks/leaderboard/README.md#getlowestranks) - Get lowest ranked accounts
* [previewAccountRank](docs/sdks/leaderboard/README.md#previewaccountrank) - Preview account rank

### [Leaderboards](docs/sdks/leaderboards/README.md)

* [list](docs/sdks/leaderboards/README.md#list) - List leaderboard badges

### [Location](docs/sdks/location/README.md)

* [get](docs/sdks/location/README.md#get) - List available locations

### [Staff](docs/sdks/staff/README.md)

* [list](docs/sdks/staff/README.md#list) - List staff members

### [Stats](docs/sdks/stats/README.md)

* [get](docs/sdks/stats/README.md#get) - Get platform statistics

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
  * [`ErrorModel`](./src/models/errors/errormodel.ts): Bad Request.

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
  serverIdx: 0,
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

const sdk = new SteamSets({ httpClient: httpClient });
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
yarn add @steamsets/client-ts
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

- [`accountBookmarkBadge`](docs/sdks/account/README.md#bookmarkbadge) - Bookmark or unbookmark a badge
- [`accountCreateConnection`](docs/sdks/account/README.md#createconnection) - Create OAuth or domain connection
- [`accountCreateDeveloperApp`](docs/sdks/account/README.md#createdeveloperapp) - Create developer application
- [`accountDeleteConnection`](docs/sdks/account/README.md#deleteconnection) - Delete OAuth or domain connection
- [`accountDeleteDeveloperApp`](docs/sdks/account/README.md#deletedeveloperapp) - Delete developer application
- [`accountDeleteImages`](docs/sdks/account/README.md#deleteimages) - Delete uploaded images
- [`accountDeleteSession`](docs/sdks/account/README.md#deletesession) - Delete user session
- [`accountGetBadgeStats`](docs/sdks/account/README.md#getbadgestats) - Get account badge statistics
- [`accountGetDataPoints`](docs/sdks/account/README.md#getdatapoints) - Get account data points for charts
- [`accountGetInfo`](docs/sdks/account/README.md#getinfo) - Get account profile information
- [`accountGetMeta`](docs/sdks/account/README.md#getmeta) - Get account metadata
- [`accountGetSession`](docs/sdks/account/README.md#getsession) - Get user session information
- [`accountGetSettings`](docs/sdks/account/README.md#getsettings) - Get account settings
- [`accountListApps`](docs/sdks/account/README.md#listapps) - List account owned apps
- [`accountListBadgeBookmarks`](docs/sdks/account/README.md#listbadgebookmarks) - List bookmarked badges
- [`accountListBadges`](docs/sdks/account/README.md#listbadges) - List account badges
- [`accountListFriends`](docs/sdks/account/README.md#listfriends) - List account friends
- [`accountListImages`](docs/sdks/account/README.md#listimages) - List uploaded images
- [`accountListInventorySets`](docs/sdks/account/README.md#listinventorysets) - List inventory sets
- [`accountListLeaderboardHistory`](docs/sdks/account/README.md#listleaderboardhistory) - Get leaderboard history
- [`accountListOwnedBadges`](docs/sdks/account/README.md#listownedbadges) - List owned badges
- [`accountLogin`](docs/sdks/account/README.md#login) - Login with Steam
- [`accountLogout`](docs/sdks/account/README.md#logout) - Logout from session
- [`accountQueueUpdate`](docs/sdks/account/README.md#queueupdate) - Queue account update
- [`accountReconnectConnection`](docs/sdks/account/README.md#reconnectconnection) - Reconnect OAuth connection
- [`accountRefreshInventory`](docs/sdks/account/README.md#refreshinventory) - Refresh inventory
- [`accountRefreshSession`](docs/sdks/account/README.md#refreshsession) - Refresh session token
- [`accountSendEmailVerification`](docs/sdks/account/README.md#sendemailverification) - Send email verification
- [`accountSubscribeEmail`](docs/sdks/account/README.md#subscribeemail) - Subscribe to email notifications
- [`accountUpdateConnection`](docs/sdks/account/README.md#updateconnection) - Update OAuth connection
- [`accountUpdateDeveloperApp`](docs/sdks/account/README.md#updatedeveloperapp) - Update developer application
- [`accountUpdateImages`](docs/sdks/account/README.md#updateimages) - Update account images
- [`accountUpdateRole`](docs/sdks/account/README.md#updaterole) - Update account role
- [`accountUpdateSettings`](docs/sdks/account/README.md#updatesettings) - Update account settings
- [`accountUpdateVanity`](docs/sdks/account/README.md#updatevanity) - Update account vanity URL
- [`accountUploadImages`](docs/sdks/account/README.md#uploadimages) - Upload images
- [`accountVerifyConnection`](docs/sdks/account/README.md#verifyconnection) - Verify OAuth connection
- [`accountVerifyEmail`](docs/sdks/account/README.md#verifyemail) - Verify email address
- [`adminGetAccount`](docs/sdks/admin/README.md#getaccount) - Get account for admin
- [`adminRemoveVanity`](docs/sdks/admin/README.md#removevanity) - Remove vanity URL
- [`adminUpdateResources`](docs/sdks/admin/README.md#updateresources) - Update account resources
- [`adminUpdateRoles`](docs/sdks/admin/README.md#updateroles) - Update account roles
- [`appsListBadges`](docs/sdks/apps/README.md#listbadges) - List app badges
- [`badgeSearch`](docs/sdks/badge/README.md#search) - Search badges
- [`badgesListTags`](docs/sdks/badges/README.md#listtags) - List badge tags
- [`badgesTag`](docs/sdks/badges/README.md#tag) - Tag a badge
- [`badgeSuggestTags`](docs/sdks/badge/README.md#suggesttags) - Suggest badge tag
- [`leaderboardGetAccount`](docs/sdks/leaderboard/README.md#getaccount) - Get account leaderboard
- [`leaderboardGetAccountsMeta`](docs/sdks/leaderboard/README.md#getaccountsmeta) - Get accounts leaderboard metadata
- [`leaderboardGetGroup`](docs/sdks/leaderboard/README.md#getgroup) - Get group leaderboard
- [`leaderboardGetGroupsMeta`](docs/sdks/leaderboard/README.md#getgroupsmeta) - Get groups leaderboard metadata
- [`leaderboardGetLowestRanks`](docs/sdks/leaderboard/README.md#getlowestranks) - Get lowest ranked accounts
- [`leaderboardPreviewAccountRank`](docs/sdks/leaderboard/README.md#previewaccountrank) - Preview account rank
- [`leaderboardsList`](docs/sdks/leaderboards/README.md#list) - List leaderboard badges
- [`locationGet`](docs/sdks/location/README.md#get) - List available locations
- [`staffList`](docs/sdks/staff/README.md#list) - List staff members
- [`statsGet`](docs/sdks/stats/README.md#get) - Get platform statistics

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
