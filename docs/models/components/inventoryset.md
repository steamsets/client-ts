# InventorySet

## Example Usage

```typescript
import { InventorySet } from "@steamsets/client-ts/models/components";

let value: InventorySet = {
  appId: 447825,
  foil: [
    {
      amount: 38953,
      name: "<value>",
    },
  ],
  foilSets: 18431,
  normal: [],
  normalSets: 370572,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `appId`                                              | *number*                                             | :heavy_check_mark:                                   | The app id                                           |
| `foil`                                               | [components.Card](../../models/components/card.md)[] | :heavy_check_mark:                                   | Foil cards with owned amounts                        |
| `foilSets`                                           | *number*                                             | :heavy_check_mark:                                   | Number of complete foil sets                         |
| `normal`                                             | [components.Card](../../models/components/card.md)[] | :heavy_check_mark:                                   | Normal cards with owned amounts                      |
| `normalSets`                                         | *number*                                             | :heavy_check_mark:                                   | Number of complete normal sets                       |