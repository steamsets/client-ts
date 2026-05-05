# EventStatsUpdated

## Example Usage

```typescript
import { EventStatsUpdated } from "@steamsets/client-ts/models/operations";

let value: EventStatsUpdated = {
  data: {
    date: "2024-11-19",
    deltas: {
      "key": 215320,
      "key1": 607920,
    },
  },
  event: "stats-updated",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [components.EventStatsUpdatedData](../../models/components/eventstatsupdateddata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `event`                                                                              | *"stats-updated"*                                                                    | :heavy_check_mark:                                                                   | The event name.                                                                      |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The event ID.                                                                        |
| `retry`                                                                              | *number*                                                                             | :heavy_minus_sign:                                                                   | The retry time in milliseconds.                                                      |