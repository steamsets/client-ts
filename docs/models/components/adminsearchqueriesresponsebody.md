# AdminSearchQueriesResponseBody

## Example Usage

```typescript
import { AdminSearchQueriesResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminSearchQueriesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminSearchQueriesResponseBody.json",
  parses: [],
  surfaces: [],
  topQueries: [],
  unplaced: [
    {
      queries: 156218,
      searches: 395914,
      word: "<value>",
    },
  ],
  zeroQueries: [],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                              | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A URL to the JSON Schema for this object.                                                                   | https://api.steamsets.com/schemas/AdminSearchQueriesResponseBody.json                                       |
| `parses`                                                                                                    | [components.AdminSearchQueriesParse](../../models/components/adminsearchqueriesparse.md)[]                  | :heavy_check_mark:                                                                                          | Up to 100 queries the search parse model read, most read first, with the reader's chips next to the model's |                                                                                                             |
| `surfaces`                                                                                                  | [components.AdminSearchQueriesSurface](../../models/components/adminsearchqueriessurface.md)[]              | :heavy_check_mark:                                                                                          | Per search box, most searched first                                                                         |                                                                                                             |
| `topQueries`                                                                                                | [components.AdminSearchQueriesQuery](../../models/components/adminsearchqueriesquery.md)[]                  | :heavy_check_mark:                                                                                          | Up to 100, most searched first                                                                              |                                                                                                             |
| `unplaced`                                                                                                  | [components.AdminSearchQueriesWord](../../models/components/adminsearchqueriesword.md)[]                    | :heavy_check_mark:                                                                                          | Up to 100 words no query reader placed, most frequent first                                                 |                                                                                                             |
| `zeroQueries`                                                                                               | [components.AdminSearchQueriesQuery](../../models/components/adminsearchqueriesquery.md)[]                  | :heavy_check_mark:                                                                                          | Up to 100 queries that found nothing at least once, most empty searches first                               |                                                                                                             |