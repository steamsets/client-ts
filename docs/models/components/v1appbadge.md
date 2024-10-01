# V1AppBadge

## Example Usage

```typescript
import { V1AppBadge } from "@steamsets/client-ts/models/components";

let value: V1AppBadge = {
  accountBadge: {
    completedAt: new Date("2024-11-10T06:13:54.282Z"),
    level: 687488,
    xp: 215507,
  },
  badgeImage: "<value>",
  firstCompletion: new Date("2024-11-04T07:38:09.644Z"),
  highestLevel: 730856,
  isFoil: false,
  lastCompletion: new Date("2022-10-06T07:40:51.480Z"),
  level: 213312,
  name: "<value>",
  price: 518201,
  publicId: "<id>",
  scarcity: 25662,
  steamId: 207470,
  xp: 424685,
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