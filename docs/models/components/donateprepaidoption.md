# DonatePrepaidOption

## Example Usage

```typescript
import { DonatePrepaidOption } from "@steamsets/client-ts/models/components";

let value: DonatePrepaidOption = {
  months: 16,
  priceCents: 1000,
  tier: "tier_1",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `months`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | How many more months the balance pays for at this tier, after any month already paid     | 16                                                                                       |
| `priceCents`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | What one month of the tier costs, in cents                                               | 1000                                                                                     |
| `tier`                                                                                   | [components.DonatePrepaidOptionTier](../../models/components/donateprepaidoptiontier.md) | :heavy_check_mark:                                                                       | The tier                                                                                 | tier_1                                                                                   |