# Image

## Example Usage

```typescript
import { Image } from "@steamsets/client-ts/models/components";

let value: Image = {
    active: true,
    fileId: "123456",
    fileName: "avatar.png",
    imageId: "123456",
    imageType: "avatar",
    mimeType: "image/png",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `active`                           | *boolean*                          | :heavy_check_mark:                 | Whether the image is active or not | true                               |
| `fileId`                           | *string*                           | :heavy_check_mark:                 | The id of the file                 | 123456                             |
| `fileName`                         | *string*                           | :heavy_check_mark:                 | The name of the file               | avatar.png                         |
| `imageId`                          | *string*                           | :heavy_check_mark:                 | The id of the image                | 123456                             |
| `imageType`                        | *string*                           | :heavy_check_mark:                 | The type of the image              | avatar                             |
| `mimeType`                         | *string*                           | :heavy_check_mark:                 | The mime type of the file          | image/png                          |