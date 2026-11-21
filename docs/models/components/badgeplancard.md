# BadgePlanCard

## Example Usage

```typescript
import { BadgePlanCard } from "@steamsets/client-ts/models/components";

let value: BadgePlanCard = {
  cost: 24009,
  name: "<value>",
  quantity: 821751,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `cost`                                                 | *number*                                               | :heavy_check_mark:                                     | The cheapest quantity listings together, in US cents.  |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | The card's name, as the market lists it under the app. |
| `quantity`                                             | *number*                                               | :heavy_check_mark:                                     | Copies to buy.                                         |