# SearchGetTrendingResponseBody

## Example Usage

```typescript
import { SearchGetTrendingResponseBody } from "@steamsets/client-ts/models/components";

let value: SearchGetTrendingResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/SearchGetTrendingResponseBody.json",
  searches: [
    {
      query: "<value>",
      totalSearches: 855052,
      uniqueSearchers: 587977,
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `dollarSchema`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | A URL to the JSON Schema for this object.                                | https://api.steamsets.com/schemas/SearchGetTrendingResponseBody.json     |
| `searches`                                                               | [components.TrendingSearch](../../models/components/trendingsearch.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |