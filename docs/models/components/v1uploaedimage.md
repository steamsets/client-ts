# V1UploaedImage

## Example Usage

```typescript
import { V1UploaedImage } from "@steamsets/client-ts/models/components";

let value: V1UploaedImage = {
  data: "base64_encoded_image",
  type: "avatar",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The image data aka base64 encoded image                                        | base64_encoded_image                                                           |
| `type`                                                                         | [components.V1UploaedImageType](../../models/components/v1uploaedimagetype.md) | :heavy_check_mark:                                                             | The Image Type                                                                 | avatar                                                                         |