# ExchangeClassifyInventoryResponseBody

## Example Usage

```typescript
import { ExchangeClassifyInventoryResponseBody } from "@steamsets/client-ts/models/components";

let value: ExchangeClassifyInventoryResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/ExchangeClassifyInventoryResponseBody.json",
  accountId: 442944,
  apps: [
    {
      appId: 247991,
      cards: [],
      cardsFirstSeenAt: 591040,
      foilCrafted: true,
      hasFoilBadge: true,
      image: "https://loremflickr.com/550/3013?lock=3635548553761562",
      missingBadgeData: false,
      name: "<value>",
      normalRemaining: 910102,
      normalUncapped: false,
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | A URL to the JSON Schema for this object.                                              | https://api.steamsets.com/schemas/ExchangeClassifyInventoryResponseBody.json           |
| `accountId`                                                                            | *number*                                                                               | :heavy_check_mark:                                                                     | The classified account                                                                 |                                                                                        |
| `apps`                                                                                 | [components.ExchangeClassifiedApp](../../models/components/exchangeclassifiedapp.md)[] | :heavy_check_mark:                                                                     | Every app the account holds tradable cards for, with per-card verdicts                 |                                                                                        |