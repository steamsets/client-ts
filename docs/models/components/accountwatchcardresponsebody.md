# AccountWatchCardResponseBody

## Example Usage

```typescript
import { AccountWatchCardResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountWatchCardResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountWatchCardResponseBody.json",
  watching: true,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `dollarSchema`                                                      | *string*                                                            | :heavy_minus_sign:                                                  | A URL to the JSON Schema for this object.                           | https://api.steamsets.com/schemas/AccountWatchCardResponseBody.json |
| `watching`                                                          | *boolean*                                                           | :heavy_check_mark:                                                  | Whether the account now watches the card                            |                                                                     |