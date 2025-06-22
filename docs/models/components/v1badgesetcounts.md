# V1BadgeSetCounts

## Example Usage

```typescript
import { V1BadgeSetCounts } from "@steamsets/client-ts/models/components";

let value: V1BadgeSetCounts = {
  duplicate: {
    foil: 157710,
    normal: 538702,
    total: 573471,
  },
  total: {
    foil: 412969,
    normal: 862978,
    total: 336959,
  },
  unique: {
    foil: 433942,
    normal: 587953,
    total: 455747,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `duplicate`                                                                | [components.V1BadgeTypeCount](../../models/components/v1badgetypecount.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `total`                                                                    | [components.V1BadgeTypeCount](../../models/components/v1badgetypecount.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `unique`                                                                   | [components.V1BadgeTypeCount](../../models/components/v1badgetypecount.md) | :heavy_check_mark:                                                         | N/A                                                                        |