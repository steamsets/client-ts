# SearchEvent

## Example Usage

```typescript
import { SearchEvent } from "@steamsets/client-ts/models/components";

let value: SearchEvent = {
  chips: [
    {
      key: "type",
      value: "foil",
    },
  ],
  kind: "search",
  query: "<value>",
  queryId: "32542dd5-12ba-453a-a416-048c21d4e595",
  surface: "badges",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `chips`                                                                                    | [components.SearchEventChip](../../models/components/searcheventchip.md)[]                 | :heavy_minus_sign:                                                                         | The filters the query reader made from the query's words. search only.                     |                                                                                            |
| `kind`                                                                                     | [components.SearchEventKind](../../models/components/searcheventkind.md)                   | :heavy_check_mark:                                                                         | search: the query settled and its results showed. open: a result of that query was opened. |                                                                                            |
| `latencyMs`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | Milliseconds from the query settling to its results showing; 0 when unknown. search only.  |                                                                                            |
| `query`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | The query. The API trims, lowercases and cuts it to 200 characters.                        |                                                                                            |
| `queryId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | A random id the page mints per settled query. An open carries the id of its search.        |                                                                                            |
| `resultCount`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | How many results the query found. search only.                                             |                                                                                            |
| `semantic`                                                                                 | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | True when the visual ranking ran. search only.                                             |                                                                                            |
| `surface`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | The search box the query was typed into                                                    | badges                                                                                     |
| `unplaced`                                                                                 | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | The words no reader placed. search only.                                                   |                                                                                            |