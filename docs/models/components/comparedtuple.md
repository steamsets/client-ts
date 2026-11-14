# ComparedTuple

## Example Usage

```typescript
import { ComparedTuple } from "@steamsets/client-ts/models/components";

let value: ComparedTuple = {
  accounts: [
    {
      level: 551997,
      xp: 512251,
    },
  ],
  appId: 526393,
  appImage: "<value>",
  appName: "<value>",
  appType: "<value>",
  badgeImage: "<value>",
  badgeName: "<value>",
  isEvent: true,
  isFoil: true,
  isSale: false,
  maxLevel: 288711,
  scarcity: 564412,
  steamId: 16287,
  trackedHolders: 182132,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accounts`                                                                  | [components.TupleAccount](../../models/components/tupleaccount.md)[]        | :heavy_check_mark:                                                          | One entry per compared account, in the same order as the top-level accounts |
| `appId`                                                                     | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `appImage`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `appName`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `appType`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `badgeImage`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `badgeName`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `isEvent`                                                                   | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `isFoil`                                                                    | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `isSale`                                                                    | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `maxLevel`                                                                  | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `scarcity`                                                                  | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `steamId`                                                                   | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `trackedHolders`                                                            | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |