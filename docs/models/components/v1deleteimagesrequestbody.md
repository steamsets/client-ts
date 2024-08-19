# V1DeleteImagesRequestBody

## Example Usage

```typescript
import { V1DeleteImagesRequestBody } from "@steamsets/client-ts/models/components";

let value: V1DeleteImagesRequestBody = {
    images: [
        {
            fileId: "123456",
            imageId: "123456",
        },
    ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `images`                                             | [components.Item](../../models/components/item.md)[] | :heavy_check_mark:                                   | The images to delete                                 |