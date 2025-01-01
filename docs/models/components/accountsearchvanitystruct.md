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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [components.AccountSearchVanityStructType](../../models/components/accountsearchvanitystructtype.md) | :heavy_check_mark:                                                                                   | Which type of vanity to search for                                                                   |
| `value`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | Vanity to search for                                                                                 |