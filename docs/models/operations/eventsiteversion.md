# EventSiteVersion

## Example Usage

```typescript
import { EventSiteVersion } from "@steamsets/client-ts/models/operations";

let value: EventSiteVersion = {
  data: {
    value: {
      app: "<value>",
      builtAt: 829382,
    },
  },
  event: "site.version",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [components.LiveSubscribeSiteVersion](../../models/components/livesubscribesiteversion.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `event`                                                                                    | *"site.version"*                                                                           | :heavy_check_mark:                                                                         | The event name.                                                                            |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | The event ID.                                                                              |
| `retry`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | The retry time in milliseconds.                                                            |