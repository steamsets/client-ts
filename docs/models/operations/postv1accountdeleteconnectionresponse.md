# PostV1AccountDeleteConnectionResponse

## Example Usage

```typescript
import { PostV1AccountDeleteConnectionResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountDeleteConnectionResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountDeleteConnectionResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountDeleteConnectionResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `v1AccountDeleteConnectionResponseBody`                                                                              | [components.V1AccountDeleteConnectionResponseBody](../../models/components/v1accountdeleteconnectionresponsebody.md) | :heavy_minus_sign:                                                                                                   | OK                                                                                                                   |