# AppListRequestBody

## Example Usage

```typescript
import { AppListRequestBody } from "@steamsets/client-ts/models/components";

let value: AppListRequestBody = {
  cursor: "730",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `cursor`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The nextCursor of the previous page. Leave it out for the first page. | 730                                                                   |
| `limit`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | Apps per page.                                                        | 5000                                                                  |