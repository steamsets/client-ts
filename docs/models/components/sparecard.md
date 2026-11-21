# SpareCard

## Example Usage

```typescript
import { SpareCard } from "@steamsets/client-ts/models/components";

let value: SpareCard = {
  appId: 578920,
  appName: "<value>",
  badgeImage: "<value>",
  badgeLevel: 800019,
  classId: 867140,
  icon: "<value>",
  isFoil: false,
  name: "<value>",
  owned: 512478,
  spare: 661081,
  type: 298593,
  wanters: 153476,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `appId`                                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `appName`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `badgeImage`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The art of that badge level, or of level 1 when none is crafted                                                    |
| `badgeLevel`                                                                                                       | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | The level the account crafted of this card's badge, 0 for none                                                     |
| `classId`                                                                                                          | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `icon`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Steam economy image hash, or a full URL                                                                            |
| `isFoil`                                                                                                           | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `owned`                                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Copies the account owns                                                                                            |
| `spare`                                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Copies left after the copies the account's badge still needs                                                       |
| `type`                                                                                                             | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Trading item type: 1 and 2 are normal cards, 3 and 4 foil cards                                                    |
| `wanters`                                                                                                          | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Accounts that want the card and do not own it: they watch it, have it on their wishlist or need it to finish a set |