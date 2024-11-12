# Image

## Example Usage

```typescript
import { Image } from "@steamsets/client-ts/models/components";

let value: Image = {
  active: true,
  fileName: "avatar.png",
  imageId: "img_wasd123",
  imageType: "avatar",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `active`                                                     | *boolean*                                                    | :heavy_check_mark:                                           | Whether the image is active or not                           | true                                                         |
| `fileName`                                                   | *string*                                                     | :heavy_check_mark:                                           | The name of the file                                         | avatar.png                                                   |
| `imageId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The id of the image                                          | img_wasd123                                                  |
| `imageType`                                                  | [components.ImageType](../../models/components/imagetype.md) | :heavy_check_mark:                                           | The type of the image                                        | avatar                                                       |