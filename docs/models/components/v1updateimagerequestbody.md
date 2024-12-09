# V1UpdateImageRequestBody

## Example Usage

```typescript
import { V1UpdateImageRequestBody } from "@steamsets/client-ts/models/components";

let value: V1UpdateImageRequestBody = {
  images: [
    {
      active: true,
      imageId: "123456",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `images`                                                               | [components.V1UpdateImage](../../models/components/v1updateimage.md)[] | :heavy_check_mark:                                                     | The images to update                                                   |