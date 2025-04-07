# V1AccountUploadedImage

## Example Usage

```typescript
import { V1AccountUploadedImage } from "@steamsets/client-ts/models/components";

let value: V1AccountUploadedImage = {
  data: "base64_encoded_image",
  type: "avatar",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | The image data aka base64 encoded image                                                        | base64_encoded_image                                                                           |
| `type`                                                                                         | [components.V1AccountUploadedImageType](../../models/components/v1accountuploadedimagetype.md) | :heavy_check_mark:                                                                             | The Image Type                                                                                 | avatar                                                                                         |