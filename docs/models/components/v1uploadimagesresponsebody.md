# V1UploadImagesResponseBody

## Example Usage

```typescript
import { V1UploadImagesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1UploadImagesResponseBody = {
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
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `dollarSchema`                                                    | *string*                                                          | :heavy_minus_sign:                                                | A URL to the JSON Schema for this object.                         | https://api.steamsets.com/schemas/V1UploadImagesResponseBody.json |
| `images`                                                          | [components.Image](../../models/components/image.md)[]            | :heavy_check_mark:                                                | The images uploaded                                               |                                                                   |