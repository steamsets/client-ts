# V1UploadedImage

## Example Usage

```typescript
import { V1UploadedImage } from "@steamsets/client-ts/models/components";

let value: V1UploadedImage = {
  data: "base64_encoded_image",
  type: "avatar",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | The image data aka base64 encoded image                                          | base64_encoded_image                                                             |
| `type`                                                                           | [components.V1UploadedImageType](../../models/components/v1uploadedimagetype.md) | :heavy_check_mark:                                                               | The Image Type                                                                   | avatar                                                                           |