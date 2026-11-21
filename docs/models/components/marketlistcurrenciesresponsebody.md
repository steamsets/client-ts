# MarketListCurrenciesResponseBody

## Example Usage

```typescript
import { MarketListCurrenciesResponseBody } from "@steamsets/client-ts/models/components";

let value: MarketListCurrenciesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/MarketListCurrenciesResponseBody.json",
  currencies: [],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A URL to the JSON Schema for this object.                                                            | https://api.steamsets.com/schemas/MarketListCurrenciesResponseBody.json                              |
| `currencies`                                                                                         | [components.MarketListCurrenciesCurrency](../../models/components/marketlistcurrenciescurrency.md)[] | :heavy_check_mark:                                                                                   | Every Steam wallet currency with a known rate, USD first.                                            |                                                                                                      |