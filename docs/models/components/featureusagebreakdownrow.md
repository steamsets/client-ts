# FeatureUsageBreakdownRow

## Example Usage

```typescript
import { FeatureUsageBreakdownRow } from "@steamsets/client-ts/models/components";

let value: FeatureUsageBreakdownRow = {
  events: 40175,
  sessions: 139900,
  split: "/badges/",
  value: "type",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `events`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `sessions`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `split`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | The route id, week (its Monday), day, country code or device type; empty without a split | /badges/                                                                                 |
| `value`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | The property's value as text; empty when the send had none or no property was asked for  | type                                                                                     |