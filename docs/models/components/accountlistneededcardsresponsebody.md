# AccountListNeededCardsResponseBody

## Example Usage

```typescript
import { AccountListNeededCardsResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountListNeededCardsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountListNeededCardsResponseBody.json",
  cards: [],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | A URL to the JSON Schema for this object.                                                 | https://api.steamsets.com/schemas/AccountListNeededCardsResponseBody.json                 |
| `cards`                                                                                   | [components.NeededCard](../../models/components/neededcard.md)[]                          | :heavy_check_mark:                                                                        | Cards the account misses to finish sets it almost has, the ones with a spare holder first |                                                                                           |