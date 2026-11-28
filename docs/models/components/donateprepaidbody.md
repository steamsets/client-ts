# DonatePrepaidBody

## Example Usage

```typescript
import { DonatePrepaidBody } from "@steamsets/client-ts/models/components";

let value: DonatePrepaidBody = {
  dollarSchema: "https://api.steamsets.com/schemas/DonatePrepaidBody.json",
  balanceCents: 8000,
  keyCents: 160,
  options: [
    {
      months: 16,
      priceCents: 1000,
      tier: "tier_1",
    },
  ],
  paid: {
    month: "2026-11",
    tier: "tier_1",
  },
  tier: "tier_1",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | A URL to the JSON Schema for this object.                                            | https://api.steamsets.com/schemas/DonatePrepaidBody.json                             |
| `balanceCents`                                                                       | *number*                                                                             | :heavy_check_mark:                                                                   | What is left to spend on tier months, in cents                                       | 8000                                                                                 |
| `keyCents`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | What one TF2 key credits, in cents                                                   | 160                                                                                  |
| `options`                                                                            | [components.DonatePrepaidOption](../../models/components/donateprepaidoption.md)[]   | :heavy_check_mark:                                                                   | What the balance buys at each tier, cheapest first                                   |                                                                                      |
| `paid`                                                                               | [components.DonatePrepaidPaid](../../models/components/donateprepaidpaid.md)         | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `tier`                                                                               | [components.DonatePrepaidBodyTier](../../models/components/donateprepaidbodytier.md) | :heavy_check_mark:                                                                   | The tier the balance pays for from the next unpaid month                             | tier_1                                                                               |