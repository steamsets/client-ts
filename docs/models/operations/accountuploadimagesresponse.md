# AccountUploadImagesResponse

## Example Usage

```typescript
import { AccountUploadImagesResponse } from "@steamsets/client-ts/models/operations";

let value: AccountUploadImagesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountUploadImagesResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountUploadImagesResponseBody.json",
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `v1AccountUploadImagesResponseBody`                                                                          | [components.V1AccountUploadImagesResponseBody](../../models/components/v1accountuploadimagesresponsebody.md) | :heavy_minus_sign:                                                                                           | OK                                                                                                           |