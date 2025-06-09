# V1BadgeListTagsResponseBody

## Example Usage

```typescript
import { V1BadgeListTagsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeListTagsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeListTagsResponseBody.json",
  colorTags: [
    {
      group: "<value>",
      groupOwner: true,
      hex: "<value>",
      hsl: "<value>",
      id: "<id>",
      name: "<value>",
    },
  ],
  designTags: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `dollarSchema`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | A URL to the JSON Schema for this object.                          | https://api.steamsets.com/schemas/V1BadgeListTagsResponseBody.json |
| `colorTags`                                                        | [components.ColorTag](../../models/components/colortag.md)[]       | :heavy_check_mark:                                                 | The available color tags                                           |                                                                    |
| `designTags`                                                       | [components.DesignTag](../../models/components/designtag.md)[]     | :heavy_check_mark:                                                 | The available design tags                                          |                                                                    |