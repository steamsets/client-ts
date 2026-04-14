# V1AccountFindFriendPathRequestBody

## Example Usage

```typescript
import { V1AccountFindFriendPathRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountFindFriendPathRequestBody = {
  from: {},
  to: {},
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `from`                                                                                                                               | [components.AccountSearch](../../models/components/accountsearch.md)                                                                 | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `maxPaths`                                                                                                                           | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Max number of paths to return (default 10, capped at 50). A direct friendship always returns a single path regardless of this value. |
| `to`                                                                                                                                 | [components.AccountSearch](../../models/components/accountsearch.md)                                                                 | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |