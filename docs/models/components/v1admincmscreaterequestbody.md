# V1AdminCmsCreateRequestBody

## Example Usage

```typescript
import { V1AdminCmsCreateRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminCmsCreateRequestBody = {
  docKey: "<value>",
  payload: "<value>",
  sortOrder: 373972,
  type: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `docKey`                                           | *string*                                           | :heavy_check_mark:                                 | Stable slug, unique within type                    |
| `note`                                             | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `parentUid`                                        | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `payload`                                          | *any*                                              | :heavy_check_mark:                                 | Type-specific JSON payload (validated server-side) |
| `sortOrder`                                        | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `type`                                             | *string*                                           | :heavy_check_mark:                                 | N/A                                                |