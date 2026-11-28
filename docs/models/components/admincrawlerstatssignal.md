# AdminCrawlerStatsSignal

## Example Usage

```typescript
import { AdminCrawlerStatsSignal } from "@steamsets/client-ts/models/components";

let value: AdminCrawlerStatsSignal = {
  key: "dirty_class_backlog",
  label: "dirty_class backlog",
  status: "late",
  unit: "age",
  updatedAt: new Date("2025-03-30T03:47:39.172Z"),
  value: 657956,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `key`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | dirty_class_backlog                                                                                  |
| `label`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | dirty_class backlog                                                                                  |
| `status`                                                                                             | [components.AdminCrawlerStatsSignalStatus](../../models/components/admincrawlerstatssignalstatus.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `unit`                                                                                               | [components.Unit](../../models/components/unit.md)                                                   | :heavy_check_mark:                                                                                   | age: seconds since something happened, as of now; seconds: a fixed duration; count                   |                                                                                                      |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | When the snapshot cron computed it                                                                   |                                                                                                      |
| `value`                                                                                              | *number*                                                                                             | :heavy_check_mark:                                                                                   | Null when its source could not be read                                                               |                                                                                                      |