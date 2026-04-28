# EventActivityHeartbeat

## Example Usage

```typescript
import { EventActivityHeartbeat } from "@steamsets/client-ts/models/operations";

let value: EventActivityHeartbeat = {
  data: {
    heartbeat: 154856,
  },
  event: "activity-heartbeat",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [components.V1ActivityStreamHeartbeat](../../models/components/v1activitystreamheartbeat.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `event`                                                                                      | *"activity-heartbeat"*                                                                       | :heavy_check_mark:                                                                           | The event name.                                                                              |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | The event ID.                                                                                |
| `retry`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | The retry time in milliseconds.                                                              |