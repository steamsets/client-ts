# AccountViewStats

## Example Usage

```typescript
import { AccountViewStats } from "@steamsets/client-ts/models/components";

let value: AccountViewStats = {
  dollarSchema: "https://api.steamsets.com/schemas/AccountViewStats.json",
  total24h: 91121,
  total30d: 110243,
  total7d: 600334,
  unique24h: 484338,
  unique30d: 71201,
  unique7d: 741770,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `dollarSchema`                                                        | *string*                                                              | :heavy_minus_sign:                                                    | A URL to the JSON Schema for this object.                             | https://api.steamsets.com/schemas/AccountViewStats.json               |
| `total24h`                                                            | *number*                                                              | :heavy_check_mark:                                                    | Profile views in the last 24 hours, counting each viewer once per day |                                                                       |
| `total30d`                                                            | *number*                                                              | :heavy_check_mark:                                                    | Profile views in the last 30 days, counting each viewer once per day  |                                                                       |
| `total7d`                                                             | *number*                                                              | :heavy_check_mark:                                                    | Profile views in the last 7 days, counting each viewer once per day   |                                                                       |
| `unique24h`                                                           | *number*                                                              | :heavy_check_mark:                                                    | Distinct viewers in the last 24 hours                                 |                                                                       |
| `unique30d`                                                           | *number*                                                              | :heavy_check_mark:                                                    | Distinct viewers in the last 30 days                                  |                                                                       |
| `unique7d`                                                            | *number*                                                              | :heavy_check_mark:                                                    | Distinct viewers in the last 7 days                                   |                                                                       |