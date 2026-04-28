# ComparedTuple

## Example Usage

```typescript
import { ComparedTuple } from "@steamsets/client-ts/models/components";

let value: ComparedTuple = {
  accounts: [
    {
      level: 66480,
      steamId: "<id>",
      xp: 418270,
    },
  ],
  appId: 551997,
  appImage: "<value>",
  appName: "<value>",
  appType: "<value>",
  badgeImage: "<value>",
  badgeName: "<value>",
  isEvent: false,
  isFoil: false,
  isSale: true,
  maxLevel: 193739,
  scarcity: 947544,
  steamId: 288711,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accounts`                                                           | [components.TupleAccount](../../models/components/tupleaccount.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `appId`                                                              | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `appImage`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `appName`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `appType`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `badgeImage`                                                         | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `badgeName`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `isEvent`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `isFoil`                                                             | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `isSale`                                                             | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `maxLevel`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `scarcity`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `steamId`                                                            | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |