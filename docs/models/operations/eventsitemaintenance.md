# EventSiteMaintenance

## Example Usage

```typescript
import { EventSiteMaintenance } from "@steamsets/client-ts/models/operations";

let value: EventSiteMaintenance = {
  data: {
    value: {
      announcements: [],
      items: [],
    },
  },
  event: "site.maintenance",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `data`                                                                                             | [components.LiveSubscribeSiteMaintenance](../../models/components/livesubscribesitemaintenance.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `event`                                                                                            | *"site.maintenance"*                                                                               | :heavy_check_mark:                                                                                 | The event name.                                                                                    |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The event ID.                                                                                      |
| `retry`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The retry time in milliseconds.                                                                    |