# AdminSecurityKeysListRequestBody

## Example Usage

```typescript
import { AdminSecurityKeysListRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysListRequestBody = {
  accountId: 1216167888,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accountId`                                                                      | *number*                                                                         | :heavy_minus_sign:                                                               | Another staff member's account, for an owner. Absent lists the caller's own keys | 1216167888                                                                       |