# V1AccountQueueUpdateRequestBody

## Example Usage

```typescript
import { V1AccountQueueUpdateRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountQueueUpdateRequestBody = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `force`                                                            | *boolean*                                                          | :heavy_minus_sign:                                                 | Force the queue to process this account, staff only                | false                                                              |
| `id`                                                               | [components.IDStruct](../../models/components/idstruct.md)         | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `vanity`                                                           | [components.VanityStruct](../../models/components/vanitystruct.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |