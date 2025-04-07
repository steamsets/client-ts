# V1BadgeSuggestSearchBody

## Example Usage

```typescript
import { V1BadgeSuggestSearchBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeSuggestSearchBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeSuggestSearchBody.json",
  filter: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `dollarSchema`                                                  | *string*                                                        | :heavy_minus_sign:                                              | A URL to the JSON Schema for this object.                       | https://api.steamsets.com/schemas/V1BadgeSuggestSearchBody.json |
| `filter`                                                        | *string*                                                        | :heavy_check_mark:                                              | The filter to apply to the search                               |                                                                 |