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

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                                         | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The search query, lowercased                                                                                                    |
| `totalSearches`                                                                                                                 | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | Searches of this query in the window that found something                                                                       |
| `uniqueSearchers`                                                                                                               | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | Searches of this query in the window that found something. SteamSets stores no searcher identity, so this equals totalSearches. |