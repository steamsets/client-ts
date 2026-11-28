# FeatureUsagePageRow

## Example Usage

```typescript
import { FeatureUsagePageRow } from "@steamsets/client-ts/models/components";

let value: FeatureUsagePageRow = {
  eventSessions: 430135,
  eventSessionsPrevious: 465399,
  events: 47987,
  eventsPrevious: 354700,
  feature: "tools",
  page: "handshake",
  viewSessionSeries: [
    778888,
    933704,
    917252,
  ],
  viewSessions: 46291,
  viewSessionsPrevious: 920028,
  views: 277902,
  viewsPrevious: 812407,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `eventSessions`                                                   | *number*                                                          | :heavy_check_mark:                                                | Sessions with a custom event                                      |                                                                   |
| `eventSessionsPrevious`                                           | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `events`                                                          | *number*                                                          | :heavy_check_mark:                                                | Custom events                                                     |                                                                   |
| `eventsPrevious`                                                  | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `feature`                                                         | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               | tools                                                             |
| `page`                                                            | *string*                                                          | :heavy_check_mark:                                                | The page's key, or other-pages                                    | handshake                                                         |
| `viewSessionSeries`                                               | *number*[]                                                        | :heavy_check_mark:                                                | Sessions with a page view per bucket, aligned with bucketStartsAt |                                                                   |
| `viewSessions`                                                    | *number*                                                          | :heavy_check_mark:                                                | Sessions with a page view                                         |                                                                   |
| `viewSessionsPrevious`                                            | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `views`                                                           | *number*                                                          | :heavy_check_mark:                                                | Page views in the window                                          |                                                                   |
| `viewsPrevious`                                                   | *number*                                                          | :heavy_check_mark:                                                | Page views in the window before                                   |                                                                   |