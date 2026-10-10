# AccountNotificationCardAcquired

## Example Usage

```typescript
import { AccountNotificationCardAcquired } from "@steamsets/client-ts/models/components";

let value: AccountNotificationCardAcquired = {
  appId: 339756,
  appName: "<value>",
  cardName: "<value>",
  holderId: 291445,
  holderName: "<value>",
  holderSteamId: "<id>",
  icon: "<value>",
  isFoil: true,
  itemId: "<id>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `appId`                                       | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `appName`                                     | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `cardName`                                    | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `holderId`                                    | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `holderName`                                  | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `holderSteamId`                               | *string*                                      | :heavy_check_mark:                            | SteamID64 of the holder, for the profile link |
| `icon`                                        | *string*                                      | :heavy_check_mark:                            | Steam economy image hash, or a full URL       |
| `isFoil`                                      | *boolean*                                     | :heavy_check_mark:                            | N/A                                           |
| `itemId`                                      | *string*                                      | :heavy_check_mark:                            | N/A                                           |