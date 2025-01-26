# V1SearchRequest

## Example Usage

```typescript
import { V1SearchRequest } from "@steamsets/client-ts/models/components";

let value: V1SearchRequest = {
  filter: "<value>",
  query: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `facets`                          | *string*[]                        | :heavy_minus_sign:                | N/A                               |
| `filter`                          | *string*                          | :heavy_check_mark:                | The filter to apply to the search |
| `limit`                           | *number*                          | :heavy_minus_sign:                | N/A                               |
| `offset`                          | *number*                          | :heavy_minus_sign:                | N/A                               |
| `page`                            | *number*                          | :heavy_minus_sign:                | N/A                               |
| `query`                           | *string*                          | :heavy_check_mark:                | The query to search for           |