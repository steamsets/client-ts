# TradeBotLanguages

## Example Usage

```typescript
import { TradeBotLanguages } from "@steamsets/client-ts/models/components";

let value: TradeBotLanguages = {
  default: "en",
  supported: [
    "en",
    "pt",
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `default`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | The language the bot uses until a user picks another. Null when it does not say. | en                                                                               |
| `supported`                                                                      | *string*[]                                                                       | :heavy_check_mark:                                                               | ISO 639-1 codes.                                                                 | [<br/>"en",<br/>"pt"<br/>]                                                       |