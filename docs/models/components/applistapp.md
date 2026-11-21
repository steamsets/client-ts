# AppListApp

## Example Usage

```typescript
import { AppListApp } from "@steamsets/client-ts/models/components";

let value: AppListApp = {
  appId: 315065,
  cardCount: 39074,
  hasFoil: true,
  hasNormal: true,
  name: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `appId`                                                           | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `cardCount`                                                       | *number*                                                          | :heavy_check_mark:                                                | Trading cards in one set. A foil set has as many as a normal one. |
| `hasFoil`                                                         | *boolean*                                                         | :heavy_check_mark:                                                | The app has a foil badge.                                         |
| `hasNormal`                                                       | *boolean*                                                         | :heavy_check_mark:                                                | The app has a normal badge.                                       |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |