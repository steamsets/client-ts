# ExchangeCardPricesRequestBody

## Example Usage

```typescript
import { ExchangeCardPricesRequestBody } from "@steamsets/client-ts/models/components";

let value: ExchangeCardPricesRequestBody = {
  classIds: [],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `classIds`                                                                                             | *number*[]                                                                                             | :heavy_check_mark:                                                                                     | Steam class ids to price. Cards, backgrounds and emoticons; anything else is omitted from the response |