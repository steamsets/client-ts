# EventAccountViewTick

## Example Usage

```typescript
import { EventAccountViewTick } from "@steamsets/client-ts/models/operations";

let value: EventAccountViewTick = {
  data: {
    accountId: 237226,
    totalDelta: 913095,
  },
  event: "account-view-tick",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [components.EventAccountViewTickData](../../models/components/eventaccountviewtickdata.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `event`                                                                                    | *"account-view-tick"*                                                                      | :heavy_check_mark:                                                                         | The event name.                                                                            |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | The event ID.                                                                              |
| `retry`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | The retry time in milliseconds.                                                            |