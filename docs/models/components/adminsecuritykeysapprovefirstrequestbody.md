# AdminSecurityKeysApproveFirstRequestBody

## Example Usage

```typescript
import { AdminSecurityKeysApproveFirstRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysApproveFirstRequestBody = {
  accountId: 1216167888,
  stepUp: {
    assertionJson: "<value>",
    challengeId: "<id>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `accountId`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | The staff member who may register a first key                                            | 1216167888                                                                               |
| `stepUp`                                                                                 | [components.AdminSecurityKeysStepUp](../../models/components/adminsecuritykeysstepup.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |