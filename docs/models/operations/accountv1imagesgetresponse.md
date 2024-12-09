# AccountV1ImagesGetResponse

## Example Usage

```typescript
import { AccountV1ImagesGetResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1ImagesGetResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1GetImagesResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1GetImagesResponseBody.json",
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `v1GetImagesResponseBody`                                                                | [components.V1GetImagesResponseBody](../../models/components/v1getimagesresponsebody.md) | :heavy_minus_sign:                                                                       | OK                                                                                       |