# AccountDeleteImagesResponse

## Example Usage

```typescript
import { AccountDeleteImagesResponse } from "@steamsets/client-ts/models/operations";

let value: AccountDeleteImagesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountDeleteImagesResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountDeleteImagesResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `v1AccountDeleteImagesResponseBody`                                                                          | [components.V1AccountDeleteImagesResponseBody](../../models/components/v1accountdeleteimagesresponsebody.md) | :heavy_minus_sign:                                                                                           | OK                                                                                                           |