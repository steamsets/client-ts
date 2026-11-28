# V1InventoryItem

## Example Usage

```typescript
import { V1InventoryItem } from "@steamsets/client-ts/models/components";

let value: V1InventoryItem = {
  amount: 338646,
  appId: 687711,
  classId: 870078,
  icon: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `amount`                                             | *number*                                             | :heavy_check_mark:                                   | How many the account holds                           |
| `appId`                                              | *number*                                             | :heavy_check_mark:                                   | The app the item belongs to                          |
| `classId`                                            | *number*                                             | :heavy_check_mark:                                   | The item's Steam class id                            |
| `icon`                                               | *string*                                             | :heavy_check_mark:                                   | The icon hash, as Steam's economy image URLs take it |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |