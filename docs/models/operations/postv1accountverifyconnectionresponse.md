# PostV1AccountVerifyConnectionResponse

## Example Usage

```typescript
import { PostV1AccountVerifyConnectionResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountVerifyConnectionResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountVerifyConnectionResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountVerifyConnectionResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `v1AccountVerifyConnectionResponseBody`                                                                              | [components.V1AccountVerifyConnectionResponseBody](../../models/components/v1accountverifyconnectionresponsebody.md) | :heavy_minus_sign:                                                                                                   | OK                                                                                                                   |