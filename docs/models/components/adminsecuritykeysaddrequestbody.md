# AdminSecurityKeysAddRequestBody

## Example Usage

```typescript
import { AdminSecurityKeysAddRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysAddRequestBody = {
  attestationJson: "<value>",
  challengeId: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `attestationJson`                                  | *string*                                           | :heavy_check_mark:                                 | The browser's WebAuthn registration answer as JSON |
| `challengeId`                                      | *string*                                           | :heavy_check_mark:                                 | The challenge admin.securityKeys.beginAdd issued   |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | The name for the new key                           |