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
  const result = await steamSets.account.accountV1ConnectionConnect({
    code: "123456",
    provider: "discord",
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

* [accountV1ConnectionConnect](docs/sdks/account/README.md#accountv1connectionconnect)
* [accountV1SessionCreate](docs/sdks/account/README.md#accountv1sessioncreate)
* [accountV1ConnectionDeleteConnection](docs/sdks/account/README.md#accountv1connectiondeleteconnection)
* [accountV1SettingsDeleteImages](docs/sdks/account/README.md#accountv1settingsdeleteimages)
* [accountV1SessionDelete](docs/sdks/account/README.md#accountv1sessiondelete)
* [accountV1GetApps](docs/sdks/account/README.md#accountv1getapps)
* [accountV1GetBadges](docs/sdks/account/README.md#accountv1getbadges)
* [accountV1GetDataPoints](docs/sdks/account/README.md#accountv1getdatapoints)
* [accountV1GetFriends](docs/sdks/account/README.md#accountv1getfriends)
* [accountV1GetInfo](docs/sdks/account/README.md#accountv1getinfo)
* [accountV1GetLeaderboardHistory](docs/sdks/account/README.md#accountv1getleaderboardhistory)
* [accountV1SessionGet](docs/sdks/account/README.md#accountv1sessionget)
* [accountV1SettingsGet](docs/sdks/account/README.md#accountv1settingsget)
* [accountV1GetStaff](docs/sdks/account/README.md#accountv1getstaff)
* [accountV1SessionLogin](docs/sdks/account/README.md#accountv1sessionlogin)
* [accountV1Queue](docs/sdks/account/README.md#accountv1queue)
* [accountV1SettingsSendEmailVerification](docs/sdks/account/README.md#accountv1settingssendemailverification)
* [accountV1ConnectionUpdateConnection](docs/sdks/account/README.md#accountv1connectionupdateconnection)
* [accountV1SettingsUpdateImage](docs/sdks/account/README.md#accountv1settingsupdateimage)
* [accountV1SettingsUpdate](docs/sdks/account/README.md#accountv1settingsupdate)
* [accountV1SettingsUploadImages](docs/sdks/account/README.md#accountv1settingsuploadimages)
* [accountV1ConnectionVerifyConnection](docs/sdks/account/README.md#accountv1connectionverifyconnection)
* [accountV1SettingsVerfyEmail](docs/sdks/account/README.md#accountv1settingsverfyemail)
* [leaderboardV1GetAccount](docs/sdks/account/README.md#leaderboardv1getaccount)
* [leaderboardV1GetBadges](docs/sdks/account/README.md#leaderboardv1getbadges)
* [leaderboardV1GetGroup](docs/sdks/account/README.md#leaderboardv1getgroup)

### [app](docs/sdks/app/README.md)

* [appV1Get](docs/sdks/app/README.md#appv1get)
* [appV1Queue](docs/sdks/app/README.md#appv1queue)

### [badge](docs/sdks/badge/README.md)

* [badgeV1Tags](docs/sdks/badge/README.md#badgev1tags)
* [badgeV1Tag](docs/sdks/badge/README.md#badgev1tag)

### [connection](docs/sdks/connection/README.md)

* [accountV1ConnectionConnect](docs/sdks/connection/README.md#accountv1connectionconnect)
* [accountV1ConnectionDeleteConnection](docs/sdks/connection/README.md#accountv1connectiondeleteconnection)
* [accountV1ConnectionUpdateConnection](docs/sdks/connection/README.md#accountv1connectionupdateconnection)
* [accountV1ConnectionVerifyConnection](docs/sdks/connection/README.md#accountv1connectionverifyconnection)

### [data](docs/sdks/data/README.md)

* [accountV1GetApps](docs/sdks/data/README.md#accountv1getapps)
* [accountV1GetBadges](docs/sdks/data/README.md#accountv1getbadges)
* [accountV1GetDataPoints](docs/sdks/data/README.md#accountv1getdatapoints)
* [accountV1GetFriends](docs/sdks/data/README.md#accountv1getfriends)
* [accountV1GetInfo](docs/sdks/data/README.md#accountv1getinfo)
* [accountV1GetLeaderboardHistory](docs/sdks/data/README.md#accountv1getleaderboardhistory)
* [accountV1GetStaff](docs/sdks/data/README.md#accountv1getstaff)

### [developer](docs/sdks/developer/README.md)

* [accountV1SettingsDeveloperAppCreate](docs/sdks/developer/README.md#accountv1settingsdeveloperappcreate)
* [accountV1SettingsDeveloperAppDelete](docs/sdks/developer/README.md#accountv1settingsdeveloperappdelete)
* [accountV1SettingsDeveloperAppUpdate](docs/sdks/developer/README.md#accountv1settingsdeveloperappupdate)

### [group](docs/sdks/group/README.md)

* [leaderboardV1GetGroup](docs/sdks/group/README.md#leaderboardv1getgroup)

### [leaderboard](docs/sdks/leaderboard/README.md)

* [leaderboardV1GetAccount](docs/sdks/leaderboard/README.md#leaderboardv1getaccount)
* [leaderboardV1GetBadges](docs/sdks/leaderboard/README.md#leaderboardv1getbadges)
* [leaderboardV1GetGroup](docs/sdks/leaderboard/README.md#leaderboardv1getgroup)

### [liveness](docs/sdks/liveness/README.md)

* [liveness](docs/sdks/liveness/README.md#liveness) - Liveness check

### [location](docs/sdks/location/README.md)

* [location](docs/sdks/location/README.md#location) - Get all of our available locations

### [public](docs/sdks/public/README.md)

* [accountV1GetApps](docs/sdks/public/README.md#accountv1getapps)
* [accountV1GetBadges](docs/sdks/public/README.md#accountv1getbadges)
* [accountV1GetDataPoints](docs/sdks/public/README.md#accountv1getdatapoints)
* [accountV1GetFriends](docs/sdks/public/README.md#accountv1getfriends)
* [accountV1GetInfo](docs/sdks/public/README.md#accountv1getinfo)
* [accountV1GetLeaderboardHistory](docs/sdks/public/README.md#accountv1getleaderboardhistory)
* [accountV1Queue](docs/sdks/public/README.md#accountv1queue)
* [appV1Queue](docs/sdks/public/README.md#appv1queue)

### [session](docs/sdks/session/README.md)

* [accountV1SessionCreate](docs/sdks/session/README.md#accountv1sessioncreate)
* [accountV1SessionDelete](docs/sdks/session/README.md#accountv1sessiondelete)
* [accountV1SessionGet](docs/sdks/session/README.md#accountv1sessionget)
* [accountV1SessionLogin](docs/sdks/session/README.md#accountv1sessionlogin)

### [settings](docs/sdks/settings/README.md)

* [accountV1SettingsDeleteImages](docs/sdks/settings/README.md#accountv1settingsdeleteimages)
* [accountV1SettingsGet](docs/sdks/settings/README.md#accountv1settingsget)
* [accountV1SettingsSendEmailVerification](docs/sdks/settings/README.md#accountv1settingssendemailverification)
* [accountV1SettingsUpdateImage](docs/sdks/settings/README.md#accountv1settingsupdateimage)
* [accountV1SettingsUpdate](docs/sdks/settings/README.md#accountv1settingsupdate)
* [accountV1SettingsUploadImages](docs/sdks/settings/README.md#accountv1settingsuploadimages)
* [accountV1SettingsVerfyEmail](docs/sdks/settings/README.md#accountv1settingsverfyemail)


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
  const result = await steamSets.account.accountV1ConnectionConnect({
    code: "123456",
    provider: "discord",
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
  const result = await steamSets.account.accountV1ConnectionConnect({
    code: "123456",
    provider: "discord",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `accountV1ConnectionConnect` method may throw the following errors:

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 422, 500            | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

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
    result = await steamSets.account.accountV1ConnectionConnect({
      code: "123456",
      provider: "discord",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
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
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.steamsets.com` | None |
| 1 | `http://localhost:8080` | None |

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  serverIdx: 1,
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.accountV1ConnectionConnect({
    code: "123456",
    provider: "discord",
  });

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  serverURL: "https://api.steamsets.com",
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.accountV1ConnectionConnect({
    code: "123456",
    provider: "discord",
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

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `token`     | http        | HTTP Bearer |

To authenticate with the API the `token` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.accountV1ConnectionConnect({
    code: "123456",
    provider: "discord",
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

- [`accountAccountV1ConnectionConnect`](docs/sdks/account/README.md#accountv1connectionconnect)
- [`accountAccountV1ConnectionDeleteConnection`](docs/sdks/account/README.md#accountv1connectiondeleteconnection)
- [`accountAccountV1ConnectionUpdateConnection`](docs/sdks/account/README.md#accountv1connectionupdateconnection)
- [`accountAccountV1ConnectionVerifyConnection`](docs/sdks/account/README.md#accountv1connectionverifyconnection)
- [`accountAccountV1GetApps`](docs/sdks/account/README.md#accountv1getapps)
- [`accountAccountV1GetBadges`](docs/sdks/account/README.md#accountv1getbadges)
- [`accountAccountV1GetDataPoints`](docs/sdks/account/README.md#accountv1getdatapoints)
- [`accountAccountV1GetFriends`](docs/sdks/account/README.md#accountv1getfriends)
- [`accountAccountV1GetInfo`](docs/sdks/account/README.md#accountv1getinfo)
- [`accountAccountV1GetLeaderboardHistory`](docs/sdks/account/README.md#accountv1getleaderboardhistory)
- [`accountAccountV1GetStaff`](docs/sdks/account/README.md#accountv1getstaff)
- [`accountAccountV1Queue`](docs/sdks/account/README.md#accountv1queue)
- [`accountAccountV1SessionCreate`](docs/sdks/account/README.md#accountv1sessioncreate)
- [`accountAccountV1SessionDelete`](docs/sdks/account/README.md#accountv1sessiondelete)
- [`accountAccountV1SessionGet`](docs/sdks/account/README.md#accountv1sessionget)
- [`accountAccountV1SessionLogin`](docs/sdks/account/README.md#accountv1sessionlogin)
- [`accountAccountV1SettingsDeleteImages`](docs/sdks/account/README.md#accountv1settingsdeleteimages)
- [`accountAccountV1SettingsGet`](docs/sdks/account/README.md#accountv1settingsget)
- [`accountAccountV1SettingsSendEmailVerification`](docs/sdks/account/README.md#accountv1settingssendemailverification)
- [`accountAccountV1SettingsUpdate`](docs/sdks/account/README.md#accountv1settingsupdate)
- [`accountAccountV1SettingsUpdateImage`](docs/sdks/account/README.md#accountv1settingsupdateimage)
- [`accountAccountV1SettingsUploadImages`](docs/sdks/account/README.md#accountv1settingsuploadimages)
- [`accountAccountV1SettingsVerfyEmail`](docs/sdks/account/README.md#accountv1settingsverfyemail)
- [`accountLeaderboardV1GetAccount`](docs/sdks/account/README.md#leaderboardv1getaccount)
- [`accountLeaderboardV1GetBadges`](docs/sdks/account/README.md#leaderboardv1getbadges)
- [`accountLeaderboardV1GetGroup`](docs/sdks/account/README.md#leaderboardv1getgroup)
- [`appAppV1Get`](docs/sdks/app/README.md#appv1get)
- [`appAppV1Queue`](docs/sdks/app/README.md#appv1queue)
- [`badgeBadgeV1Tag`](docs/sdks/badge/README.md#badgev1tag)
- [`badgeBadgeV1Tags`](docs/sdks/badge/README.md#badgev1tags)
- [`connectionAccountV1ConnectionConnect`](docs/sdks/connection/README.md#accountv1connectionconnect)
- [`connectionAccountV1ConnectionDeleteConnection`](docs/sdks/connection/README.md#accountv1connectiondeleteconnection)
- [`connectionAccountV1ConnectionUpdateConnection`](docs/sdks/connection/README.md#accountv1connectionupdateconnection)
- [`connectionAccountV1ConnectionVerifyConnection`](docs/sdks/connection/README.md#accountv1connectionverifyconnection)
- [`dataAccountV1GetApps`](docs/sdks/data/README.md#accountv1getapps)
- [`dataAccountV1GetBadges`](docs/sdks/data/README.md#accountv1getbadges)
- [`dataAccountV1GetDataPoints`](docs/sdks/data/README.md#accountv1getdatapoints)
- [`dataAccountV1GetFriends`](docs/sdks/data/README.md#accountv1getfriends)
- [`dataAccountV1GetInfo`](docs/sdks/data/README.md#accountv1getinfo)
- [`dataAccountV1GetLeaderboardHistory`](docs/sdks/data/README.md#accountv1getleaderboardhistory)
- [`dataAccountV1GetStaff`](docs/sdks/data/README.md#accountv1getstaff)
- [`developerAccountV1SettingsDeveloperAppCreate`](docs/sdks/developer/README.md#accountv1settingsdeveloperappcreate)
- [`developerAccountV1SettingsDeveloperAppDelete`](docs/sdks/developer/README.md#accountv1settingsdeveloperappdelete)
- [`developerAccountV1SettingsDeveloperAppUpdate`](docs/sdks/developer/README.md#accountv1settingsdeveloperappupdate)
- [`groupLeaderboardV1GetGroup`](docs/sdks/group/README.md#leaderboardv1getgroup)
- [`leaderboardLeaderboardV1GetAccount`](docs/sdks/leaderboard/README.md#leaderboardv1getaccount)
- [`leaderboardLeaderboardV1GetBadges`](docs/sdks/leaderboard/README.md#leaderboardv1getbadges)
- [`leaderboardLeaderboardV1GetGroup`](docs/sdks/leaderboard/README.md#leaderboardv1getgroup)
- [`livenessLiveness`](docs/sdks/liveness/README.md#liveness) - Liveness check
- [`locationLocation`](docs/sdks/location/README.md#location) - Get all of our available locations
- [`publicAccountV1GetApps`](docs/sdks/public/README.md#accountv1getapps)
- [`publicAccountV1GetBadges`](docs/sdks/public/README.md#accountv1getbadges)
- [`publicAccountV1GetDataPoints`](docs/sdks/public/README.md#accountv1getdatapoints)
- [`publicAccountV1GetFriends`](docs/sdks/public/README.md#accountv1getfriends)
- [`publicAccountV1GetInfo`](docs/sdks/public/README.md#accountv1getinfo)
- [`publicAccountV1GetLeaderboardHistory`](docs/sdks/public/README.md#accountv1getleaderboardhistory)
- [`publicAccountV1Queue`](docs/sdks/public/README.md#accountv1queue)
- [`publicAppV1Queue`](docs/sdks/public/README.md#appv1queue)
- [`sessionAccountV1SessionCreate`](docs/sdks/session/README.md#accountv1sessioncreate)
- [`sessionAccountV1SessionDelete`](docs/sdks/session/README.md#accountv1sessiondelete)
- [`sessionAccountV1SessionGet`](docs/sdks/session/README.md#accountv1sessionget)
- [`sessionAccountV1SessionLogin`](docs/sdks/session/README.md#accountv1sessionlogin)
- [`settingsAccountV1SettingsDeleteImages`](docs/sdks/settings/README.md#accountv1settingsdeleteimages)
- [`settingsAccountV1SettingsGet`](docs/sdks/settings/README.md#accountv1settingsget)
- [`settingsAccountV1SettingsSendEmailVerification`](docs/sdks/settings/README.md#accountv1settingssendemailverification)
- [`settingsAccountV1SettingsUpdate`](docs/sdks/settings/README.md#accountv1settingsupdate)
- [`settingsAccountV1SettingsUpdateImage`](docs/sdks/settings/README.md#accountv1settingsupdateimage)
- [`settingsAccountV1SettingsUploadImages`](docs/sdks/settings/README.md#accountv1settingsuploadimages)
- [`settingsAccountV1SettingsVerfyEmail`](docs/sdks/settings/README.md#accountv1settingsverfyemail)

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

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
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
