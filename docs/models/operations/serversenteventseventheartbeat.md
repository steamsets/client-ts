# ServerSentEventsEventHeartbeat

## Example Usage

```typescript
import { ServerSentEventsEventHeartbeat } from "@steamsets/client-ts/models/operations";

let value: ServerSentEventsEventHeartbeat = {
  data: {
    heartbeat: 357448,
  },
  event: "heartbeat",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.PricingHeartbeat](../../models/components/pricingheartbeat.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `event`                                                                    | *"heartbeat"*                                                              | :heavy_check_mark:                                                         | The event name.                                                            |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | The event ID.                                                              |
| `retry`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | The retry time in milliseconds.                                            |