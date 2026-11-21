# BotStatsDay

## Example Usage

```typescript
import { BotStatsDay } from "@steamsets/client-ts/models/components";
import { RFCDate } from "@steamsets/client-ts/types";

let value: BotStatsDay = {
  click: 58587,
  day: new RFCDate("2026-11-11"),
  list: 822123,
  page: 233583,
  plan: 590832,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `click`                           | *number*                          | :heavy_check_mark:                | N/A                               |                                   |
| `day`                             | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | The UTC day.                      | 2026-11-11                        |
| `list`                            | *number*                          | :heavy_check_mark:                | N/A                               |                                   |
| `page`                            | *number*                          | :heavy_check_mark:                | N/A                               |                                   |
| `plan`                            | *number*                          | :heavy_check_mark:                | N/A                               |                                   |