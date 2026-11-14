# AccountResolveManyResponseBody

## Example Usage

```typescript
import { AccountResolveManyResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountResolveManyResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountResolveManyResponseBody.json",
  results: [],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | A URL to the JSON Schema for this object.                                                    | https://api.steamsets.com/schemas/AccountResolveManyResponseBody.json                        |
| `results`                                                                                    | [components.AccountResolveManyResult](../../models/components/accountresolvemanyresult.md)[] | :heavy_check_mark:                                                                           | One result per input, in the same order.                                                     |                                                                                              |