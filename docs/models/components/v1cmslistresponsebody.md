# V1CmsListResponseBody

## Example Usage

```typescript
import { V1CmsListResponseBody } from "@steamsets/client-ts/models/components";

let value: V1CmsListResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1CmsListResponseBody.json",
  items: null,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `dollarSchema`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | A URL to the JSON Schema for this object.                          | https://api.steamsets.com/schemas/V1CmsListResponseBody.json       |
| `items`                                                            | [components.CmsListItem](../../models/components/cmslistitem.md)[] | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |