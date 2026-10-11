# V1PacksOpenResponseBody

## Example Usage

```typescript
import { V1PacksOpenResponseBody } from "@steamsets/client-ts/models/components";

let value: V1PacksOpenResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1PacksOpenResponseBody.json",
  cards: [
    {
      id: "badges",
      rarity: "common",
    },
  ],
  foil: true,
  mine: {
    foilsPulled: 19,
    packsOpened: 1834,
  },
  site: {
    foilsPulled: 19,
    packsOpened: 1834,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `dollarSchema`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | A URL to the JSON Schema for this object.                                    | https://api.steamsets.com/schemas/V1PacksOpenResponseBody.json               |
| `cards`                                                                      | [components.V1PacksOpenCard](../../models/components/v1packsopencard.md)[]   | :heavy_check_mark:                                                           | The two cards beside Page Not Found, left then right. Never the same card    |                                                                              |
| `foil`                                                                       | *boolean*                                                                    | :heavy_check_mark:                                                           | Whether Page Not Found is the foil, in about 1 pack of 100                   |                                                                              |
| `mine`                                                                       | [components.V1PacksOpenTotals](../../models/components/v1packsopentotals.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `site`                                                                       | [components.V1PacksOpenTotals](../../models/components/v1packsopentotals.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |