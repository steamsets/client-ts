# GroupSearchRequestBody

## Example Usage

```typescript
import { GroupSearchRequestBody } from "@steamsets/client-ts/models/components";

let value: GroupSearchRequestBody = {
  query: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `filter`                                                                                             | [components.GroupFilter](../../models/components/groupfilter.md)                                     | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `limit`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `offset`                                                                                             | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `query`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | BM25 text query against group name + tag + vanity.                                                   |
| `sortBy`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Attribute to rank by when query is empty. Defaults to memberCount.                                   |
| `sortDir`                                                                                            | [components.GroupSearchRequestBodySortDir](../../models/components/groupsearchrequestbodysortdir.md) | :heavy_minus_sign:                                                                                   | asc \| desc; defaults to desc.                                                                       |