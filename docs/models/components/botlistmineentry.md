# BotListMineEntry

## Example Usage

```typescript
import { BotListMineEntry } from "@steamsets/client-ts/models/components";

let value: BotListMineEntry = {
  createdAt: new Date("2024-08-16T11:32:50.237Z"),
  id: 186645,
  listingFeePaid: false,
  name: "<value>",
  pushedAt: new Date("2024-09-13T22:29:13.063Z"),
  status: "rejected",
  steamId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `listingFeePaid`                                                                              | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pushedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last push. Null when the bot never pushed.                                                    |
| `status`                                                                                      | [components.BotListMineEntryStatus](../../models/components/botlistmineentrystatus.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `steamId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |