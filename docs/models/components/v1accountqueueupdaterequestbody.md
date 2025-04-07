# V1AccountQueueUpdateRequestBody

## Example Usage

```typescript
import { V1AccountQueueUpdateRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountQueueUpdateRequestBody = {
  force: true,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `force`                                                            | *boolean*                                                          | :heavy_check_mark:                                                 | Force the queue to process this account, staff only                | true                                                               |
| `id`                                                               | [components.IDStruct](../../models/components/idstruct.md)         | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `vanity`                                                           | [components.VanityStruct](../../models/components/vanitystruct.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |