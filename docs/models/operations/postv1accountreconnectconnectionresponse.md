# PostV1AccountReconnectConnectionResponse

## Example Usage

```typescript
import { PostV1AccountReconnectConnectionResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountReconnectConnectionResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountReconnectResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountReconnectResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `v1AccountReconnectResponseBody`                                                                       | [components.V1AccountReconnectResponseBody](../../models/components/v1accountreconnectresponsebody.md) | :heavy_minus_sign:                                                                                     | OK                                                                                                     |