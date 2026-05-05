# EventStatsHeartbeat

## Example Usage

```typescript
import { EventStatsHeartbeat } from "@steamsets/client-ts/models/operations";

let value: EventStatsHeartbeat = {
  data: {
    heartbeat: 224657,
  },
  event: "stats-heartbeat",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [components.EventStatsHeartbeatData](../../models/components/eventstatsheartbeatdata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `event`                                                                                  | *"stats-heartbeat"*                                                                      | :heavy_check_mark:                                                                       | The event name.                                                                          |
| `id`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | The event ID.                                                                            |
| `retry`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | The retry time in milliseconds.                                                          |