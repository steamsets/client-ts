# AccountSetTradeMatchVisibilityResponseBody

## Example Usage

```typescript
import { AccountSetTradeMatchVisibilityResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountSetTradeMatchVisibilityResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountSetTradeMatchVisibilityResponseBody.json",
  hidden: false,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `dollarSchema`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | A URL to the JSON Schema for this object.                                         | https://api.steamsets.com/schemas/AccountSetTradeMatchVisibilityResponseBody.json |
| `hidden`                                                                          | *boolean*                                                                         | :heavy_check_mark:                                                                | Whether the account is now left out of other accounts' trade matches              |                                                                                   |