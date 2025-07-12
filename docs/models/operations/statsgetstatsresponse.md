# StatsGetStatsResponse

## Example Usage

```typescript
import { StatsGetStatsResponse } from "@steamsets/client-ts/models/operations";

let value: StatsGetStatsResponse = {
  headers: {},
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `v1Stats`                                                          | [components.V1Stats](../../models/components/v1stats.md)           | :heavy_minus_sign:                                                 | OK                                                                 |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |