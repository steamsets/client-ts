# AccountV1SettingsDeleteImagesResponse

## Example Usage

```typescript
import { AccountV1SettingsDeleteImagesResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SettingsDeleteImagesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1DeleteImagesResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1DeleteImagesResponseBody.json",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `v1DeleteImagesResponseBody`                                                                   | [components.V1DeleteImagesResponseBody](../../models/components/v1deleteimagesresponsebody.md) | :heavy_minus_sign:                                                                             | OK                                                                                             |