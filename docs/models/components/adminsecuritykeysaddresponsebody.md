# AdminSecurityKeysAddResponseBody

## Example Usage

```typescript
import { AdminSecurityKeysAddResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysAddResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminSecurityKeysAddResponseBody.json",
  key: {
    backupEligible: false,
    createdAt: new Date("2024-03-26T22:13:03.882Z"),
    id: "skey_3vQe8bR1",
    name: "YubiKey 5C",
    transports: [],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `dollarSchema`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | A URL to the JSON Schema for this object.                                          | https://api.steamsets.com/schemas/AdminSecurityKeysAddResponseBody.json            |
| `key`                                                                              | [components.AdminSecurityKeysKey](../../models/components/adminsecuritykeyskey.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |