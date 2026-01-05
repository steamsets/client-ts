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
  appId: 248581,
  appImage: "<value>",
  appName: "<value>",
  badgeId: "<id>",
  badgeImage: "<value>",
  baseLevel: 275913,
  baseXp: 768171,
  firstCompletion: new Date("2024-02-27T13:20:22.579Z"),
  highestLevel: 568643,
  isEvent: true,
  isFoil: false,
  isSale: false,
  lastCompletion: new Date("2024-09-26T20:19:11.922Z"),
  name: "<value>",
  price: 875714,
  scarcity: 977476,
  steamId: 873525,
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