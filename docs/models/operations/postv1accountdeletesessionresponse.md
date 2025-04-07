# PostV1AccountDeleteSessionResponse

## Example Usage

```typescript
import { PostV1AccountDeleteSessionResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountDeleteSessionResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountDeleteSessionResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountDeleteSessionResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `v1AccountDeleteSessionResponseBody`                                                                           | [components.V1AccountDeleteSessionResponseBody](../../models/components/v1accountdeletesessionresponsebody.md) | :heavy_minus_sign:                                                                                             | OK                                                                                                             |