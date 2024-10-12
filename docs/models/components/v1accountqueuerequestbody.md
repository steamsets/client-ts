# V1AccountQueueRequestBody

## Example Usage

```typescript
import { V1AccountQueueRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountQueueRequestBody = {
  force: true,
  steamId: "76561198842603734",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `force`                                                            | *boolean*                                                          | :heavy_check_mark:                                                 | Force the queue to process this account, staff only                | true                                                               |
| `id`                                                               | [components.IDStruct](../../models/components/idstruct.md)         | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `steamId`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | The steam id of the account if it doesn't exist in the database    | 76561198842603734                                                  |
| `vanity`                                                           | [components.VanityStruct](../../models/components/vanitystruct.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |