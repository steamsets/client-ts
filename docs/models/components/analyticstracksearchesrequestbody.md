# AnalyticsTrackSearchesRequestBody

## Example Usage

```typescript
import { AnalyticsTrackSearchesRequestBody } from "@steamsets/client-ts/models/components";

let value: AnalyticsTrackSearchesRequestBody = {
  events: [
    {
      chips: [
        {
          key: "type",
          value: "foil",
        },
      ],
      kind: "open",
      query: "<value>",
      queryId: "d8d4a7ee-0cd7-4a40-aeff-1214cecc2dd7",
      surface: "badges",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `events`                                                           | [components.SearchEvent](../../models/components/searchevent.md)[] | :heavy_check_mark:                                                 | Up to 50 events                                                    |