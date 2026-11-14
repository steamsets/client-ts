# ItemSpareHolders

## Example Usage

```typescript
import { ItemSpareHolders } from "@steamsets/client-ts/models/components";

let value: ItemSpareHolders = {
  classId: 159518,
  holders: null,
  tooCommon: true,
  totalHolders: 473626,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `classId`                                                                             | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `holders`                                                                             | [components.SpareHolder](../../models/components/spareholder.md)[]                    | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `tooCommon`                                                                           | *boolean*                                                                             | :heavy_check_mark:                                                                    | True when the card has too many owners to look up spares. Use item.findOwners for it. |
| `totalHolders`                                                                        | *number*                                                                              | :heavy_check_mark:                                                                    | Accounts with a copy their badge does not need                                        |