# FeatureUsageEvent

## Example Usage

```typescript
import { FeatureUsageEvent } from "@steamsets/client-ts/models/components";

let value: FeatureUsageEvent = {
  event: "filter-change",
  eventSeries: [
    545209,
    315241,
  ],
  events: 188540,
  eventsPrevious: 154556,
  feature: "badge-search",
  sessions: 142412,
  sessionsPrevious: 988284,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `event`                                        | *string*                                       | :heavy_check_mark:                             | N/A                                            | filter-change                                  |
| `eventSeries`                                  | *number*[]                                     | :heavy_check_mark:                             | Events per bucket, aligned with bucketStartsAt |                                                |
| `events`                                       | *number*                                       | :heavy_check_mark:                             | N/A                                            |                                                |
| `eventsPrevious`                               | *number*                                       | :heavy_check_mark:                             | N/A                                            |                                                |
| `feature`                                      | *string*                                       | :heavy_check_mark:                             | N/A                                            | badge-search                                   |
| `sessions`                                     | *number*                                       | :heavy_check_mark:                             | N/A                                            |                                                |
| `sessionsPrevious`                             | *number*                                       | :heavy_check_mark:                             | N/A                                            |                                                |