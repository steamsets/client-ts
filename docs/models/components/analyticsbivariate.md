# AnalyticsBivariate

## Example Usage

```typescript
import { AnalyticsBivariate } from "@steamsets/client-ts/models/components";

let value: AnalyticsBivariate = {
  dollarSchema: "https://api.steamsets.com/schemas/AnalyticsBivariate.json",
  buckets: [
    {
      count: 877592,
      xBucket: 3612.32,
      yValue: 5476.25,
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | A URL to the JSON Schema for this object.                                                    | https://api.steamsets.com/schemas/AnalyticsBivariate.json                                    |
| `buckets`                                                                                    | [components.AnalyticsBivariateBucket](../../models/components/analyticsbivariatebucket.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |