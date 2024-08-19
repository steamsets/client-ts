# V1UpdateImageRequestBody

## Example Usage

```typescript
import { V1UpdateImageRequestBody } from "@steamsets/client-ts/models/components";

let value: V1UpdateImageRequestBody = {
    active: true,
    imageId: "123456",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `active`                                                                | *boolean*                                                               | :heavy_check_mark:                                                      | Whether the image is active or not, only one of each type can be active | true                                                                    |
| `imageId`                                                               | *string*                                                                | :heavy_check_mark:                                                      | The image id to update                                                  | 123456                                                                  |