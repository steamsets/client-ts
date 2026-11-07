# AccountOptOutResponseBody

## Example Usage

```typescript
import { AccountOptOutResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountOptOutResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountOptOutResponseBody.json",
  effectiveAt: new Date("2026-12-01T13:00:00Z"),
  hidden: false,
  optedOut: true,
  sessionsRevoked: 0,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                            | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | A URL to the JSON Schema for this object.                                                                                 | https://api.steamsets.com/schemas/AccountOptOutResponseBody.json                                                          |
| `effectiveAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                             | :heavy_check_mark:                                                                                                        | When the opt-out takes effect: the account is hidden, signed out and no longer processed. 30 days after the first request | 2026-12-01T13:00:00Z                                                                                                      |
| `hidden`                                                                                                                  | *boolean*                                                                                                                 | :heavy_check_mark:                                                                                                        | Whether the account is hidden site-wide after this call. False while the opt-out is pending                               | false                                                                                                                     |
| `optedOut`                                                                                                                | *boolean*                                                                                                                 | :heavy_check_mark:                                                                                                        | Always true on success                                                                                                    | true                                                                                                                      |
| `sessionsRevoked`                                                                                                         | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | How many live sessions this call killed. Always 0: sessions are revoked when the opt-out takes effect                     | 0                                                                                                                         |