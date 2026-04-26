# V1AdminCmsListAssetsResponseBody

## Example Usage

```typescript
import { V1AdminCmsListAssetsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminCmsListAssetsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminCmsListAssetsResponseBody.json",
  assets: null,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `dollarSchema`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | A URL to the JSON Schema for this object.                               | https://api.steamsets.com/schemas/V1AdminCmsListAssetsResponseBody.json |
| `assets`                                                                | [components.AssetItem](../../models/components/assetitem.md)[]          | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |