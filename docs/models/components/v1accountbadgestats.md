# V1AccountBadgeStats

## Example Usage

```typescript
import { V1AccountBadgeStats } from "@steamsets/client-ts/models/components";

let value: V1AccountBadgeStats = {
  dollarSchema: "https://api.steamsets.com/schemas/V1AccountBadgeStats.json",
  count: {
    foil: 934062,
    normal: 560458,
    special: 856706,
  },
  levels: {
    "key": 947552,
    "key1": 691615,
    "key2": 416631,
  },
  scarcities: {
    "key": 653009,
  },
  totalBadges: 123456,
  xp: {
    foil: 444904,
    normal: 759428,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | A URL to the JSON Schema for this object.                                                  | https://api.steamsets.com/schemas/V1AccountBadgeStats.json                                 |
| `count`                                                                                    | [components.V1AccountBadgeCountStats](../../models/components/v1accountbadgecountstats.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `levels`                                                                                   | Record<string, *number*>                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `scarcities`                                                                               | Record<string, *number*>                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `totalBadges`                                                                              | *number*                                                                                   | :heavy_check_mark:                                                                         | The total number of badges                                                                 | 123456                                                                                     |
| `xp`                                                                                       | [components.V1AccountBadgeXpStats](../../models/components/v1accountbadgexpstats.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |