# AccountV1ImagesUploadResponse

## Example Usage

```typescript
import { AccountV1ImagesUploadResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1ImagesUploadResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1UploadImagesResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1UploadImagesResponseBody.json",
    images: [
      {
        active: true,
        fileName: "avatar.png",
        imageId: "img_wasd123",
        imageType: "avatar",
      },
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `v1UploadImagesResponseBody`                                                                   | [components.V1UploadImagesResponseBody](../../models/components/v1uploadimagesresponsebody.md) | :heavy_minus_sign:                                                                             | OK                                                                                             |