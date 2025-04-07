# PostV1AccountListImagesResponse

## Example Usage

```typescript
import { PostV1AccountListImagesResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountListImagesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountListImagesResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountListImagesResponseBody.json",
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `v1AccountListImagesResponseBody`                                                                        | [components.V1AccountListImagesResponseBody](../../models/components/v1accountlistimagesresponsebody.md) | :heavy_minus_sign:                                                                                       | OK                                                                                                       |