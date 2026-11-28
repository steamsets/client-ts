# AdminSecurityKeysRemoveRequestBody

## Example Usage

```typescript
import { AdminSecurityKeysRemoveRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysRemoveRequestBody = {
  keyId: "<id>",
  stepUp: {
    assertionJson: "<value>",
    challengeId: "<id>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `keyId`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | The key to remove                                                                        |
| `stepUp`                                                                                 | [components.AdminSecurityKeysStepUp](../../models/components/adminsecuritykeysstepup.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |