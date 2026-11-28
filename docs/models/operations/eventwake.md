# EventWake

## Example Usage

```typescript
import { EventWake } from "@steamsets/client-ts/models/operations";

let value: EventWake = {
  data: {
    topic: "<value>",
  },
  event: "wake",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [components.LiveSubscribeWake](../../models/components/livesubscribewake.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `event`                                                                      | *"wake"*                                                                     | :heavy_check_mark:                                                           | The event name.                                                              |
| `id`                                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | The event ID.                                                                |
| `retry`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | The retry time in milliseconds.                                              |