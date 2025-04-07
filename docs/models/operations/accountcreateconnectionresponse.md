# AccountCreateConnectionResponse

## Example Usage

```typescript
import { AccountCreateConnectionResponse } from "@steamsets/client-ts/models/operations";

let value: AccountCreateConnectionResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountCreateConnectionResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountCreateConnectionResponseBody.json",
    code: "ABC123",
    connectionId: "ABC123",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `v1AccountCreateConnectionResponseBody`                                                                              | [components.V1AccountCreateConnectionResponseBody](../../models/components/v1accountcreateconnectionresponsebody.md) | :heavy_minus_sign:                                                                                                   | OK                                                                                                                   |