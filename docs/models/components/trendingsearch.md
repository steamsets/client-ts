# TrendingSearch

## Example Usage

```typescript
import { TrendingSearch } from "@steamsets/client-ts/models/components";

let value: TrendingSearch = {
  query: "<value>",
  totalSearches: 744694,
  uniqueSearchers: 768772,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `query`                             | *string*                            | :heavy_check_mark:                  | The search query as first typed     |
| `totalSearches`                     | *number*                            | :heavy_check_mark:                  | Total times this query was searched |
| `uniqueSearchers`                   | *number*                            | :heavy_check_mark:                  | Distinct searchers in the window    |