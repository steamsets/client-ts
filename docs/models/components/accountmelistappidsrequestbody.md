# AccountMeListAppIDsRequestBody

## Example Usage

```typescript
import { AccountMeListAppIDsRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountMeListAppIDsRequestBody = {
  cursor: "730",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `cursor`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The nextCursor of the previous page. Leave it out for the first page. | 730                                                                   |
| `limit`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | App ids per page.                                                     | 50000                                                                 |