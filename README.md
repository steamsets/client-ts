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
  const result = await steamSets.badge.accountV1BookmarkBadge({
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

* [deleteImages](docs/sdks/account/README.md#deleteimages)
* [getApps](docs/sdks/account/README.md#getapps)
* [accountV1GetBadgeBookmarks](docs/sdks/account/README.md#accountv1getbadgebookmarks)
* [getBadges](docs/sdks/account/README.md#getbadges)
* [getDataPoints](docs/sdks/account/README.md#getdatapoints)
* [getFriends](docs/sdks/account/README.md#getfriends)
* [accountV1ImagesGet](docs/sdks/account/README.md#accountv1imagesget)
* [getInfo](docs/sdks/account/README.md#getinfo)
* [getLeaderboardHistory](docs/sdks/account/README.md#getleaderboardhistory)
* [accountV1GetOwnedBadges](docs/sdks/account/README.md#accountv1getownedbadges)
* [getStaff](docs/sdks/account/README.md#getstaff)
* [sendEmailVerification](docs/sdks/account/README.md#sendemailverification)
* [accountV1ImagesUpdate](docs/sdks/account/README.md#accountv1imagesupdate)
* [uploadImages](docs/sdks/account/README.md#uploadimages)
* [verifyEmail](docs/sdks/account/README.md#verifyemail)
* [statsV1StatsGet](docs/sdks/account/README.md#statsv1statsget)

### [accounts](docs/sdks/accounts/README.md)

* [queue](docs/sdks/accounts/README.md#queue)

### [admin](docs/sdks/admin/README.md)

* [getAccount](docs/sdks/admin/README.md#getaccount)
* [adminV1GetEvents](docs/sdks/admin/README.md#adminv1getevents)
* [adminV1UpdateEvent](docs/sdks/admin/README.md#adminv1updateevent)
* [adminV1UpdateResources](docs/sdks/admin/README.md#adminv1updateresources)
* [adminV1UpdateRoles](docs/sdks/admin/README.md#adminv1updateroles)

### [badge](docs/sdks/badge/README.md)

* [accountV1BookmarkBadge](docs/sdks/badge/README.md#accountv1bookmarkbadge)
* [accountV1GetBadgeBookmarks](docs/sdks/badge/README.md#accountv1getbadgebookmarks)
* [accountV1GetOwnedBadges](docs/sdks/badge/README.md#accountv1getownedbadges)
* [getTags](docs/sdks/badge/README.md#gettags)
* [badgeV1Search](docs/sdks/badge/README.md#badgev1search)

### [badges](docs/sdks/badges/README.md)

* [tag](docs/sdks/badges/README.md#tag)

### [connection](docs/sdks/connection/README.md)

* [delete](docs/sdks/connection/README.md#delete)
* [update](docs/sdks/connection/README.md#update)
* [verify](docs/sdks/connection/README.md#verify)

### [connections](docs/sdks/connections/README.md)

* [connect](docs/sdks/connections/README.md#connect)

### [data](docs/sdks/data/README.md)

* [getApps](docs/sdks/data/README.md#getapps)
* [getBadges](docs/sdks/data/README.md#getbadges)
* [getDataPoints](docs/sdks/data/README.md#getdatapoints)
* [getFriends](docs/sdks/data/README.md#getfriends)
* [getInfo](docs/sdks/data/README.md#getinfo)
* [getLeaderboardHistory](docs/sdks/data/README.md#getleaderboardhistory)
* [getStaff](docs/sdks/data/README.md#getstaff)
* [statsV1StatsGet](docs/sdks/data/README.md#statsv1statsget)

### [developer](docs/sdks/developer/README.md)

* [createDeveloperApp](docs/sdks/developer/README.md#createdeveloperapp)
* [deleteDeveloperApp](docs/sdks/developer/README.md#deletedeveloperapp)
* [updateApp](docs/sdks/developer/README.md#updateapp)

### [images](docs/sdks/images/README.md)

* [deleteImages](docs/sdks/images/README.md#deleteimages)
* [accountV1ImagesGet](docs/sdks/images/README.md#accountv1imagesget)
* [accountV1ImagesUpdate](docs/sdks/images/README.md#accountv1imagesupdate)
* [uploadImages](docs/sdks/images/README.md#uploadimages)

### [leaderboard](docs/sdks/leaderboard/README.md)

* [getAccount](docs/sdks/leaderboard/README.md#getaccount)
* [getBadges](docs/sdks/leaderboard/README.md#getbadges)
* [getGroup](docs/sdks/leaderboard/README.md#getgroup)

### [liveness](docs/sdks/liveness/README.md)

* [check](docs/sdks/liveness/README.md#check) - Liveness check

### [locations](docs/sdks/locations/README.md)

* [get](docs/sdks/locations/README.md#get)

### [public](docs/sdks/public/README.md)

* [getApps](docs/sdks/public/README.md#getapps)
* [getBadges](docs/sdks/public/README.md#getbadges)
* [getDataPoints](docs/sdks/public/README.md#getdatapoints)
* [getFriends](docs/sdks/public/README.md#getfriends)
* [getInfo](docs/sdks/public/README.md#getinfo)
* [getLeaderboardHistory](docs/sdks/public/README.md#getleaderboardhistory)

### [session](docs/sdks/session/README.md)

* [create](docs/sdks/session/README.md#create)
* [login](docs/sdks/session/README.md#login)

### [sessions](docs/sdks/sessions/README.md)

* [delete](docs/sdks/sessions/README.md#delete)
* [get](docs/sdks/sessions/README.md#get)

### [settings](docs/sdks/settings/README.md)

* [get](docs/sdks/settings/README.md#get)
* [sendEmailVerification](docs/sdks/settings/README.md#sendemailverification)
* [update](docs/sdks/settings/README.md#update)
* [verifyEmail](docs/sdks/settings/README.md#verifyemail)


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
  const result = await steamSets.badge.accountV1BookmarkBadge({
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
  const result = await steamSets.badge.accountV1BookmarkBadge({
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

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `accountV1BookmarkBadge` method may throw the following errors:

| Error Type        | Status Code        | Content Type             |
| ----------------- | ------------------ | ------------------------ |
| errors.ErrorModel | 403, 404, 422, 500 | application/problem+json |
| errors.SDKError   | 4XX, 5XX           | \*/\*                    |

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
    result = await steamSets.badge.accountV1BookmarkBadge({
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

| #   | Server                      |
| --- | --------------------------- |
| 0   | `https://api.steamsets.com` |
| 1   | `http://localhost:7388`     |

#### Example

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  serverIdx: 1,
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.badge.accountV1BookmarkBadge({
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
  const result = await steamSets.badge.accountV1BookmarkBadge({
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
  const result = await steamSets.badge.accountV1BookmarkBadge({
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

- [`accountAccountV1GetBadgeBookmarks`](docs/sdks/account/README.md#accountv1getbadgebookmarks)
- [`accountAccountV1GetOwnedBadges`](docs/sdks/account/README.md#accountv1getownedbadges)
- [`accountAccountV1ImagesGet`](docs/sdks/account/README.md#accountv1imagesget)
- [`accountAccountV1ImagesUpdate`](docs/sdks/account/README.md#accountv1imagesupdate)
- [`accountDeleteImages`](docs/sdks/account/README.md#deleteimages)
- [`accountGetApps`](docs/sdks/account/README.md#getapps)
- [`accountGetBadges`](docs/sdks/account/README.md#getbadges)
- [`accountGetDataPoints`](docs/sdks/account/README.md#getdatapoints)
- [`accountGetFriends`](docs/sdks/account/README.md#getfriends)
- [`accountGetInfo`](docs/sdks/account/README.md#getinfo)
- [`accountGetLeaderboardHistory`](docs/sdks/account/README.md#getleaderboardhistory)
- [`accountGetStaff`](docs/sdks/account/README.md#getstaff)
- [`accountSendEmailVerification`](docs/sdks/account/README.md#sendemailverification)
- [`accountsQueue`](docs/sdks/accounts/README.md#queue)
- [`accountStatsV1StatsGet`](docs/sdks/account/README.md#statsv1statsget)
- [`accountUploadImages`](docs/sdks/account/README.md#uploadimages)
- [`accountVerifyEmail`](docs/sdks/account/README.md#verifyemail)
- [`adminAdminV1GetEvents`](docs/sdks/admin/README.md#adminv1getevents)
- [`adminAdminV1UpdateEvent`](docs/sdks/admin/README.md#adminv1updateevent)
- [`adminAdminV1UpdateResources`](docs/sdks/admin/README.md#adminv1updateresources)
- [`adminAdminV1UpdateRoles`](docs/sdks/admin/README.md#adminv1updateroles)
- [`adminGetAccount`](docs/sdks/admin/README.md#getaccount)
- [`badgeAccountV1BookmarkBadge`](docs/sdks/badge/README.md#accountv1bookmarkbadge)
- [`badgeAccountV1GetBadgeBookmarks`](docs/sdks/badge/README.md#accountv1getbadgebookmarks)
- [`badgeAccountV1GetOwnedBadges`](docs/sdks/badge/README.md#accountv1getownedbadges)
- [`badgeBadgeV1Search`](docs/sdks/badge/README.md#badgev1search)
- [`badgeGetTags`](docs/sdks/badge/README.md#gettags)
- [`badgesTag`](docs/sdks/badges/README.md#tag)
- [`connectionDelete`](docs/sdks/connection/README.md#delete)
- [`connectionsConnect`](docs/sdks/connections/README.md#connect)
- [`connectionUpdate`](docs/sdks/connection/README.md#update)
- [`connectionVerify`](docs/sdks/connection/README.md#verify)
- [`dataGetApps`](docs/sdks/data/README.md#getapps)
- [`dataGetBadges`](docs/sdks/data/README.md#getbadges)
- [`dataGetDataPoints`](docs/sdks/data/README.md#getdatapoints)
- [`dataGetFriends`](docs/sdks/data/README.md#getfriends)
- [`dataGetInfo`](docs/sdks/data/README.md#getinfo)
- [`dataGetLeaderboardHistory`](docs/sdks/data/README.md#getleaderboardhistory)
- [`dataGetStaff`](docs/sdks/data/README.md#getstaff)
- [`dataStatsV1StatsGet`](docs/sdks/data/README.md#statsv1statsget)
- [`developerCreateDeveloperApp`](docs/sdks/developer/README.md#createdeveloperapp)
- [`developerDeleteDeveloperApp`](docs/sdks/developer/README.md#deletedeveloperapp)
- [`developerUpdateApp`](docs/sdks/developer/README.md#updateapp)
- [`imagesAccountV1ImagesGet`](docs/sdks/images/README.md#accountv1imagesget)
- [`imagesAccountV1ImagesUpdate`](docs/sdks/images/README.md#accountv1imagesupdate)
- [`imagesDeleteImages`](docs/sdks/images/README.md#deleteimages)
- [`imagesUploadImages`](docs/sdks/images/README.md#uploadimages)
- [`leaderboardGetAccount`](docs/sdks/leaderboard/README.md#getaccount)
- [`leaderboardGetBadges`](docs/sdks/leaderboard/README.md#getbadges)
- [`leaderboardGetGroup`](docs/sdks/leaderboard/README.md#getgroup)
- [`livenessCheck`](docs/sdks/liveness/README.md#check) - Liveness check
- [`locationsGet`](docs/sdks/locations/README.md#get)
- [`publicGetApps`](docs/sdks/public/README.md#getapps)
- [`publicGetBadges`](docs/sdks/public/README.md#getbadges)
- [`publicGetDataPoints`](docs/sdks/public/README.md#getdatapoints)
- [`publicGetFriends`](docs/sdks/public/README.md#getfriends)
- [`publicGetInfo`](docs/sdks/public/README.md#getinfo)
- [`publicGetLeaderboardHistory`](docs/sdks/public/README.md#getleaderboardhistory)
- [`sessionCreate`](docs/sdks/session/README.md#create)
- [`sessionLogin`](docs/sdks/session/README.md#login)
- [`sessionsDelete`](docs/sdks/sessions/README.md#delete)
- [`sessionsGet`](docs/sdks/sessions/README.md#get)
- [`settingsGet`](docs/sdks/settings/README.md#get)
- [`settingsSendEmailVerification`](docs/sdks/settings/README.md#sendemailverification)
- [`settingsUpdate`](docs/sdks/settings/README.md#update)
- [`settingsVerifyEmail`](docs/sdks/settings/README.md#verifyemail)

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
