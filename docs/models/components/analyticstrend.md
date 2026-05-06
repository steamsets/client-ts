# AnalyticsTrend

## Example Usage

```typescript
import { AnalyticsTrend } from "@steamsets/client-ts/models/components";

let value: AnalyticsTrend = {
  dollarSchema: "https://api.steamsets.com/schemas/AnalyticsTrend.json",
  points: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `dollarSchema`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | A URL to the JSON Schema for this object.                                          | https://api.steamsets.com/schemas/AnalyticsTrend.json                              |
| `points`                                                                           | [components.AnalyticsTrendPoint](../../models/components/analyticstrendpoint.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |