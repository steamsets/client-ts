# BotListMineResponseBody

## Example Usage

```typescript
import { BotListMineResponseBody } from "@steamsets/client-ts/models/components";

let value: BotListMineResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/BotListMineResponseBody.json",
  bots: [
    {
      createdAt: new Date("2025-09-04T11:24:16.870Z"),
      id: 143567,
      listingFeePaid: true,
      name: "<value>",
      pushedAt: new Date("2024-03-03T12:21:00.839Z"),
      status: "pending",
      steamId: "<id>",
    },
  ],
  listingFeeKeys: 751555,
  listingFeeTradeUrl: "https://flawed-essence.com/",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `dollarSchema`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | A URL to the JSON Schema for this object.                                    | https://api.steamsets.com/schemas/BotListMineResponseBody.json               |
| `bots`                                                                       | [components.BotListMineEntry](../../models/components/botlistmineentry.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `listingFeeKeys`                                                             | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `listingFeeTradeUrl`                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |