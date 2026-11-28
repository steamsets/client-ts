# AdminSecurityKeysKey

## Example Usage

```typescript
import { AdminSecurityKeysKey } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysKey = {
  backupEligible: true,
  createdAt: new Date("2025-08-30T05:53:03.230Z"),
  id: "skey_3vQe8bR1",
  name: "YubiKey 5C",
  transports: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `backupEligible`                                                                              | *boolean*                                                                                     | :heavy_check_mark:                                                                            | True for a passkey that syncs between devices                                                 |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When it was registered                                                                        |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The key's public id                                                                           | skey_3vQe8bR1                                                                                 |
| `lastUsedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The last check it passed here. Absent until the first                                         |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name its owner gave it                                                                    | YubiKey 5C                                                                                    |
| `transports`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | How it connects, as the key reported: usb, nfc, ble, internal, hybrid, smart-card             |                                                                                               |