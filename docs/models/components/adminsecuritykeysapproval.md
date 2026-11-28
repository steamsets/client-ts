# AdminSecurityKeysApproval

## Example Usage

```typescript
import { AdminSecurityKeysApproval } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysApproval = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminSecurityKeysApproval.json",
  expiresAt: new Date("2025-11-11T01:43:27.859Z"),
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                             | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | A URL to the JSON Schema for this object.                                                                                  | https://api.steamsets.com/schemas/AdminSecurityKeysApproval.json                                                           |
| `expiresAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | When it stops working. The staff member registers the key before then. The admin audit log names the owner who approved it |                                                                                                                            |