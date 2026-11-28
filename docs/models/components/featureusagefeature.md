# FeatureUsageFeature

## Example Usage

```typescript
import { FeatureUsageFeature } from "@steamsets/client-ts/models/components";

let value: FeatureUsageFeature = {
  eventSessions: 816660,
  eventSessionsPrevious: 687148,
  events: 735562,
  eventsPrevious: 698028,
  feature: "badge-search",
  viewSessionSeries: [
    506977,
  ],
  viewSessions: 444353,
  viewSessionsPrevious: 968222,
  views: 483896,
  viewsPrevious: 626282,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `eventSessions`                                                   | *number*                                                          | :heavy_check_mark:                                                | Sessions with a custom event                                      |                                                                   |
| `eventSessionsPrevious`                                           | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `events`                                                          | *number*                                                          | :heavy_check_mark:                                                | Custom events                                                     |                                                                   |
| `eventsPrevious`                                                  | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `feature`                                                         | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               | badge-search                                                      |
| `viewSessionSeries`                                               | *number*[]                                                        | :heavy_check_mark:                                                | Sessions with a page view per bucket, aligned with bucketStartsAt |                                                                   |
| `viewSessions`                                                    | *number*                                                          | :heavy_check_mark:                                                | Sessions with a page view                                         |                                                                   |
| `viewSessionsPrevious`                                            | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `views`                                                           | *number*                                                          | :heavy_check_mark:                                                | Page views in the window                                          |                                                                   |
| `viewsPrevious`                                                   | *number*                                                          | :heavy_check_mark:                                                | Page views in the window before                                   |                                                                   |