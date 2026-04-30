# V1DonationsListCurrenciesResponseBody

## Example Usage

```typescript
import { V1DonationsListCurrenciesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1DonationsListCurrenciesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1DonationsListCurrenciesResponseBody.json",
  currencies: [
    {
      chain: "<value>",
      decimals: 619552,
      name: "<value>",
      symbol: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `dollarSchema`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | A URL to the JSON Schema for this object.                                    | https://api.steamsets.com/schemas/V1DonationsListCurrenciesResponseBody.json |
| `currencies`                                                                 | [components.CurrencyOut](../../models/components/currencyout.md)[]           | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |