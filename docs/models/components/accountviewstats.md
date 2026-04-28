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

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `dollarSchema`                                          | *string*                                                | :heavy_minus_sign:                                      | A URL to the JSON Schema for this object.               | https://api.steamsets.com/schemas/AccountViewStats.json |
| `total24h`                                              | *number*                                                | :heavy_check_mark:                                      | Total profile loads in the last 24 hours                |                                                         |
| `total30d`                                              | *number*                                                | :heavy_check_mark:                                      | Total profile loads in the last 30 days                 |                                                         |
| `total7d`                                               | *number*                                                | :heavy_check_mark:                                      | Total profile loads in the last 7 days                  |                                                         |
| `unique24h`                                             | *number*                                                | :heavy_check_mark:                                      | Distinct viewers in the last 24 hours                   |                                                         |
| `unique30d`                                             | *number*                                                | :heavy_check_mark:                                      | Distinct viewers in the last 30 days                    |                                                         |
| `unique7d`                                              | *number*                                                | :heavy_check_mark:                                      | Distinct viewers in the last 7 days                     |                                                         |