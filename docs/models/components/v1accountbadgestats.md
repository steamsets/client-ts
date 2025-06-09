# V1AccountBadgeStats

## Example Usage

```typescript
import { V1AccountBadgeStats } from "@steamsets/client-ts/models/components";

let value: V1AccountBadgeStats = {
  dollarSchema: "https://api.steamsets.com/schemas/V1AccountBadgeStats.json",
  count: {
    foils: 934062,
    normals: 560458,
    specials: 856706,
  },
  levels: {
    "key": 947552,
    "key1": 691615,
    "key2": 416631,
  },
  scarcities: {
    "key": 653009,
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