# V1AccountListFriendsRequestBody

## Example Usage

```typescript
import { V1AccountListFriendsRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListFriendsRequestBody = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `cursor`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Opaque cursor from a previous page's nextCursor. Omit for the first page |
| `id`                                                                     | [components.IDSearch](../../models/components/idsearch.md)               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | Friends per page                                                         |
| `vanity`                                                                 | [components.VanitySearch](../../models/components/vanitysearch.md)       | :heavy_minus_sign:                                                       | N/A                                                                      |