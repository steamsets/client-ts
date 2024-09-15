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
  session: "<YOUR_BEARER_TOKEN_HERE>",
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

* [accountV1ConnectionConnect](docs/sdks/account/README.md#accountv1connectionconnect) - Connect a new Social Provider
* [accountV1SessionCreate](docs/sdks/account/README.md#accountv1sessioncreate) - Create a new session for non logged in users
* [accountV1ConnectionDeleteConnection](docs/sdks/account/README.md#accountv1connectiondeleteconnection) - Remove a connection
* [accountV1SettingsDeleteImages](docs/sdks/account/README.md#accountv1settingsdeleteimages) - Delete mulitple imagest
* [accountV1SessionDelete](docs/sdks/account/README.md#accountv1sessiondelete) - Deletes a session, can also be used to logout
* [accountV1GetApps](docs/sdks/account/README.md#accountv1getapps) - Get Account Apps
* [accountV1GetBadges](docs/sdks/account/README.md#accountv1getbadges) - Get Account Badges
* [accountV1GetDataPoints](docs/sdks/account/README.md#accountv1getdatapoints) - Get Account DataPoints
* [accountV1GetFriends](docs/sdks/account/README.md#accountv1getfriends) - Get Account Friends
* [accountV1GetInfo](docs/sdks/account/README.md#accountv1getinfo) - Get Account Info
* [accountV1GetLeaderboardHistory](docs/sdks/account/README.md#accountv1getleaderboardhistory) - Get Account Leaderboard History
* [accountV1SessionGet](docs/sdks/account/README.md#accountv1sessionget) - Gets all session data
* [accountV1SettingsGet](docs/sdks/account/README.md#accountv1settingsget) - Gets all settings for the account
* [accountV1GetStaff](docs/sdks/account/README.md#accountv1getstaff) - Get Staff Members and their info
* [accountV1SessionLogin](docs/sdks/account/README.md#accountv1sessionlogin) - Logs a user in and creates a new session
* [accountV1SettingsSendEmailVerification](docs/sdks/account/README.md#accountv1settingssendemailverification) - Resend the verification code for an email
* [accountV1ConnectionUpdateConnection](docs/sdks/account/README.md#accountv1connectionupdateconnection) - Make a connection visible/invisible
* [accountV1SettingsUpdateImage](docs/sdks/account/README.md#accountv1settingsupdateimage) - Update one of the uploaded images
* [accountV1SettingsUpdate](docs/sdks/account/README.md#accountv1settingsupdate) - Update settings for the logged in account
* [accountV1SettingsUploadImages](docs/sdks/account/README.md#accountv1settingsuploadimages) - Multi Upload Endpoint for images
* [accountV1ConnectionVerifyConnection](docs/sdks/account/README.md#accountv1connectionverifyconnection) - Verify a domain connection only atm
* [accountV1SettingsVerfyEmail](docs/sdks/account/README.md#accountv1settingsverfyemail) - Verify the email by passing in the code the user should've gotten

### [app](docs/sdks/app/README.md)

* [appV1Get](docs/sdks/app/README.md#appv1get) - Get details about an app
* [accountV1Queue](docs/sdks/app/README.md#accountv1queue) - Queue a app for processing

### [connection](docs/sdks/connection/README.md)

* [accountV1ConnectionConnect](docs/sdks/connection/README.md#accountv1connectionconnect) - Connect a new Social Provider
* [accountV1ConnectionDeleteConnection](docs/sdks/connection/README.md#accountv1connectiondeleteconnection) - Remove a connection
* [accountV1ConnectionUpdateConnection](docs/sdks/connection/README.md#accountv1connectionupdateconnection) - Make a connection visible/invisible
* [accountV1ConnectionVerifyConnection](docs/sdks/connection/README.md#accountv1connectionverifyconnection) - Verify a domain connection only atm

### [data](docs/sdks/data/README.md)

* [accountV1GetApps](docs/sdks/data/README.md#accountv1getapps) - Get Account Apps
* [accountV1GetBadges](docs/sdks/data/README.md#accountv1getbadges) - Get Account Badges
* [accountV1GetDataPoints](docs/sdks/data/README.md#accountv1getdatapoints) - Get Account DataPoints
* [accountV1GetFriends](docs/sdks/data/README.md#accountv1getfriends) - Get Account Friends
* [accountV1GetInfo](docs/sdks/data/README.md#accountv1getinfo) - Get Account Info
* [accountV1GetLeaderboardHistory](docs/sdks/data/README.md#accountv1getleaderboardhistory) - Get Account Leaderboard History
* [accountV1GetStaff](docs/sdks/data/README.md#accountv1getstaff) - Get Staff Members and their info
* [accountV1Queue](docs/sdks/data/README.md#accountv1queue) - Queue a app for processing

### [liveness](docs/sdks/liveness/README.md)

* [liveness](docs/sdks/liveness/README.md#liveness) - Liveness check

### [location](docs/sdks/location/README.md)

* [location](docs/sdks/location/README.md#location) - Location List

### [public](docs/sdks/public/README.md)

* [accountV1GetApps](docs/sdks/public/README.md#accountv1getapps) - Get Account Apps
* [accountV1GetBadges](docs/sdks/public/README.md#accountv1getbadges) - Get Account Badges
* [accountV1GetDataPoints](docs/sdks/public/README.md#accountv1getdatapoints) - Get Account DataPoints
* [accountV1GetFriends](docs/sdks/public/README.md#accountv1getfriends) - Get Account Friends
* [accountV1GetInfo](docs/sdks/public/README.md#accountv1getinfo) - Get Account Info
* [accountV1GetLeaderboardHistory](docs/sdks/public/README.md#accountv1getleaderboardhistory) - Get Account Leaderboard History
* [accountV1Queue](docs/sdks/public/README.md#accountv1queue) - Queue a app for processing

### [session](docs/sdks/session/README.md)

* [accountV1SessionCreate](docs/sdks/session/README.md#accountv1sessioncreate) - Create a new session for non logged in users
* [accountV1SessionDelete](docs/sdks/session/README.md#accountv1sessiondelete) - Deletes a session, can also be used to logout
* [accountV1SessionGet](docs/sdks/session/README.md#accountv1sessionget) - Gets all session data
* [accountV1SessionLogin](docs/sdks/session/README.md#accountv1sessionlogin) - Logs a user in and creates a new session

### [settings](docs/sdks/settings/README.md)

* [accountV1SettingsDeleteImages](docs/sdks/settings/README.md#accountv1settingsdeleteimages) - Delete mulitple imagest
* [accountV1SettingsGet](docs/sdks/settings/README.md#accountv1settingsget) - Gets all settings for the account
* [accountV1SettingsSendEmailVerification](docs/sdks/settings/README.md#accountv1settingssendemailverification) - Resend the verification code for an email
* [accountV1SettingsUpdateImage](docs/sdks/settings/README.md#accountv1settingsupdateimage) - Update one of the uploaded images
* [accountV1SettingsUpdate](docs/sdks/settings/README.md#accountv1settingsupdate) - Update settings for the logged in account
* [accountV1SettingsUploadImages](docs/sdks/settings/README.md#accountv1settingsuploadimages) - Multi Upload Endpoint for images
* [accountV1SettingsVerfyEmail](docs/sdks/settings/README.md#accountv1settingsverfyemail) - Verify the email by passing in the code the user should've gotten


</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  session: "<YOUR_BEARER_TOKEN_HERE>",
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
  session: "<YOUR_BEARER_TOKEN_HERE>",
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

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object             | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400,422,500              | application/problem+json |
| errors.SDKError          | 4xx-5xx                  | */*                      |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { SteamSets } from "@steamsets/client-ts";
import {
  ErrorModel,
  SDKValidationError,
} from "@steamsets/client-ts/models/errors";

const steamSets = new SteamSets({
  session: "<YOUR_BEARER_TOKEN_HERE>",
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
  session: "<YOUR_BEARER_TOKEN_HERE>",
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
  session: "<YOUR_BEARER_TOKEN_HERE>",
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
| `session`   | http        | HTTP Bearer |

To authenticate with the API the `session` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  session: "<YOUR_BEARER_TOKEN_HERE>",
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

- [accountAccountV1ConnectionConnect](docs/sdks/account/README.md#accountv1connectionconnect)
- [accountAccountV1ConnectionDeleteConnection](docs/sdks/account/README.md#accountv1connectiondeleteconnection)
- [accountAccountV1ConnectionUpdateConnection](docs/sdks/account/README.md#accountv1connectionupdateconnection)
- [accountAccountV1ConnectionVerifyConnection](docs/sdks/account/README.md#accountv1connectionverifyconnection)
- [accountAccountV1GetApps](docs/sdks/account/README.md#accountv1getapps)
- [accountAccountV1GetBadges](docs/sdks/account/README.md#accountv1getbadges)
- [accountAccountV1GetDataPoints](docs/sdks/account/README.md#accountv1getdatapoints)
- [accountAccountV1GetFriends](docs/sdks/account/README.md#accountv1getfriends)
- [accountAccountV1GetInfo](docs/sdks/account/README.md#accountv1getinfo)
- [accountAccountV1GetLeaderboardHistory](docs/sdks/account/README.md#accountv1getleaderboardhistory)
- [accountAccountV1GetStaff](docs/sdks/account/README.md#accountv1getstaff)
- [accountAccountV1SessionCreate](docs/sdks/account/README.md#accountv1sessioncreate)
- [accountAccountV1SessionDelete](docs/sdks/account/README.md#accountv1sessiondelete)
- [accountAccountV1SessionGet](docs/sdks/account/README.md#accountv1sessionget)
- [accountAccountV1SessionLogin](docs/sdks/account/README.md#accountv1sessionlogin)
- [accountAccountV1SettingsDeleteImages](docs/sdks/account/README.md#accountv1settingsdeleteimages)
- [accountAccountV1SettingsGet](docs/sdks/account/README.md#accountv1settingsget)
- [accountAccountV1SettingsSendEmailVerification](docs/sdks/account/README.md#accountv1settingssendemailverification)
- [accountAccountV1SettingsUpdateImage](docs/sdks/account/README.md#accountv1settingsupdateimage)
- [accountAccountV1SettingsUpdate](docs/sdks/account/README.md#accountv1settingsupdate)
- [accountAccountV1SettingsUploadImages](docs/sdks/account/README.md#accountv1settingsuploadimages)
- [accountAccountV1SettingsVerfyEmail](docs/sdks/account/README.md#accountv1settingsverfyemail)
- [appAccountV1Queue](docs/sdks/app/README.md#accountv1queue)
- [appAppV1Get](docs/sdks/app/README.md#appv1get)
- [connectionAccountV1ConnectionConnect](docs/sdks/connection/README.md#accountv1connectionconnect)
- [connectionAccountV1ConnectionDeleteConnection](docs/sdks/connection/README.md#accountv1connectiondeleteconnection)
- [connectionAccountV1ConnectionUpdateConnection](docs/sdks/connection/README.md#accountv1connectionupdateconnection)
- [connectionAccountV1ConnectionVerifyConnection](docs/sdks/connection/README.md#accountv1connectionverifyconnection)
- [dataAccountV1GetApps](docs/sdks/data/README.md#accountv1getapps)
- [dataAccountV1GetBadges](docs/sdks/data/README.md#accountv1getbadges)
- [dataAccountV1GetDataPoints](docs/sdks/data/README.md#accountv1getdatapoints)
- [dataAccountV1GetFriends](docs/sdks/data/README.md#accountv1getfriends)
- [dataAccountV1GetInfo](docs/sdks/data/README.md#accountv1getinfo)
- [dataAccountV1GetLeaderboardHistory](docs/sdks/data/README.md#accountv1getleaderboardhistory)
- [dataAccountV1GetStaff](docs/sdks/data/README.md#accountv1getstaff)
- [dataAccountV1Queue](docs/sdks/data/README.md#accountv1queue)
- [livenessLiveness](docs/sdks/liveness/README.md#liveness)
- [locationLocation](docs/sdks/location/README.md#location)
- [publicAccountV1GetApps](docs/sdks/public/README.md#accountv1getapps)
- [publicAccountV1GetBadges](docs/sdks/public/README.md#accountv1getbadges)
- [publicAccountV1GetDataPoints](docs/sdks/public/README.md#accountv1getdatapoints)
- [publicAccountV1GetFriends](docs/sdks/public/README.md#accountv1getfriends)
- [publicAccountV1GetInfo](docs/sdks/public/README.md#accountv1getinfo)
- [publicAccountV1GetLeaderboardHistory](docs/sdks/public/README.md#accountv1getleaderboardhistory)
- [publicAccountV1Queue](docs/sdks/public/README.md#accountv1queue)
- [sessionAccountV1SessionCreate](docs/sdks/session/README.md#accountv1sessioncreate)
- [sessionAccountV1SessionDelete](docs/sdks/session/README.md#accountv1sessiondelete)
- [sessionAccountV1SessionGet](docs/sdks/session/README.md#accountv1sessionget)
- [sessionAccountV1SessionLogin](docs/sdks/session/README.md#accountv1sessionlogin)
- [settingsAccountV1SettingsDeleteImages](docs/sdks/settings/README.md#accountv1settingsdeleteimages)
- [settingsAccountV1SettingsGet](docs/sdks/settings/README.md#accountv1settingsget)
- [settingsAccountV1SettingsSendEmailVerification](docs/sdks/settings/README.md#accountv1settingssendemailverification)
- [settingsAccountV1SettingsUpdateImage](docs/sdks/settings/README.md#accountv1settingsupdateimage)
- [settingsAccountV1SettingsUpdate](docs/sdks/settings/README.md#accountv1settingsupdate)
- [settingsAccountV1SettingsUploadImages](docs/sdks/settings/README.md#accountv1settingsuploadimages)
- [settingsAccountV1SettingsVerfyEmail](docs/sdks/settings/README.md#accountv1settingsverfyemail)


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
