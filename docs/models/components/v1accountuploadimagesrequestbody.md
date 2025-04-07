# V1AccountUploadImagesRequestBody

## Example Usage

```typescript
import { V1AccountUploadImagesRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountUploadImagesRequestBody = {
  images: [
    {
      data: "base64_encoded_image",
      type: "avatar",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `images`                                                                                 | [components.V1AccountUploadedImage](../../models/components/v1accountuploadedimage.md)[] | :heavy_check_mark:                                                                       | The images to upload                                                                     |