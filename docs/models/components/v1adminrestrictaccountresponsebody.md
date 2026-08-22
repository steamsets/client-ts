# V1AdminRestrictAccountResponseBody

## Example Usage

```typescript
import { V1AdminRestrictAccountResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminRestrictAccountResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminRestrictAccountResponseBody.json",
  hidden: true,
  reason: "Ban evasion, see report #412",
  restricted: true,
  sessionsRevoked: 3,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `dollarSchema`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | A URL to the JSON Schema for this object.                                 | https://api.steamsets.com/schemas/V1AdminRestrictAccountResponseBody.json |
| `hidden`                                                                  | *boolean*                                                                 | :heavy_check_mark:                                                        | Whether the account is hidden site-wide after this call                   | true                                                                      |
| `reason`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | The stored restriction reason, empty when the account is not restricted   | Ban evasion, see report #412                                              |
| `restricted`                                                              | *boolean*                                                                 | :heavy_check_mark:                                                        | Whether a staff restriction is in force after this call                   | true                                                                      |
| `sessionsRevoked`                                                         | *number*                                                                  | :heavy_check_mark:                                                        | How many live sessions this call killed                                   | 3                                                                         |