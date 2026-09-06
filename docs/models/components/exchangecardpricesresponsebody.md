# ExchangeCardPricesResponseBody

## Example Usage

```typescript
import { ExchangeCardPricesResponseBody } from "@steamsets/client-ts/models/components";

let value: ExchangeCardPricesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/ExchangeCardPricesResponseBody.json",
  cards: [],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                   | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A URL to the JSON Schema for this object.                                                                        | https://api.steamsets.com/schemas/ExchangeCardPricesResponseBody.json                                            |
| `cards`                                                                                                          | [components.ExchangeCardPrice](../../models/components/exchangecardprice.md)[]                                   | :heavy_check_mark:                                                                                               | One entry per known item. A requested class with no catalogue row is omitted rather than returned priced at zero |                                                                                                                  |