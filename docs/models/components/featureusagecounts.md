# FeatureUsageCounts

## Example Usage

```typescript
import { FeatureUsageCounts } from "@steamsets/client-ts/models/components";

let value: FeatureUsageCounts = {
  eventSessions: 532602,
  eventSessionsPrevious: 911834,
  events: 395939,
  eventsPrevious: 377554,
  viewSessions: 863169,
  viewSessionsPrevious: 136507,
  views: 13939,
  viewsPrevious: 214162,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `eventSessions`                 | *number*                        | :heavy_check_mark:              | Sessions with a custom event    |
| `eventSessionsPrevious`         | *number*                        | :heavy_check_mark:              | N/A                             |
| `events`                        | *number*                        | :heavy_check_mark:              | Custom events                   |
| `eventsPrevious`                | *number*                        | :heavy_check_mark:              | N/A                             |
| `viewSessions`                  | *number*                        | :heavy_check_mark:              | Sessions with a page view       |
| `viewSessionsPrevious`          | *number*                        | :heavy_check_mark:              | N/A                             |
| `views`                         | *number*                        | :heavy_check_mark:              | Page views in the window        |
| `viewsPrevious`                 | *number*                        | :heavy_check_mark:              | Page views in the window before |