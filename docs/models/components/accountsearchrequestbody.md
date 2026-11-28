# AccountSearchRequestBody

## Example Usage

```typescript
import { AccountSearchRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountSearchRequestBody = {
  query: "flo",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `limit`                                      | *number*                                     | :heavy_minus_sign:                           | How many accounts to return at most.         |                                              |
| `query`                                      | *string*                                     | :heavy_check_mark:                           | A name, a vanity or an account id, as typed. | flo                                          |