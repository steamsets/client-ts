# V1AdminDonationsUpdateCurrencyRequestBody

## Example Usage

```typescript
import { V1AdminDonationsUpdateCurrencyRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminDonationsUpdateCurrencyRequestBody = {
  active: false,
  coinGeckoId: "<id>",
  decimals: 170367,
  id: 313385,
  isStablecoin: false,
  name: "<value>",
  symbol: "<value>",
  treasuryAddress: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `active`                                                              | *boolean*                                                             | :heavy_check_mark:                                                    | Set false to soft-delete; set true to revive a previously-deleted row |
| `coinGeckoId`                                                         | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `decimals`                                                            | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `id`                                                                  | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `isStablecoin`                                                        | *boolean*                                                             | :heavy_check_mark:                                                    | N/A                                                                   |
| `name`                                                                | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `symbol`                                                              | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `treasuryAddress`                                                     | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |