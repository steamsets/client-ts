# V1BadgeSetCounts

## Example Usage

```typescript
import { V1BadgeSetCounts } from "@steamsets/client-ts/models/components";

let value: V1BadgeSetCounts = {
  duplicate: {
    foil: 538702,
    normal: 573471,
    total: 412969,
  },
  total: {
    foil: 862978,
    normal: 336959,
    total: 433942,
  },
  unique: {
    foil: 587953,
    normal: 455747,
    total: 312551,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `duplicate`                                                                | [components.V1BadgeTypeCount](../../models/components/v1badgetypecount.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `total`                                                                    | [components.V1BadgeTypeCount](../../models/components/v1badgetypecount.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `unique`                                                                   | [components.V1BadgeTypeCount](../../models/components/v1badgetypecount.md) | :heavy_check_mark:                                                         | N/A                                                                        |