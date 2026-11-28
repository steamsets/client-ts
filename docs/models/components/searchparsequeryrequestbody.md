# SearchParseQueryRequestBody

## Example Usage

```typescript
import { SearchParseQueryRequestBody } from "@steamsets/client-ts/models/components";

let value: SearchParseQueryRequestBody = {
  page: "badges",
  query: "hard to get foil cats",
  schema: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `chips`                                                                             | *string*[]                                                                          | :heavy_minus_sign:                                                                  | The filters the page's word reader already took, as key=value.                      |                                                                                     |
| `fresh`                                                                             | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Staff only: ask the model even when the answer is cached.                           |                                                                                     |
| `model`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | Staff only: the model to ask instead of the configured one.                         |                                                                                     |
| `page`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | The search page, such as badges.                                                    | badges                                                                              |
| `query`                                                                             | *string*                                                                            | :heavy_check_mark:                                                                  | The query as typed, without quoted phrases.                                         | hard to get foil cats                                                               |
| `schema`                                                                            | *string*                                                                            | :heavy_check_mark:                                                                  | The page's filter schema as JSON, version 1, generated from its filter definitions. |                                                                                     |