# BadgePricingSearchResponseBody

## Example Usage

```typescript
import { BadgePricingSearchResponseBody } from "@steamsets/client-ts/models/components";

let value: BadgePricingSearchResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/BadgePricingSearchResponseBody.json",
  items: [],
  results: 663228,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | A URL to the JSON Schema for this object.                                                | https://api.steamsets.com/schemas/BadgePricingSearchResponseBody.json                    |
| `items`                                                                                  | [components.BadgePricingSearchItem](../../models/components/badgepricingsearchitem.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `results`                                                                                | *number*                                                                                 | :heavy_check_mark:                                                                       | Number of rows returned in this page.                                                    |                                                                                          |