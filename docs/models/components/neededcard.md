# NeededCard

## Example Usage

```typescript
import { NeededCard } from "@steamsets/client-ts/models/components";

let value: NeededCard = {
  appId: 889198,
  appName: "<value>",
  badgeImage: "<value>",
  badgeLevel: 150595,
  classId: 998608,
  holders: 553919,
  icon: "<value>",
  isFoil: true,
  missingInSet: 268946,
  name: "<value>",
  type: 811433,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `appId`                                                         | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `appName`                                                       | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `badgeImage`                                                    | *string*                                                        | :heavy_check_mark:                                              | The art of that badge level, or of level 1 when none is crafted |
| `badgeLevel`                                                    | *number*                                                        | :heavy_check_mark:                                              | The level the account crafted of this card's badge, 0 for none  |
| `classId`                                                       | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `holders`                                                       | *number*                                                        | :heavy_check_mark:                                              | Accounts with a copy their badge does not need                  |
| `icon`                                                          | *string*                                                        | :heavy_check_mark:                                              | Steam economy image hash, or a full URL                         |
| `isFoil`                                                        | *boolean*                                                       | :heavy_check_mark:                                              | N/A                                                             |
| `missingInSet`                                                  | *number*                                                        | :heavy_check_mark:                                              | How many cards of the set the account lacks                     |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `type`                                                          | *number*                                                        | :heavy_check_mark:                                              | Trading item type: 1 and 2 are normal cards, 3 and 4 foil cards |