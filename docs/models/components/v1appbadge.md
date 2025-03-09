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
  appId: 207470,
  appImage: "<value>",
  appName: "<value>",
  badgeId: "<id>",
  badgeImage: "<value>",
  baseLevel: 424685,
  baseXp: 374170,
  firstCompletion: new Date("2024-05-23T01:53:16.665Z"),
  highestLevel: 277628,
  isEvent: false,
  isFoil: false,
  isSale: false,
  lastCompletion: new Date("2024-10-05T02:46:31.617Z"),
  name: "<value>",
  price: 863856,
  scarcity: 117531,
  steamId: 517379,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `accountInfo`                                                                                                           | [components.AccountBadgeInfo](../../models/components/accountbadgeinfo.md)                                              | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `appId`                                                                                                                 | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `appImage`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `appName`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `badgeId`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `badgeImage`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `baseLevel`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The level this badge starts at                                                                                          |
| `baseXp`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The XP the badge gives per level                                                                                        |
| `firstCompletion`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `highestLevel`                                                                                                          | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `isEvent`                                                                                                               | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `isFoil`                                                                                                                | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `isSale`                                                                                                                | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `lastCompletion`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`price`~~                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `scarcity`                                                                                                              | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `steamId`                                                                                                               | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |