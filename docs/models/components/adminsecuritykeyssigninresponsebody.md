# AdminSecurityKeysSignInResponseBody

## Example Usage

```typescript
import { AdminSecurityKeysSignInResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysSignInResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminSecurityKeysSignInResponseBody.json",
  keyName: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | https://api.steamsets.com/schemas/AdminSecurityKeysSignInResponseBody.json |
| `keyName`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | The name of the key that confirmed the sign-in                             |                                                                            |