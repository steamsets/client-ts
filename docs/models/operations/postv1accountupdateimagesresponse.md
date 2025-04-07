# PostV1AccountUpdateImagesResponse

## Example Usage

```typescript
import { PostV1AccountUpdateImagesResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountUpdateImagesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountUpdateImageResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountUpdateImageResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `v1AccountUpdateImageResponseBody`                                                                         | [components.V1AccountUpdateImageResponseBody](../../models/components/v1accountupdateimageresponsebody.md) | :heavy_minus_sign:                                                                                         | OK                                                                                                         |