# AdminSecurityKeysStepUpRequestBody

## Example Usage

```typescript
import { AdminSecurityKeysStepUpRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysStepUpRequestBody = {
  action: "settingWrite",
  digest: "<value>",
  stepUp: {
    assertionJson: "<value>",
    challengeId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                   | [components.AdminSecurityKeysStepUpRequestBodyAction](../../models/components/adminsecuritykeysstepuprequestbodyaction.md) | :heavy_check_mark:                                                                                                         | What the step-up approves: one write of a config setting above the ordinary level                                          |
| `digest`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The write's digest, as admin.securityKeys.beginCheck took it                                                               |
| `stepUp`                                                                                                                   | [components.AdminSecurityKeysStepUp](../../models/components/adminsecuritykeysstepup.md)                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |