# AccountV1ConnectionConnectResponse

## Example Usage

```typescript
import { AccountV1ConnectionConnectResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1ConnectionConnectResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1ReconnectResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1ReconnectResponseBody.json",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `v1ReconnectResponseBody`                                                                | [components.V1ReconnectResponseBody](../../models/components/v1reconnectresponsebody.md) | :heavy_minus_sign:                                                                       | OK                                                                                       |