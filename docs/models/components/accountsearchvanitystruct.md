# AccountSearchVanityStruct

## Example Usage

```typescript
import { AccountSearchVanityStruct } from "@steamsets/client-ts/models/components";

let value: AccountSearchVanityStruct = {
    type: "steam",
    value: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_check_mark:                                 | Which type of vanity to search for                 |
| `value`                                            | *string*                                           | :heavy_check_mark:                                 | Vanity to search for                               |