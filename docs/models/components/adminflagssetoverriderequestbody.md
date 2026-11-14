# AdminFlagsSetOverrideRequestBody

## Example Usage

```typescript
import { AdminFlagsSetOverrideRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminFlagsSetOverrideRequestBody = {
  accountId: 123456,
  enabled: true,
  flag: "bots",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountId`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | The account to override the flag for                                        | 123456                                                                      |
| `enabled`                                                                   | *boolean*                                                                   | :heavy_check_mark:                                                          | Force the flag on or off for the account, ahead of role grants and defaults |                                                                             |
| `flag`                                                                      | *string*                                                                    | :heavy_check_mark:                                                          | The flag slug, matching ^[a-z][a-z0-9_]{1,63}$                              | bots                                                                        |