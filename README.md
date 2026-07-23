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
* [compareBadges](docs/sdks/account/README.md#comparebadges) - Compare badge collections between accounts
* [createConnection](docs/sdks/account/README.md#createconnection) - Create OAuth or domain connection
* [createDeveloperApp](docs/sdks/account/README.md#createdeveloperapp) - Create developer application
* [deleteConnection](docs/sdks/account/README.md#deleteconnection) - Delete OAuth or domain connection
* [deleteDeveloperApp](docs/sdks/account/README.md#deletedeveloperapp) - Delete developer application
* [deleteImages](docs/sdks/account/README.md#deleteimages) - Delete uploaded images
* [deleteSession](docs/sdks/account/README.md#deletesession) - Delete user session
* [findFriendPath](docs/sdks/account/README.md#findfriendpath) - Find up to N shortest friend paths between two accounts
* [getBadgeHeatmap](docs/sdks/account/README.md#getbadgeheatmap) - Get monthly badge crafting counts for an account
* [getBadgeStats](docs/sdks/account/README.md#getbadgestats) - Get account badge statistics
* [getDataPoints](docs/sdks/account/README.md#getdatapoints) - Get account data points for charts
* [getInfo](docs/sdks/account/README.md#getinfo) - Get account profile information
* [getSession](docs/sdks/account/README.md#getsession) - Get user session information
* [getSettings](docs/sdks/account/README.md#getsettings) - Get account settings
* [getTrending](docs/sdks/account/README.md#gettrending) - Top accounts by unique viewers in a window
* [getViewStats](docs/sdks/account/README.md#getviewstats) - Get profile view counts (24h/7d/30d × unique/total) for an account
* [listApps](docs/sdks/account/README.md#listapps) - List account owned apps
* [listBadgeBookmarks](docs/sdks/account/README.md#listbadgebookmarks) - List bookmarked badges
* [listBadges](docs/sdks/account/README.md#listbadges) - List account badges
* [listFriends](docs/sdks/account/README.md#listfriends) - List account friends
* [listImages](docs/sdks/account/README.md#listimages) - List uploaded images
* [listInventorySets](docs/sdks/account/README.md#listinventorysets) - List inventory sets
* [listLeaderboardHistory](docs/sdks/account/README.md#listleaderboardhistory) - Get leaderboard history
* [listOwnedBadges](docs/sdks/account/README.md#listownedbadges) - List owned badges
* [listOwnedGroups](docs/sdks/account/README.md#listownedgroups) - List groups owned by account
* [login](docs/sdks/account/README.md#login) - Login with Steam
* [logout](docs/sdks/account/README.md#logout) - Logout from session
* [queueInventoryRefresh](docs/sdks/account/README.md#queueinventoryrefresh) - Queue inventory refresh
* [queueUpdate](docs/sdks/account/README.md#queueupdate) - Queue account update
* [reconnectConnection](docs/sdks/account/README.md#reconnectconnection) - Reconnect OAuth connection
* [refreshInventory](docs/sdks/account/README.md#refreshinventory) - Refresh inventory
* [refreshSession](docs/sdks/account/README.md#refreshsession) - Refresh session token
* [sendEmailVerification](docs/sdks/account/README.md#sendemailverification) - Send email verification
* [subscribe](docs/sdks/account/README.md#subscribe) - Server-sent-events stream of per-account updates (queue status, view ticks).
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

### [Activity](docs/sdks/activity/README.md)

* [listAccountFeed](docs/sdks/activity/README.md#listaccountfeed) - List the activity feed for a single account (profile timeline)
* [listGlobalFeed](docs/sdks/activity/README.md#listglobalfeed) - List the global activity feed
* [streamGlobalFeed](docs/sdks/activity/README.md#streamglobalfeed) - Live server-sent-events stream of the global activity feed

### [Admin](docs/sdks/admin/README.md)

* [getAccount](docs/sdks/admin/README.md#getaccount) - Get account for admin
* [removeVanity](docs/sdks/admin/README.md#removevanity) - Remove vanity URL
* [updateResources](docs/sdks/admin/README.md#updateresources) - Update account resources
* [updateRoleOverride](docs/sdks/admin/README.md#updateroleoverride) - Set or remove a tier role override for an account
* [updateRoles](docs/sdks/admin/README.md#updateroles) - Update account roles

#### [Admin.Maintenance](docs/sdks/steamsetsmaintenance/README.md)

* [create](docs/sdks/steamsetsmaintenance/README.md#create) - Create a maintenance event
* [delete](docs/sdks/steamsetsmaintenance/README.md#delete) - Hard-delete a maintenance event
* [list](docs/sdks/steamsetsmaintenance/README.md#list) - Admin: list every maintenance event including disabled and scheduled
* [update](docs/sdks/steamsetsmaintenance/README.md#update) - Update a maintenance event (any subset of fields)

### [Analytics](docs/sdks/analytics/README.md)

* [getBivariate](docs/sdks/analytics/README.md#getbivariate) - Bucket by X, aggregate Y, within a scope
* [getDistribution](docs/sdks/analytics/README.md#getdistribution) - Histogram + summary stats for a metric in a scope
* [getInequality](docs/sdks/analytics/README.md#getinequality) - Lorenz curve + Gini + top-X%-own-Y% headlines for one metric in a scope
* [getMetricByScope](docs/sdks/analytics/README.md#getmetricbyscope) - One metric aggregated per country (or region) — worldmap source
* [getMyPercentiles](docs/sdks/analytics/README.md#getmypercentiles) - Per-metric percentile rank for the logged-in user in the chosen scope
* [getTrend](docs/sdks/analytics/README.md#gettrend) - Daily quantiles over a window for a metric in a scope
* [listMetrics](docs/sdks/analytics/README.md#listmetrics) - List every analytics domain, metric, and scope the data-library can serve
* [trackEvent](docs/sdks/analytics/README.md#trackevent) - Track a frontend-only analytics event (profile view, search). Frontend API key + logged-in users only.

### [App](docs/sdks/app/README.md)

* [queueUpdate](docs/sdks/app/README.md#queueupdate) - Queue app update

### [Apps](docs/sdks/apps/README.md)

* [listBadges](docs/sdks/apps/README.md#listbadges) - List app badges
* [listOwners](docs/sdks/apps/README.md#listowners) - List accounts that own an app (highest playtime first). Donator perk — page size scales with Patreon tier.

### [Badge](docs/sdks/badge/README.md)

* [streamPricing](docs/sdks/badge/README.md#streampricing) - Server-sent-events stream of badge pricing ticks. Forwards every tick — filter client-side.
* [suggestTags](docs/sdks/badge/README.md#suggesttags) - Suggest badge tag

### [Badges](docs/sdks/badges/README.md)

* [claimTagReviews](docs/sdks/badges/README.md#claimtagreviews) - Claim badge tag reviews
* [listCrafters](docs/sdks/badges/README.md#listcrafters) - List accounts that own a badge (earliest completion first). Donator perk — page size scales with Patreon tier.
* [listTags](docs/sdks/badges/README.md#listtags) - List badge tags
* [reviseTagReview](docs/sdks/badges/README.md#revisetagreview) - Revise a completed badge tag review
* [submitTagReview](docs/sdks/badges/README.md#submittagreview) - Submit a badge tag review
* [tag](docs/sdks/badges/README.md#tag) - Tag a badge

### [Group](docs/sdks/group/README.md)

* [queueUpdate](docs/sdks/group/README.md#queueupdate) - Queue group update

### [Item](docs/sdks/item/README.md)

* [findOwners](docs/sdks/item/README.md#findowners) - Find owners of one or more trading cards or booster packs. Friend paths from the requester are included for logged-in callers.

### [Kv](docs/sdks/kv/README.md)

* [delete](docs/sdks/kv/README.md#delete) - Delete a user's key/value entry
* [list](docs/sdks/kv/README.md#list) - List a user's stored key/value entries
* [set](docs/sdks/kv/README.md#set) - Set a user's key/value entry

### [Leaderboard](docs/sdks/leaderboard/README.md)

* [getAccount](docs/sdks/leaderboard/README.md#getaccount) - Get account leaderboard
* [getBucketLeaders](docs/sdks/leaderboard/README.md#getbucketleaders) - Get the top account in each value bucket
* [getChanges](docs/sdks/leaderboard/README.md#getchanges) - Top movers in a windowed delta on a leaderboard
* [getGroup](docs/sdks/leaderboard/README.md#getgroup) - Get group leaderboard
* [getLowestRanks](docs/sdks/leaderboard/README.md#getlowestranks) - Get lowest ranked accounts
* [previewAccountRank](docs/sdks/leaderboard/README.md#previewaccountrank) - Preview account rank

### [Leaderboards](docs/sdks/leaderboards/README.md)

* [list](docs/sdks/leaderboards/README.md#list) - List leaderboard badges

### [Location](docs/sdks/location/README.md)

* [get](docs/sdks/location/README.md#get) - List available locations

### [Maintenance](docs/sdks/maintenance/README.md)

* [list](docs/sdks/maintenance/README.md#list) - List currently active maintenance events

### [Search](docs/sdks/search/README.md)

* [getTrending](docs/sdks/search/README.md#gettrending) - Top search queries in a window, by unique searcher count

### [Site](docs/sdks/site/README.md)

* [subscribe](docs/sdks/site/README.md#subscribe) - Server-sent-events stream of site-wide broadcasts (maintenance, announcements, etc).

### [Staff](docs/sdks/staff/README.md)

* [list](docs/sdks/staff/README.md#list) - List staff members

### [Stats](docs/sdks/stats/README.md)

* [get](docs/sdks/stats/README.md#get) - Get platform statistics
* [subscribe](docs/sdks/stats/README.md#subscribe) - Server-sent-events stream of platform stats. Emits a snapshot, then deltas as the queues commit them.

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Server-sent event streaming [eventstream] -->
## Server-sent event streaming

[Server-sent events][mdn-sse] are used to stream content from certain
operations. These operations will expose the stream as an async iterable that
can be consumed using a [`for await...of`][mdn-for-await-of] loop. The loop will
terminate when the server no longer has any events to send and closes the
underlying connection.

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.subscribe({
    accountId: 442779,
  });

  if (result.serverSentEvents == null) {
    throw new Error("failed to create stream: received null value");
  }
  for await (const event of result.serverSentEvents) {
    console.log(event);
  }
}

run();

```

[mdn-sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[mdn-for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
<!-- End Server-sent event streaming [eventstream] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.account.compareBadges({
    accounts: [
      {},
    ],
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

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
  * [`ErrorModel`](./src/models/errors/errormodel.ts): *

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

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
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

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { SteamSets } from "@steamsets/client-ts";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@steamsets/client-ts/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
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
- [`accountCompareBadges`](docs/sdks/account/README.md#comparebadges) - Compare badge collections between accounts
- [`accountCreateConnection`](docs/sdks/account/README.md#createconnection) - Create OAuth or domain connection
- [`accountCreateDeveloperApp`](docs/sdks/account/README.md#createdeveloperapp) - Create developer application
- [`accountDeleteConnection`](docs/sdks/account/README.md#deleteconnection) - Delete OAuth or domain connection
- [`accountDeleteDeveloperApp`](docs/sdks/account/README.md#deletedeveloperapp) - Delete developer application
- [`accountDeleteImages`](docs/sdks/account/README.md#deleteimages) - Delete uploaded images
- [`accountDeleteSession`](docs/sdks/account/README.md#deletesession) - Delete user session
- [`accountFindFriendPath`](docs/sdks/account/README.md#findfriendpath) - Find up to N shortest friend paths between two accounts
- [`accountGetBadgeHeatmap`](docs/sdks/account/README.md#getbadgeheatmap) - Get monthly badge crafting counts for an account
- [`accountGetBadgeStats`](docs/sdks/account/README.md#getbadgestats) - Get account badge statistics
- [`accountGetDataPoints`](docs/sdks/account/README.md#getdatapoints) - Get account data points for charts
- [`accountGetInfo`](docs/sdks/account/README.md#getinfo) - Get account profile information
- [`accountGetSession`](docs/sdks/account/README.md#getsession) - Get user session information
- [`accountGetSettings`](docs/sdks/account/README.md#getsettings) - Get account settings
- [`accountGetTrending`](docs/sdks/account/README.md#gettrending) - Top accounts by unique viewers in a window
- [`accountGetViewStats`](docs/sdks/account/README.md#getviewstats) - Get profile view counts (24h/7d/30d × unique/total) for an account
- [`accountListApps`](docs/sdks/account/README.md#listapps) - List account owned apps
- [`accountListBadgeBookmarks`](docs/sdks/account/README.md#listbadgebookmarks) - List bookmarked badges
- [`accountListBadges`](docs/sdks/account/README.md#listbadges) - List account badges
- [`accountListFriends`](docs/sdks/account/README.md#listfriends) - List account friends
- [`accountListImages`](docs/sdks/account/README.md#listimages) - List uploaded images
- [`accountListInventorySets`](docs/sdks/account/README.md#listinventorysets) - List inventory sets
- [`accountListLeaderboardHistory`](docs/sdks/account/README.md#listleaderboardhistory) - Get leaderboard history
- [`accountListOwnedBadges`](docs/sdks/account/README.md#listownedbadges) - List owned badges
- [`accountListOwnedGroups`](docs/sdks/account/README.md#listownedgroups) - List groups owned by account
- [`accountLogin`](docs/sdks/account/README.md#login) - Login with Steam
- [`accountLogout`](docs/sdks/account/README.md#logout) - Logout from session
- [`accountQueueInventoryRefresh`](docs/sdks/account/README.md#queueinventoryrefresh) - Queue inventory refresh
- [`accountQueueUpdate`](docs/sdks/account/README.md#queueupdate) - Queue account update
- [`accountReconnectConnection`](docs/sdks/account/README.md#reconnectconnection) - Reconnect OAuth connection
- [`accountRefreshInventory`](docs/sdks/account/README.md#refreshinventory) - Refresh inventory
- [`accountRefreshSession`](docs/sdks/account/README.md#refreshsession) - Refresh session token
- [`accountSendEmailVerification`](docs/sdks/account/README.md#sendemailverification) - Send email verification
- [`accountSubscribe`](docs/sdks/account/README.md#subscribe) - Server-sent-events stream of per-account updates (queue status, view ticks).
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
- [`activityListAccountFeed`](docs/sdks/activity/README.md#listaccountfeed) - List the activity feed for a single account (profile timeline)
- [`activityListGlobalFeed`](docs/sdks/activity/README.md#listglobalfeed) - List the global activity feed
- [`activityStreamGlobalFeed`](docs/sdks/activity/README.md#streamglobalfeed) - Live server-sent-events stream of the global activity feed
- [`adminGetAccount`](docs/sdks/admin/README.md#getaccount) - Get account for admin
- [`adminMaintenanceCreate`](docs/sdks/steamsetsmaintenance/README.md#create) - Create a maintenance event
- [`adminMaintenanceDelete`](docs/sdks/steamsetsmaintenance/README.md#delete) - Hard-delete a maintenance event
- [`adminMaintenanceList`](docs/sdks/steamsetsmaintenance/README.md#list) - Admin: list every maintenance event including disabled and scheduled
- [`adminMaintenanceUpdate`](docs/sdks/steamsetsmaintenance/README.md#update) - Update a maintenance event (any subset of fields)
- [`adminRemoveVanity`](docs/sdks/admin/README.md#removevanity) - Remove vanity URL
- [`adminUpdateResources`](docs/sdks/admin/README.md#updateresources) - Update account resources
- [`adminUpdateRoleOverride`](docs/sdks/admin/README.md#updateroleoverride) - Set or remove a tier role override for an account
- [`adminUpdateRoles`](docs/sdks/admin/README.md#updateroles) - Update account roles
- [`analyticsGetBivariate`](docs/sdks/analytics/README.md#getbivariate) - Bucket by X, aggregate Y, within a scope
- [`analyticsGetDistribution`](docs/sdks/analytics/README.md#getdistribution) - Histogram + summary stats for a metric in a scope
- [`analyticsGetInequality`](docs/sdks/analytics/README.md#getinequality) - Lorenz curve + Gini + top-X%-own-Y% headlines for one metric in a scope
- [`analyticsGetMetricByScope`](docs/sdks/analytics/README.md#getmetricbyscope) - One metric aggregated per country (or region) — worldmap source
- [`analyticsGetMyPercentiles`](docs/sdks/analytics/README.md#getmypercentiles) - Per-metric percentile rank for the logged-in user in the chosen scope
- [`analyticsGetTrend`](docs/sdks/analytics/README.md#gettrend) - Daily quantiles over a window for a metric in a scope
- [`analyticsListMetrics`](docs/sdks/analytics/README.md#listmetrics) - List every analytics domain, metric, and scope the data-library can serve
- [`analyticsTrackEvent`](docs/sdks/analytics/README.md#trackevent) - Track a frontend-only analytics event (profile view, search). Frontend API key + logged-in users only.
- [`appQueueUpdate`](docs/sdks/app/README.md#queueupdate) - Queue app update
- [`appsListBadges`](docs/sdks/apps/README.md#listbadges) - List app badges
- [`appsListOwners`](docs/sdks/apps/README.md#listowners) - List accounts that own an app (highest playtime first). Donator perk — page size scales with Patreon tier.
- [`badgesClaimTagReviews`](docs/sdks/badges/README.md#claimtagreviews) - Claim badge tag reviews
- [`badgesListCrafters`](docs/sdks/badges/README.md#listcrafters) - List accounts that own a badge (earliest completion first). Donator perk — page size scales with Patreon tier.
- [`badgesListTags`](docs/sdks/badges/README.md#listtags) - List badge tags
- [`badgesReviseTagReview`](docs/sdks/badges/README.md#revisetagreview) - Revise a completed badge tag review
- [`badgesSubmitTagReview`](docs/sdks/badges/README.md#submittagreview) - Submit a badge tag review
- [`badgesTag`](docs/sdks/badges/README.md#tag) - Tag a badge
- [`badgeStreamPricing`](docs/sdks/badge/README.md#streampricing) - Server-sent-events stream of badge pricing ticks. Forwards every tick — filter client-side.
- [`badgeSuggestTags`](docs/sdks/badge/README.md#suggesttags) - Suggest badge tag
- [`groupQueueUpdate`](docs/sdks/group/README.md#queueupdate) - Queue group update
- [`itemFindOwners`](docs/sdks/item/README.md#findowners) - Find owners of one or more trading cards or booster packs. Friend paths from the requester are included for logged-in callers.
- [`kvDelete`](docs/sdks/kv/README.md#delete) - Delete a user's key/value entry
- [`kvList`](docs/sdks/kv/README.md#list) - List a user's stored key/value entries
- [`kvSet`](docs/sdks/kv/README.md#set) - Set a user's key/value entry
- [`leaderboardGetAccount`](docs/sdks/leaderboard/README.md#getaccount) - Get account leaderboard
- [`leaderboardGetBucketLeaders`](docs/sdks/leaderboard/README.md#getbucketleaders) - Get the top account in each value bucket
- [`leaderboardGetChanges`](docs/sdks/leaderboard/README.md#getchanges) - Top movers in a windowed delta on a leaderboard
- [`leaderboardGetGroup`](docs/sdks/leaderboard/README.md#getgroup) - Get group leaderboard
- [`leaderboardGetLowestRanks`](docs/sdks/leaderboard/README.md#getlowestranks) - Get lowest ranked accounts
- [`leaderboardPreviewAccountRank`](docs/sdks/leaderboard/README.md#previewaccountrank) - Preview account rank
- [`leaderboardsList`](docs/sdks/leaderboards/README.md#list) - List leaderboard badges
- [`locationGet`](docs/sdks/location/README.md#get) - List available locations
- [`maintenanceList`](docs/sdks/maintenance/README.md#list) - List currently active maintenance events
- [`searchGetTrending`](docs/sdks/search/README.md#gettrending) - Top search queries in a window, by unique searcher count
- [`siteSubscribe`](docs/sdks/site/README.md#subscribe) - Server-sent-events stream of site-wide broadcasts (maintenance, announcements, etc).
- [`staffList`](docs/sdks/staff/README.md#list) - List staff members
- [`statsGet`](docs/sdks/stats/README.md#get) - Get platform statistics
- [`statsSubscribe`](docs/sdks/stats/README.md#subscribe) - Server-sent-events stream of platform stats. Emits a snapshot, then deltas as the queues commit them.

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
  * [Server-sent event streaming](#server-sent-event-streaming)
  * [Pagination](#pagination)
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
