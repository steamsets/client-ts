# V1BadgeTagBadgeResponseBody

## Example Usage

```typescript
import { V1BadgeTagBadgeResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeTagBadgeResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeTagBadgeResponseBody.json",
  colorTags: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  designTags: [],
  metadataTags: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | https://api.steamsets.com/schemas/V1BadgeTagBadgeResponseBody.json         |
| `colorTags`                                                                | [components.CurrentColorTag](../../models/components/currentcolortag.md)[] | :heavy_check_mark:                                                         | The badge's color tags                                                     |                                                                            |
| `designTags`                                                               | [components.DesignTag](../../models/components/designtag.md)[]             | :heavy_check_mark:                                                         | The badge's visual design tags                                             |                                                                            |
| `metadataTags`                                                             | [components.DesignTag](../../models/components/designtag.md)[]             | :heavy_check_mark:                                                         | The badge's non-visual metadata tags                                       |                                                                            |