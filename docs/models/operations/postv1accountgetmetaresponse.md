# PostV1AccountGetMetaResponse

## Example Usage

```typescript
import { PostV1AccountGetMetaResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountGetMetaResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountGetMetaResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountGetMetaResponseBody.json",
    steamAvatarHashOfTheAccount: "<value>",
    description:
      "antique dish fax noisily pivot till outrun freezing circa psst",
    steamId: "<id>",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `v1AccountGetMetaResponseBody`                                                                     | [components.V1AccountGetMetaResponseBody](../../models/components/v1accountgetmetaresponsebody.md) | :heavy_minus_sign:                                                                                 | OK                                                                                                 |