# FeatureUsagePageEvent

## Example Usage

```typescript
import { FeatureUsagePageEvent } from "@steamsets/client-ts/models/components";

let value: FeatureUsagePageEvent = {
  event: "tools-handshake-start",
  eventSeries: [
    708846,
  ],
  events: 757431,
  eventsPrevious: 609066,
  feature: "tools",
  page: "handshake",
  sessions: 645283,
  sessionsPrevious: 503337,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `event`                                        | *string*                                       | :heavy_check_mark:                             | N/A                                            | tools-handshake-start                          |
| `eventSeries`                                  | *number*[]                                     | :heavy_check_mark:                             | Events per bucket, aligned with bucketStartsAt |                                                |
| `events`                                       | *number*                                       | :heavy_check_mark:                             | N/A                                            |                                                |
| `eventsPrevious`                               | *number*                                       | :heavy_check_mark:                             | N/A                                            |                                                |
| `feature`                                      | *string*                                       | :heavy_check_mark:                             | N/A                                            | tools                                          |
| `page`                                         | *string*                                       | :heavy_check_mark:                             | N/A                                            | handshake                                      |
| `sessions`                                     | *number*                                       | :heavy_check_mark:                             | N/A                                            |                                                |
| `sessionsPrevious`                             | *number*                                       | :heavy_check_mark:                             | N/A                                            |                                                |