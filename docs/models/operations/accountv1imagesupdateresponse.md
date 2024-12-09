# AccountV1ImagesUpdateResponse

## Example Usage

```typescript
import { AccountV1ImagesUpdateResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1ImagesUpdateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1UpdateImageResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1UpdateImageResponseBody.json",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `v1UpdateImageResponseBody`                                                                  | [components.V1UpdateImageResponseBody](../../models/components/v1updateimageresponsebody.md) | :heavy_minus_sign:                                                                           | OK                                                                                           |