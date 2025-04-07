# V1AccountUpdateImageRequestBody

## Example Usage

```typescript
import { V1AccountUpdateImageRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountUpdateImageRequestBody = {
  images: [
    {
      active: true,
      imageId: "123456",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `images`                                                                             | [components.V1AccountUpdateImage](../../models/components/v1accountupdateimage.md)[] | :heavy_check_mark:                                                                   | The images to update                                                                 |