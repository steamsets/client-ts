# V1AccountUploadImagesResponseBody

## Example Usage

```typescript
import { V1AccountUploadImagesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountUploadImagesResponseBody = {
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `dollarSchema`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | A URL to the JSON Schema for this object.                                | https://api.steamsets.com/schemas/V1AccountUploadImagesResponseBody.json |
| `images`                                                                 | [components.Image](../../models/components/image.md)[]                   | :heavy_check_mark:                                                       | The images uploaded                                                      |                                                                          |