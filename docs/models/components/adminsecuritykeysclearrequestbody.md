# AdminSecurityKeysClearRequestBody

## Example Usage

```typescript
import { AdminSecurityKeysClearRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysClearRequestBody = {
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
| `accountId`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | The staff member whose keys to clear                                                     | 1216167888                                                                               |
| `stepUp`                                                                                 | [components.AdminSecurityKeysStepUp](../../models/components/adminsecuritykeysstepup.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |