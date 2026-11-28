# DonatePrepaidPaid

## Example Usage

```typescript
import { DonatePrepaidPaid } from "@steamsets/client-ts/models/components";

let value: DonatePrepaidPaid = {
  month: "2026-11",
  tier: "tier_1",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `month`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | The month that is paid, UTC                                                          | 2026-11                                                                              |
| `tier`                                                                               | [components.DonatePrepaidPaidTier](../../models/components/donateprepaidpaidtier.md) | :heavy_check_mark:                                                                   | The tier this month is paid for                                                      | tier_1                                                                               |