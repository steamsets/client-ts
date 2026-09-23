# AccountOptOutResponseBody

## Example Usage

```typescript
import { AccountOptOutResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountOptOutResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountOptOutResponseBody.json",
  hidden: true,
  optedOut: true,
  sessionsRevoked: 3,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/AccountOptOutResponseBody.json |
| `hidden`                                                         | *boolean*                                                        | :heavy_check_mark:                                               | Whether the account is hidden site-wide after this call          | true                                                             |
| `optedOut`                                                       | *boolean*                                                        | :heavy_check_mark:                                               | Always true on success                                           | true                                                             |
| `sessionsRevoked`                                                | *number*                                                         | :heavy_check_mark:                                               | How many live sessions this call killed                          | 3                                                                |