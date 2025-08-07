# BadgeSuggestTags

## Example Usage

```typescript
import { BadgeSuggestTags } from "@steamsets/client-ts/models/components";

let value: BadgeSuggestTags = {
  dollarSchema: "https://api.steamsets.com/schemas/BadgeSuggestTags.json",
  colors: {
    "key": 447042,
  },
  designs: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `dollarSchema`                                          | *string*                                                | :heavy_minus_sign:                                      | A URL to the JSON Schema for this object.               | https://api.steamsets.com/schemas/BadgeSuggestTags.json |
| `colors`                                                | Record<string, *number*>                                | :heavy_check_mark:                                      | N/A                                                     |                                                         |
| `designs`                                               | *string*[]                                              | :heavy_check_mark:                                      | N/A                                                     |                                                         |