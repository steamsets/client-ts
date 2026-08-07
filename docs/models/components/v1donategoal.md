# V1DonateGoal

## Example Usage

```typescript
import { V1DonateGoal } from "@steamsets/client-ts/models/components";

let value: V1DonateGoal = {
  dollarSchema: "https://api.steamsets.com/schemas/V1DonateGoal.json",
  anonymousCount: 3,
  goalCents: 50000,
  month: "2026-08",
  raisedCents: 34200,
  supporterCount: 23,
  supporters: null,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | https://api.steamsets.com/schemas/V1DonateGoal.json                        |
| `anonymousCount`                                                           | *number*                                                                   | :heavy_check_mark:                                                         | Donations this month with no resolvable account                            | 3                                                                          |
| `goalCents`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | Configured monthly goal in cents                                           | 50000                                                                      |
| `month`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | Current calendar month, UTC                                                | 2026-08                                                                    |
| `raisedCents`                                                              | *number*                                                                   | :heavy_check_mark:                                                         | Sum of donation ledger rows this month, in cents                           | 34200                                                                      |
| `supporterCount`                                                           | *number*                                                                   | :heavy_check_mark:                                                         | Distinct accounts plus anonymous donations this month                      | 23                                                                         |
| `supporters`                                                               | [components.DonateSupporter](../../models/components/donatesupporter.md)[] | :heavy_check_mark:                                                         | Newest first, capped at 48. Carries no donation amounts.                   |                                                                            |