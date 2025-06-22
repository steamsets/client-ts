# V1BadgeSet

## Example Usage

```typescript
import { V1BadgeSet } from "@steamsets/client-ts/models/components";

let value: V1BadgeSet = {
  appId: 990906,
  avgCardPrc: 180654,
  badges: {},
  canBuy: true,
  cards: 652505,
  currLevel: 841085,
  isFoil: true,
  issues: [],
  link: "<value>",
  maxPrc: 218358,
  minPrc: 465658,
  price: 705811,
  priceDiff: 317206,
  setCount: {
    duplicateSets: 838751,
    uniqueSets: 384992,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `appId`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `avgCardPrc`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `badges`                                                                           | Record<string, [components.V1BadgeLevel](../../models/components/v1badgelevel.md)> | :heavy_check_mark:                                                                 | N/A                                                                                |
| `canBuy`                                                                           | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `cards`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `currLevel`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `isFoil`                                                                           | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `issues`                                                                           | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `link`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `maxPrc`                                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `minPrc`                                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `price`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `priceDiff`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `setCount`                                                                         | [components.V1BadgeSetCount](../../models/components/v1badgesetcount.md)           | :heavy_check_mark:                                                                 | N/A                                                                                |