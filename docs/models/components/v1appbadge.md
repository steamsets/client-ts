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
  cardCount: 838248,
  firstCompletion: null,
  highestLevel: 568643,
  isEvent: true,
  isFoil: false,
  isNmc: false,
  isSale: true,
  lastCompletion: new Date("2026-08-17T18:46:25.248Z"),
  name: "<value>",
  noListing: false,
  price: 873525,
  scarcity: 943114,
  steamId: 437080,
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
| `cardCount`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Total trading cards Steam defines for this app (per side; foil and normal share the same count)                         |
| `firstCompletion`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `highestLevel`                                                                                                          | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `isEvent`                                                                                                               | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `isFoil`                                                                                                                | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `isNmc`                                                                                                                 | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the cards needed for this badge are non-marketable on Steam (cannot be bought/sold)                             |
| `isSale`                                                                                                                | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `lastCompletion`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `noListing`                                                                                                             | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether none of the cards for this badge currently have a market listing                                                |
| ~~`price`~~                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `scarcity`                                                                                                              | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `steamId`                                                                                                               | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |