# AdminSearchQueriesSurface

## Example Usage

```typescript
import { AdminSearchQueriesSurface } from "@steamsets/client-ts/models/components";

let value: AdminSearchQueriesSurface = {
  latencyP50Ms: 1696.23,
  opened: 177422,
  searches: 532857,
  semantic: 937663,
  surface: "badges",
  withChips: 231855,
  zeroResults: 396957,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `latencyP50Ms`                                                             | *number*                                                                   | :heavy_check_mark:                                                         | Median milliseconds from settling to results; 0 when none was measured     |                                                                            |
| `opened`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | Settled queries with at least one result opened                            |                                                                            |
| `searches`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | Settled queries                                                            |                                                                            |
| `semantic`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | Settled queries the visual ranking ran for                                 |                                                                            |
| `surface`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | badges                                                                     |
| `withChips`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | Settled queries the query reader turned at least one word of into a filter |                                                                            |
| `zeroResults`                                                              | *number*                                                                   | :heavy_check_mark:                                                         | Settled queries that found nothing                                         |                                                                            |