# Badge

## Example Usage

```typescript
import { Badge } from "@steamsets/client-ts/models/components";

let value: Badge = {
  vectors: {
    image: null,
  },
  appId: 353936,
  appImage: "<value>",
  appName: "<value>",
  bookmarks: 775541,
  cardCount: 241602,
  colors: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  designs: [
    "<value 1>",
  ],
  firstCompletion: 781190,
  highestLevel: 719260,
  id: "<id>",
  image: "https://picsum.photos/seed/GZhEwPesr/2136/198",
  isEvent: true,
  isFoil: true,
  isNmc: true,
  isSale: true,
  lastChangedAt: 695081,
  lastCompletion: 554725,
  level: 705781,
  name: "<value>",
  noListing: true,
  scarcity: 632242,
  steamId: 11725,
  xp: 2589.14,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `vectors`                                                | [components.Vectors](../../models/components/vectors.md) | :heavy_check_mark:                                       | N/A                                                      |
| `appId`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `appImage`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `appName`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `bookmarks`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `cardCount`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `colors`                                                 | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `craftCost`                                              | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `designs`                                                | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `firstCompletion`                                        | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `highestLevel`                                           | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `image`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `isEvent`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `isFoil`                                                 | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `isNmc`                                                  | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `isSale`                                                 | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `lastChangedAt`                                          | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `lastCompletion`                                         | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `level`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `noListing`                                              | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `scarcity`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `steamId`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `xp`                                                     | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |