# AdminBotListEntry

## Example Usage

```typescript
import { AdminBotListEntry } from "@steamsets/client-ts/models/components";

let value: AdminBotListEntry = {
  createdAt: new Date("2026-01-27T07:27:38.848Z"),
  id: 91402,
  listingFeePaid: true,
  name: "<value>",
  ownerAccountId: 896906,
  pushedAt: new Date("2026-02-12T00:25:36.073Z"),
  source: "<value>",
  status: "<value>",
  steamId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `listingFeePaid`                                                                              | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Staff confirmed the one-key listing fee. Scrape bots pay none.                                |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ownerAccountId`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | 0 for scraped bots                                                                            |
| `pushedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `steamId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |