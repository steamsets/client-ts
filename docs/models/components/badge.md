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
  colors: [
    "<value 1>",
    "<value 2>",
  ],
  designs: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  firstCompletion: 274482,
  highestLevel: 781190,
  id: "<id>",
  image: "https://loremflickr.com/2877/2136?lock=4587574259201405",
  isEvent: false,
  isFoil: false,
  isSale: false,
  lastCompletion: 274437,
  level: 650973,
  name: "<value>",
  scarcity: 530830,
  steamId: 822916,
  xp: 2371.25,
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
| `colors`                                                 | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `designs`                                                | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `firstCompletion`                                        | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `highestLevel`                                           | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `image`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `isEvent`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `isFoil`                                                 | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `isSale`                                                 | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `lastCompletion`                                         | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `level`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `scarcity`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `steamId`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `xp`                                                     | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |