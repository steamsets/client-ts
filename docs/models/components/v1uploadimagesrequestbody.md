# V1UploadImagesRequestBody

## Example Usage

```typescript
import { V1UploadImagesRequestBody } from "@steamsets/client-ts/models/components";

let value: V1UploadImagesRequestBody = {
  images: [
    {
      data: "base64_encoded_image",
      type: "avatar",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `images`                                                                   | [components.V1UploadedImage](../../models/components/v1uploadedimage.md)[] | :heavy_check_mark:                                                         | The images to upload                                                       |