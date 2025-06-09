# V1SearchRequest

## Example Usage

```typescript
import { V1SearchRequest } from "@steamsets/client-ts/models/components";

let value: V1SearchRequest = {
  filter: "<value>",
  image: "base64_encoded_image",
  query: "<value>",
  sort: [
    "price:asc",
    "author:desc",
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `facets`                          | *string*[]                        | :heavy_minus_sign:                | N/A                               |                                   |
| `filter`                          | *string*                          | :heavy_check_mark:                | The filter to apply to the search |                                   |
| `image`                           | *string*                          | :heavy_minus_sign:                | The image to reverse search       | base64_encoded_image              |
| `limit`                           | *number*                          | :heavy_minus_sign:                | N/A                               |                                   |
| `offset`                          | *number*                          | :heavy_minus_sign:                | N/A                               |                                   |
| `page`                            | *number*                          | :heavy_minus_sign:                | N/A                               |                                   |
| `query`                           | *string*                          | :heavy_check_mark:                | The query to search for           |                                   |
| `sort`                            | *string*[]                        | :heavy_check_mark:                | sort order                        | [<br/>"price:asc",<br/>"author:desc"<br/>] |