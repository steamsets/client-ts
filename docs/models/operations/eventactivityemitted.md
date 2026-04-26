# EventActivityEmitted

## Example Usage

```typescript
import { EventActivityEmitted } from "@steamsets/client-ts/models/operations";

let value: EventActivityEmitted = {
  data: {
    accountId: 72064,
    eventType: "<value>",
    occurredAt: new Date("2025-10-05T02:03:08.232Z"),
  },
  event: "activity-emitted",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [components.V1ActivityStreamFeedEvent](../../models/components/v1activitystreamfeedevent.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `event`                                                                                      | *"activity-emitted"*                                                                         | :heavy_check_mark:                                                                           | The event name.                                                                              |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | The event ID.                                                                                |
| `retry`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | The retry time in milliseconds.                                                              |