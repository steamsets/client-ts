# AccountMeInventorySet

## Example Usage

```typescript
import { AccountMeInventorySet } from "@steamsets/client-ts/models/components";

let value: AccountMeInventorySet = {
  appId: 592147,
  foil: {
    cardCount: 570707,
    cards: [
      {
        name: "<value>",
        owned: 246534,
      },
    ],
    craftableSets: 338488,
  },
  normal: {
    cardCount: 950570,
    cards: [],
    craftableSets: 59821,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `appId`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `foil`                                                                                 | [components.AccountMeInventorySide](../../models/components/accountmeinventoryside.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `normal`                                                                               | [components.AccountMeInventorySide](../../models/components/accountmeinventoryside.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |