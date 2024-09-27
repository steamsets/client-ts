# BadgeSearch

## Example Usage

```typescript
import { BadgeSearch } from "@steamsets/client-ts/models/components";

let value: BadgeSearch = {
  appId: 123456,
  appIds: [
    444,
    730,
  ],
  badgeId: "bdg_123",
  badgeIds: [
    "bdg_123",
    "bdg_456",
  ],
  colorSearch: [
    {
      "key": [
        "<value>",
      ],
    },
  ],
  isEvent: true,
  isFoil: true,
  isSale: true,
  limit: 10,
  offset: 0,
  typeSearch: [
    {
      "key": [
        "<value>",
      ],
    },
  ],
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `appId`                                 | *number*                                | :heavy_check_mark:                      | The app id                              | 123456                                  |
| `appIds`                                | *number*[]                              | :heavy_check_mark:                      | The app ids                             | [<br/>444,<br/>730<br/>]                |
| `badgeId`                               | *string*                                | :heavy_check_mark:                      | The badge id                            | bdg_123                                 |
| `badgeIds`                              | *string*[]                              | :heavy_check_mark:                      | The badge ids                           | [<br/>"bdg_123",<br/>"bdg_456"<br/>]    |
| `colorSearch`                           | Record<string, *string*[]>[]            | :heavy_check_mark:                      | The color tags you want to search for   |                                         |
| `isEvent`                               | *boolean*                               | :heavy_check_mark:                      | Whether to include/exclude event badges | true                                    |
| `isFoil`                                | *boolean*                               | :heavy_check_mark:                      | Whether to include/exclude foil badges  | true                                    |
| `isSale`                                | *boolean*                               | :heavy_check_mark:                      | Whether to include/exclude sale badges  | true                                    |
| `limit`                                 | *number*                                | :heavy_check_mark:                      | The limit of results                    | 10                                      |
| `offset`                                | *number*                                | :heavy_check_mark:                      | The offset of results                   | 0                                       |
| `typeSearch`                            | Record<string, *string*[]>[]            | :heavy_check_mark:                      | The tags you want to search for         |                                         |