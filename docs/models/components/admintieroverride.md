# AdminTierOverride

## Example Usage

```typescript
import { AdminTierOverride } from "@steamsets/client-ts/models/components";

let value: AdminTierOverride = {
  createdAt: new Date("2025-09-30T15:53:56.306Z"),
  createdBy: 1216167888,
  createdByName: "<value>",
  reason: "PayPal donation",
  tier: "tier_2",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When staff set the override                                                                   |                                                                                               |
| `createdBy`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Account id of the staff member who set the override                                           | 1216167888                                                                                    |
| `createdByName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the staff member who set the override                                                 |                                                                                               |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The staff-facing reason for the override, empty when none was given                           | PayPal donation                                                                               |
| `tier`                                                                                        | [components.Tier](../../models/components/tier.md)                                            | :heavy_check_mark:                                                                            | The tier the override sets                                                                    | tier_2                                                                                        |