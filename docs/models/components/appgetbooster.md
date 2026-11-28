# AppGetBooster

## Example Usage

```typescript
import { AppGetBooster } from "@steamsets/client-ts/models/components";

let value: AppGetBooster = {
  buyOrderCents: 974081,
  gems: 128543,
  priceCents: 603834,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `buyOrderCents`                 | *number*                        | :heavy_check_mark:              | Highest booster pack buy order. |
| `gems`                          | *number*                        | :heavy_check_mark:              | Gems to craft one booster pack. |
| `priceCents`                    | *number*                        | :heavy_check_mark:              | Cheapest booster pack listing.  |