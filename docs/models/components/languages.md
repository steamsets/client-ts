# Languages

The languages the bot answers in. null clears them.

## Example Usage

```typescript
import { Languages } from "@steamsets/client-ts/models/components";

let value: Languages = {
  default: "en",
  supported: [
    "en",
    "pt",
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `default`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The language the bot uses until a user picks another. Must be in supported.                              | en                                                                                                       |
| `supported`                                                                                              | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | ISO 639-1 codes, such as en or pt, at most 20. Case and repeats do not matter. An unknown code is a 400. | [<br/>"en",<br/>"pt"<br/>]                                                                               |