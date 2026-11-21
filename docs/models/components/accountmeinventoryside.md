# AccountMeInventorySide

## Example Usage

```typescript
import { AccountMeInventorySide } from "@steamsets/client-ts/models/components";

let value: AccountMeInventorySide = {
  cardCount: 174057,
  cards: [
    {
      name: "<value>",
      owned: 246534,
    },
  ],
  craftableSets: 349754,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `cardCount`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | Cards in one set, 0 when SteamSets does not know the app's set.                                |
| `cards`                                                                                        | [components.AccountMeInventoryCard](../../models/components/accountmeinventorycard.md)[]       | :heavy_check_mark:                                                                             | The cards of this set in the inventory, by name. A card of the set that is not here is needed. |
| `craftableSets`                                                                                | *number*                                                                                       | :heavy_check_mark:                                                                             | Complete sets the inventory holds: 0 unless it has every card of the set.                      |