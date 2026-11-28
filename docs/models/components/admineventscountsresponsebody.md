# AdminEventsCountsResponseBody

## Example Usage

```typescript
import { AdminEventsCountsResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminEventsCountsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminEventsCountsResponseBody.json",
  at: new Date("2026-04-26T15:01:16.452Z"),
  counts: [],
  today: 130074,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/AdminEventsCountsResponseBody.json                          |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the counts were read. A client adds the events it streams after this.                    |                                                                                               |
| `counts`                                                                                      | [components.AdminEventsCount](../../models/components/admineventscount.md)[]                  | :heavy_check_mark:                                                                            | One entry per kind and severity that had events in the last hour.                             |                                                                                               |
| `today`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Events since midnight UTC.                                                                    |                                                                                               |