# V1BadgeSearchSuggestBody

## Example Usage

```typescript
import { V1BadgeSearchSuggestBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeSearchSuggestBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeSearchSuggestBody.json",
  filter: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `dollarSchema`                                                  | *string*                                                        | :heavy_minus_sign:                                              | A URL to the JSON Schema for this object.                       | https://api.steamsets.com/schemas/V1BadgeSearchSuggestBody.json |
| `filter`                                                        | *string*                                                        | :heavy_check_mark:                                              | The filter to apply to the search                               |                                                                 |