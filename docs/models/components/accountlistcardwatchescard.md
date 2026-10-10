# AccountListCardWatchesCard

## Example Usage

```typescript
import { AccountListCardWatchesCard } from "@steamsets/client-ts/models/components";

let value: AccountListCardWatchesCard = {
  appId: 900946,
  appName: "<value>",
  icon: "<value>",
  isFoil: false,
  itemId: "<id>",
  name: "<value>",
  source: "manual",
  watchedAt: new Date("2026-09-13T07:12:24.303Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `appName`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `icon`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Steam economy image hash, or a full URL                                                       |
| `isFoil`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `itemId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [components.Source](../../models/components/source.md)                                        | :heavy_check_mark:                                                                            | manual: watched with the bell. wishlist: watched because it is on the wishlist                |
| `watchedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |