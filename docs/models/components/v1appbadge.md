# V1AppBadge

## Example Usage

```typescript
import { V1AppBadge } from "@steamsets/client-ts/models/components";

let value: V1AppBadge = {
  accountInfo: {
    completionTime: new Date("2023-01-01T00:00:00Z"),
    level: 123456,
    xp: 123456,
  },
  appId: 132068,
  appImage: "<value>",
  appName: "<value>",
  badgeId: "<id>",
  badgeImage: "<value>",
  baseLevel: 716860,
  baseXp: 396060,
  firstCompletion: new Date("2024-09-11T16:50:31.874Z"),
  highestLevel: 183280,
  isEvent: false,
  isFoil: false,
  isSale: false,
  lastCompletion: new Date("2023-06-08T18:04:31.662Z"),
  name: "<value>",
  price: 488056,
  scarcity: 355613,
  steamId: 940432,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountInfo`                                                                                 | [components.AccountBadgeInfo](../../models/components/accountbadgeinfo.md)                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appId`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `appImage`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `appName`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `badgeId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `badgeImage`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `baseLevel`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | The level this badge starts at                                                                |
| `baseXp`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The XP the badge gives per level                                                              |
| `firstCompletion`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `highestLevel`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isEvent`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isFoil`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isSale`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastCompletion`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `price`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scarcity`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `steamId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |