# V1AccountCompareBadgesResponseBody

## Example Usage

```typescript
import { V1AccountCompareBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountCompareBadgesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountCompareBadgesResponseBody.json",
  appBadges: [
    {
      appId: 896656,
      appImage: "<value>",
      appName: "<value>",
      badgeImage: "<value>",
      badgeName: "<value>",
      foilScarcity: 643352,
      hasFoil: false,
      isEvent: false,
      isSale: false,
      normalScarcity: 613018,
      steamId: 872969,
    },
  ],
  pages: 1,
  totalHits: 1,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | A URL to the JSON Schema for this object.                                                      | https://api.steamsets.com/schemas/V1AccountCompareBadgesResponseBody.json                      |
| `appBadges`                                                                                    | [components.V1AccountComparedAppBadge](../../models/components/v1accountcomparedappbadge.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `pages`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | The number of pages                                                                            | 1                                                                                              |
| `totalHits`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | The total number of hits for all pages                                                         | 1                                                                                              |