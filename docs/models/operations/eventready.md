# EventReady

## Example Usage

```typescript
import { EventReady } from "@steamsets/client-ts/models/operations";

let value: EventReady = {
  data: {},
  event: "ready",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [components.LiveSubscribeReady](../../models/components/livesubscribeready.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `event`                                                                        | *"ready"*                                                                      | :heavy_check_mark:                                                             | The event name.                                                                |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | The event ID.                                                                  |
| `retry`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | The retry time in milliseconds.                                                |