# Liveness
(*liveness*)

## Overview

Are we still alive? I hope so :^)

### Available Operations

* [check](#check) - Service Health Check

## check

This endpoint provides a simple health check to verify that the Steamsets API is operational and ready to serve requests.

<Info>
This endpoint is commonly used by load balancers, monitoring systems, and container orchestrators to check service availability.
</Info>

<Tip>
Use this endpoint for automated health monitoring - it has minimal overhead and responds quickly.
</Tip>

## Use Cases

- **Load Balancer Health Checks**: Configure your load balancer to ping this endpoint
- **Monitoring Systems**: Set up alerts when this endpoint becomes unavailable  
- **Container Health Checks**: Use in Docker/Kubernetes health check configurations
- **API Status Verification**: Quick way to verify the service is responding

## Response Format

The endpoint returns a simple JSON object with a status message confirming the service is alive and operational.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="liveness" method="get" path="/v1/liveness" -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.liveness.check();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SteamSetsCore } from "@steamsets/client-ts/core.js";
import { livenessCheck } from "@steamsets/client-ts/funcs/livenessCheck.js";

// Use `SteamSetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const steamSets = new SteamSetsCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await livenessCheck(steamSets);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("livenessCheck failed:", res.error);
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

**Promise\<[operations.LivenessResponse](../../models/operations/livenessresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorModel        | 400, 401                 | application/problem+json |
| errors.ErrorModel        | 500                      | application/problem+json |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |