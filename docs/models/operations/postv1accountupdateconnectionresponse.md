# PostV1AccountUpdateConnectionResponse

## Example Usage

```typescript
import { PostV1AccountUpdateConnectionResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountUpdateConnectionResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountUpdateConnectionResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountUpdateConnectionResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `v1AccountUpdateConnectionResponseBody`                                                                              | [components.V1AccountUpdateConnectionResponseBody](../../models/components/v1accountupdateconnectionresponsebody.md) | :heavy_minus_sign:                                                                                                   | OK                                                                                                                   |