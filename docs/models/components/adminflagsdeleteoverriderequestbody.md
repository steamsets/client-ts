# AdminFlagsDeleteOverrideRequestBody

## Example Usage

```typescript
import { AdminFlagsDeleteOverrideRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminFlagsDeleteOverrideRequestBody = {
  accountId: 123456,
  flag: "bots",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `accountId`                                    | *number*                                       | :heavy_check_mark:                             | The account whose override to remove           | 123456                                         |
| `flag`                                         | *string*                                       | :heavy_check_mark:                             | The flag slug, matching ^[a-z][a-z0-9_]{1,63}$ | bots                                           |