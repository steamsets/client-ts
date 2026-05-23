# AppSearchRequestBody

## Example Usage

```typescript
import { AppSearchRequestBody } from "@steamsets/client-ts/models/components";

let value: AppSearchRequestBody = {
  query: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `filter`                                                                                         | [components.AppFilter](../../models/components/appfilter.md)                                     | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `limit`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `offset`                                                                                         | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `query`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | BM25 text query against app name.                                                                |
| `sortBy`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | Attribute to rank by when query is empty. Defaults to id.                                        |
| `sortDir`                                                                                        | [components.AppSearchRequestBodySortDir](../../models/components/appsearchrequestbodysortdir.md) | :heavy_minus_sign:                                                                               | asc \| desc; defaults to desc.                                                                   |