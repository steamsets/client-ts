# AccountV1AblyAuthenticateResponse

## Example Usage

```typescript
import { AccountV1AblyAuthenticateResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1AblyAuthenticateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountAblyAuthenticateBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountAblyAuthenticateBody.json",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `v1AccountAblyAuthenticateBody`                                                                      | [components.V1AccountAblyAuthenticateBody](../../models/components/v1accountablyauthenticatebody.md) | :heavy_minus_sign:                                                                                   | OK                                                                                                   |