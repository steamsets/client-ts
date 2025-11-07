# DeveloperAppAnalyticsLast24Hours

## Example Usage

```typescript
import { DeveloperAppAnalyticsLast24Hours } from "@steamsets/client-ts/models/components";

let value: DeveloperAppAnalyticsLast24Hours = {
  failedRequests: 358,
  outcomeBreakdown: [],
  successRate: 96.5,
  successfulRequests: 9876,
  totalRequests: 10234,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `failedRequests`                                                                                     | *number*                                                                                             | :heavy_check_mark:                                                                                   | Number of failed requests (non-VALID outcomes)                                                       | 358                                                                                                  |
| `outcomeBreakdown`                                                                                   | [components.DeveloperAppAnalyticsOutcome](../../models/components/developerappanalyticsoutcome.md)[] | :heavy_check_mark:                                                                                   | Breakdown of requests by outcome                                                                     |                                                                                                      |
| `successRate`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | Success rate as a percentage                                                                         | 96.5                                                                                                 |
| `successfulRequests`                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | Number of successful requests (VALID outcome)                                                        | 9876                                                                                                 |
| `totalRequests`                                                                                      | *number*                                                                                             | :heavy_check_mark:                                                                                   | Total number of requests in the last 24 hours                                                        | 10234                                                                                                |