# KvListEntry

## Example Usage

```typescript
import { KvListEntry } from "@steamsets/client-ts/models/components";

let value: KvListEntry = {
  key: "<key>",
  namespace: "<value>",
  updatedAt: new Date("2025-04-30T20:00:28.466Z"),
  value: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `key`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `namespace`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |