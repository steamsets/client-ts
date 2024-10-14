# V1AppBadge

## Example Usage

```typescript
import { V1AppBadge } from "@steamsets/client-ts/models/components";

let value: V1AppBadge = {
  accountBadge: {
    completedAt: new Date("2022-09-11T22:40:46.497Z"),
    level: 949319,
    xp: 941378,
  },
  badgeImage: "<value>",
  firstCompletion: new Date("2024-05-25T22:13:29.488Z"),
  highestLevel: 630448,
  isFoil: false,
  lastCompletion: new Date("2024-08-16T05:16:14.427Z"),
  level: 293020,
  name: "<value>",
  price: 848944,
  publicId: "<id>",
  scarcity: 617877,
  steamId: 13236,
  xp: 347233,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountBadge`                                                                                | [components.V1AccountBadgeCompletion](../../models/components/v1accountbadgecompletion.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `badgeImage`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `firstCompletion`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `highestLevel`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isFoil`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastCompletion`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `level`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `price`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `publicId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scarcity`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `steamId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `xp`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |