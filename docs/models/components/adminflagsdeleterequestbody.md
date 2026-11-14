# AdminFlagsDeleteRequestBody

## Example Usage

```typescript
import { AdminFlagsDeleteRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminFlagsDeleteRequestBody = {
  flag: "old_flag",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `flag`                                         | *string*                                       | :heavy_check_mark:                             | The flag slug, matching ^[a-z][a-z0-9_]{1,63}$ | old_flag                                       |