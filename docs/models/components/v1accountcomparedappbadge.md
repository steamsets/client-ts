# V1AccountComparedAppBadge

## Example Usage

```typescript
import { V1AccountComparedAppBadge } from "@steamsets/client-ts/models/components";

let value: V1AccountComparedAppBadge = {
  appId: 407610,
  appImage: "<value>",
  appName: "<value>",
  badgeImage: "<value>",
  badgeName: "<value>",
  foilScarcity: 310747,
  hasFoil: false,
  isEvent: false,
  isSale: false,
  normalScarcity: 618455,
  steamId: 138819,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `appId`                                      | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `appImage`                                   | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `appName`                                    | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `badgeImage`                                 | *string*                                     | :heavy_check_mark:                           | Image URL of the highest badge               |
| `badgeName`                                  | *string*                                     | :heavy_check_mark:                           | Name of the highest badge                    |
| `foil`                                       | Record<string, *boolean*>                    | :heavy_minus_sign:                           | List of steamId and if they own the badge    |
| `foilScarcity`                               | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `hasFoil`                                    | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |
| `isEvent`                                    | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |
| `isSale`                                     | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |
| `normal`                                     | Record<string, *number*>                     | :heavy_minus_sign:                           | A map of steamId to the badge level they own |
| `normalScarcity`                             | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `steamId`                                    | *number*                                     | :heavy_check_mark:                           | N/A                                          |