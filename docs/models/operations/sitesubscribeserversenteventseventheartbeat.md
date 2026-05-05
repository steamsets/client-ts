# SiteSubscribeServerSentEventsEventHeartbeat

## Example Usage

```typescript
import { SiteSubscribeServerSentEventsEventHeartbeat } from "@steamsets/client-ts/models/operations";

let value: SiteSubscribeServerSentEventsEventHeartbeat = {
  data: {
    heartbeat: 264709,
  },
  event: "heartbeat",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [components.SiteSubscribeHeartbeat](../../models/components/sitesubscribeheartbeat.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `event`                                                                                | *"heartbeat"*                                                                          | :heavy_check_mark:                                                                     | The event name.                                                                        |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | The event ID.                                                                          |
| `retry`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The retry time in milliseconds.                                                        |