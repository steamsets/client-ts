# V1AccountListImagesResponseBody

## Example Usage

```typescript
import { V1AccountListImagesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListImagesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountListImagesResponseBody.json",
  images: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `dollarSchema`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | A URL to the JSON Schema for this object.                              | https://api.steamsets.com/schemas/V1AccountListImagesResponseBody.json |
| `images`                                                               | [components.Image](../../models/components/image.md)[]                 | :heavy_check_mark:                                                     | The images the account has                                             |                                                                        |