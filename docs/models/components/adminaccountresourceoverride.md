# AdminAccountResourceOverride

## Example Usage

```typescript
import { AdminAccountResourceOverride } from "@steamsets/client-ts/models/components";

let value: AdminAccountResourceOverride = {
  updatedAt: new Date("2024-11-03T14:34:34.778Z"),
  updatedBy: 874001,
  updatedByName: "<value>",
  value: "60000",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | When staff set the override. Null on overrides set before this was recorded                         |                                                                                                     |
| `updatedBy`                                                                                         | *number*                                                                                            | :heavy_check_mark:                                                                                  | Account id of the staff member who set the override. Null on overrides set before this was recorded |                                                                                                     |
| `updatedByName`                                                                                     | *string*                                                                                            | :heavy_check_mark:                                                                                  | Name of the staff member who set the override                                                       |                                                                                                     |
| `value`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | The override value                                                                                  | 60000                                                                                               |