# V1AdminDonationsListCurrenciesResponseBody

## Example Usage

```typescript
import { V1AdminDonationsListCurrenciesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminDonationsListCurrenciesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminDonationsListCurrenciesResponseBody.json",
  currencies: [],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `dollarSchema`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | A URL to the JSON Schema for this object.                                         | https://api.steamsets.com/schemas/V1AdminDonationsListCurrenciesResponseBody.json |
| `currencies`                                                                      | [components.CurrencyRow](../../models/components/currencyrow.md)[]                | :heavy_check_mark:                                                                | N/A                                                                               |                                                                                   |