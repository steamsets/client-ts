# BotStatsResponseBody

## Example Usage

```typescript
import { BotStatsResponseBody } from "@steamsets/client-ts/models/components";
import { RFCDate } from "@steamsets/client-ts/types";

let value: BotStatsResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/BotStatsResponseBody.json",
  daily: [
    {
      click: 173237,
      day: new RFCDate("2026-11-11"),
      list: 212966,
      page: 467692,
      plan: 201683,
    },
  ],
  totals: {
    click: 560077,
    list: 523409,
    page: 270832,
    plan: 728417,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `dollarSchema`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | A URL to the JSON Schema for this object.                                      | https://api.steamsets.com/schemas/BotStatsResponseBody.json                    |
| `daily`                                                                        | [components.BotStatsDay](../../models/components/botstatsday.md)[]             | :heavy_check_mark:                                                             | One entry per day, oldest first, today last. A day with no visitors has zeros. |                                                                                |
| `totals`                                                                       | [components.BotStatsCounts](../../models/components/botstatscounts.md)         | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |