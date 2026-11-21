# AdminFlagsGetAccountFlag

## Example Usage

```typescript
import { AdminFlagsGetAccountFlag } from "@steamsets/client-ts/models/components";

let value: AdminFlagsGetAccountFlag = {
  description:
    "unfortunately beside shoulder pro shadowbox yowza the outset whoa although",
  enabled: false,
  flag: "<value>",
  inCode: false,
  source: "default",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | What the flag does, empty for a flag the backend does not check                                        |
| `enabled`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | The effective value for the account                                                                    |
| `flag`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | The flag slug                                                                                          |
| `inCode`                                                                                               | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | True when the backend checks the flag in code                                                          |
| `source`                                                                                               | [components.AdminFlagsGetAccountFlagSource](../../models/components/adminflagsgetaccountflagsource.md) | :heavy_check_mark:                                                                                     | Which rule decided the value                                                                           |