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

  // Handle the result
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
* [connect](docs/sdks/account/README.md#connect)
* [createDeveloperApp](docs/sdks/account/README.md#createdeveloperapp)
* [createSession](docs/sdks/account/README.md#createsession)
* [deleteConnection](docs/sdks/account/README.md#deleteconnection)
* [deleteImages](docs/sdks/account/README.md#deleteimages)
* [emailSendVerification](docs/sdks/account/README.md#emailsendverification)
* [emailSubscription](docs/sdks/account/README.md#emailsubscription)
* [emailVerify](docs/sdks/account/README.md#emailverify)
* [getApps](docs/sdks/account/README.md#getapps)
* [getBadgeBookmarks](docs/sdks/account/README.md#getbadgebookmarks)
* [getBadges](docs/sdks/account/README.md#getbadges)
* [getDataPoints](docs/sdks/account/README.md#getdatapoints)
* [getFriends](docs/sdks/account/README.md#getfriends)
* [getImages](docs/sdks/account/README.md#getimages)
* [getInfo](docs/sdks/account/README.md#getinfo)
* [getLeaderboardHistory](docs/sdks/account/README.md#getleaderboardhistory)
* [getMeta](docs/sdks/account/README.md#getmeta)
* [getOwnedBadges](docs/sdks/account/README.md#getownedbadges)
* [getSession](docs/sdks/account/README.md#getsession)
* [getSettings](docs/sdks/account/README.md#getsettings)
* [getStaff](docs/sdks/account/README.md#getstaff)
* [login](docs/sdks/account/README.md#login)
* [logout](docs/sdks/account/README.md#logout)
* [queue](docs/sdks/account/README.md#queue)
* [reconnect](docs/sdks/account/README.md#reconnect)
* [refreshSession](docs/sdks/account/README.md#refreshsession)
* [updateImages](docs/sdks/account/README.md#updateimages)
* [updateSettings](docs/sdks/account/README.md#updatesettings)
* [uploadImages](docs/sdks/account/README.md#uploadimages)
* [verifyConnection](docs/sdks/account/README.md#verifyconnection)

#### [account.connection](docs/sdks/connection/README.md)

* [update](docs/sdks/connection/README.md#update)

#### [account.developerApps](docs/sdks/developerapps/README.md)

* [delete](docs/sdks/developerapps/README.md#delete)
* [update](docs/sdks/developerapps/README.md#update)

#### [account.roles](docs/sdks/roles/README.md)

* [update](docs/sdks/roles/README.md#update)

#### [account.session](docs/sdks/session/README.md)

* [delete](docs/sdks/session/README.md#delete)

### [admin](docs/sdks/admin/README.md)

* [getAccount](docs/sdks/admin/README.md#getaccount)
* [removeVanity](docs/sdks/admin/README.md#removevanity)
* [updateEvent](docs/sdks/admin/README.md#updateevent)
* [updateResources](docs/sdks/admin/README.md#updateresources)
* [updateRoles](docs/sdks/admin/README.md#updateroles)

#### [admin.events](docs/sdks/events/README.md)

* [get](docs/sdks/events/README.md#get)

### [app](docs/sdks/app/README.md)

* [listBadges](docs/sdks/app/README.md#listbadges)

### [badge](docs/sdks/badge/README.md)

* [getTags](docs/sdks/badge/README.md#gettags)
* [search](docs/sdks/badge/README.md#search)
* [suggest](docs/sdks/badge/README.md#suggest)
* [suggestTags](docs/sdks/badge/README.md#suggesttags)
* [tag](docs/sdks/badge/README.md#tag)

### [leaderboard](docs/sdks/leaderboard/README.md)

* [getAccount](docs/sdks/leaderboard/README.md#getaccount)
* [getAccountMeta](docs/sdks/leaderboard/README.md#getaccountmeta)
* [getGroup](docs/sdks/leaderboard/README.md#getgroup)

#### [leaderboard.badges](docs/sdks/badges/README.md)

* [getList](docs/sdks/badges/README.md#getlist)

### [liveness](docs/sdks/liveness/README.md)

* [get](docs/sdks/liveness/README.md#get) - Liveness check

### [location](docs/sdks/location/README.md)

* [get](docs/sdks/location/README.md#get)

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

  // Handle the result
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `bookmarkBadge` method may throw the following errors:

| Error Type        | Status Code   | Content Type             |
| ----------------- | ------------- | ------------------------ |
| errors.ErrorModel | 403, 404, 422 | application/problem+json |
| errors.ErrorModel | 500           | application/problem+json |
| errors.SDKError   | 4XX, 5XX      | \*/\*                    |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { SteamSets } from "@steamsets/client-ts";
import {
  ErrorModel,
  SDKValidationError,
} from "@steamsets/client-ts/models/errors";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  let result;
  try {
    result = await steamSets.account.bookmarkBadge({
      badgeId: "bdg_123",
      bookmark: true,
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorModel): {
        // Handle err.data$: ErrorModelData
        console.error(err);
        return;
      }
      case (err instanceof ErrorModel): {
        // Handle err.data$: ErrorModelData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
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

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  serverURL: "https://api.steamsets.com",
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.bookmarkBadge({
    badgeId: "bdg_123",
    bookmark: true,
  });

  // Handle the result
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

  // Handle the result
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
- [`accountConnect`](docs/sdks/account/README.md#connect)
- [`accountConnectionUpdate`](docs/sdks/connection/README.md#update)
- [`accountCreateDeveloperApp`](docs/sdks/account/README.md#createdeveloperapp)
- [`accountCreateSession`](docs/sdks/account/README.md#createsession)
- [`accountDeleteConnection`](docs/sdks/account/README.md#deleteconnection)
- [`accountDeleteImages`](docs/sdks/account/README.md#deleteimages)
- [`accountDeveloperAppsDelete`](docs/sdks/developerapps/README.md#delete)
- [`accountDeveloperAppsUpdate`](docs/sdks/developerapps/README.md#update)
- [`accountEmailSendVerification`](docs/sdks/account/README.md#emailsendverification)
- [`accountEmailSubscription`](docs/sdks/account/README.md#emailsubscription)
- [`accountEmailVerify`](docs/sdks/account/README.md#emailverify)
- [`accountGetApps`](docs/sdks/account/README.md#getapps)
- [`accountGetBadgeBookmarks`](docs/sdks/account/README.md#getbadgebookmarks)
- [`accountGetBadges`](docs/sdks/account/README.md#getbadges)
- [`accountGetDataPoints`](docs/sdks/account/README.md#getdatapoints)
- [`accountGetFriends`](docs/sdks/account/README.md#getfriends)
- [`accountGetImages`](docs/sdks/account/README.md#getimages)
- [`accountGetInfo`](docs/sdks/account/README.md#getinfo)
- [`accountGetLeaderboardHistory`](docs/sdks/account/README.md#getleaderboardhistory)
- [`accountGetMeta`](docs/sdks/account/README.md#getmeta)
- [`accountGetOwnedBadges`](docs/sdks/account/README.md#getownedbadges)
- [`accountGetSession`](docs/sdks/account/README.md#getsession)
- [`accountGetSettings`](docs/sdks/account/README.md#getsettings)
- [`accountGetStaff`](docs/sdks/account/README.md#getstaff)
- [`accountLogin`](docs/sdks/account/README.md#login)
- [`accountLogout`](docs/sdks/account/README.md#logout)
- [`accountQueue`](docs/sdks/account/README.md#queue)
- [`accountReconnect`](docs/sdks/account/README.md#reconnect)
- [`accountRefreshSession`](docs/sdks/account/README.md#refreshsession)
- [`accountRolesUpdate`](docs/sdks/roles/README.md#update)
- [`accountSessionDelete`](docs/sdks/session/README.md#delete)
- [`accountUpdateImages`](docs/sdks/account/README.md#updateimages)
- [`accountUpdateSettings`](docs/sdks/account/README.md#updatesettings)
- [`accountUploadImages`](docs/sdks/account/README.md#uploadimages)
- [`accountVerifyConnection`](docs/sdks/account/README.md#verifyconnection)
- [`adminEventsGet`](docs/sdks/events/README.md#get)
- [`adminGetAccount`](docs/sdks/admin/README.md#getaccount)
- [`adminRemoveVanity`](docs/sdks/admin/README.md#removevanity)
- [`adminUpdateEvent`](docs/sdks/admin/README.md#updateevent)
- [`adminUpdateResources`](docs/sdks/admin/README.md#updateresources)
- [`adminUpdateRoles`](docs/sdks/admin/README.md#updateroles)
- [`appListBadges`](docs/sdks/app/README.md#listbadges)
- [`badgeGetTags`](docs/sdks/badge/README.md#gettags)
- [`badgeSearch`](docs/sdks/badge/README.md#search)
- [`badgeSuggest`](docs/sdks/badge/README.md#suggest)
- [`badgeSuggestTags`](docs/sdks/badge/README.md#suggesttags)
- [`badgeTag`](docs/sdks/badge/README.md#tag)
- [`leaderboardBadgesGetList`](docs/sdks/badges/README.md#getlist)
- [`leaderboardGetAccount`](docs/sdks/leaderboard/README.md#getaccount)
- [`leaderboardGetAccountMeta`](docs/sdks/leaderboard/README.md#getaccountmeta)
- [`leaderboardGetGroup`](docs/sdks/leaderboard/README.md#getgroup)
- [`livenessGet`](docs/sdks/liveness/README.md#get) - Liveness check
- [`locationGet`](docs/sdks/location/README.md#get)
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
