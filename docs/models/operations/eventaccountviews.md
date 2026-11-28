# EventAccountViews

## Example Usage

```typescript
import { EventAccountViews } from "@steamsets/client-ts/models/operations";

let value: EventAccountViews = {
  data: {
    key: "<key>",
    value: {
      totalDelta: 434555,
    },
  },
  event: "account.views",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [components.LiveSubscribeAccountViews](../../models/components/livesubscribeaccountviews.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `event`                                                                                      | *"account.views"*                                                                            | :heavy_check_mark:                                                                           | The event name.                                                                              |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | The event ID.                                                                                |
| `retry`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | The retry time in milliseconds.                                                              |