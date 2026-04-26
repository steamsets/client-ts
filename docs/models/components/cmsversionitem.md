# CmsVersionItem

## Example Usage

```typescript
import { CmsVersionItem } from "@steamsets/client-ts/models/components";

let value: CmsVersionItem = {
  createdAt: new Date("2026-03-05T05:09:01.871Z"),
  createdBy: 137988,
  documentUid: "<id>",
  payload: "<value>",
  uid: "<id>",
  versionNumber: 369517,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `documentUid`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `note`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `payload`                                                                                     | *any*                                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `uid`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `versionNumber`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |