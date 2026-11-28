# AdminSecurityKeysStepUp

## Example Usage

```typescript
import { AdminSecurityKeysStepUp } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysStepUp = {
  assertionJson: "<value>",
  challengeId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `assertionJson`                                                    | *string*                                                           | :heavy_check_mark:                                                 | The browser's WebAuthn assertion as JSON                           |
| `challengeId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | The challenge admin.securityKeys.beginCheck issued for this action |