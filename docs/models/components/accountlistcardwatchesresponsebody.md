# AccountListCardWatchesResponseBody

## Example Usage

```typescript
import { AccountListCardWatchesResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountListCardWatchesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountListCardWatchesResponseBody.json",
  cards: [],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | A URL to the JSON Schema for this object.                                                        | https://api.steamsets.com/schemas/AccountListCardWatchesResponseBody.json                        |
| `cards`                                                                                          | [components.AccountListCardWatchesCard](../../models/components/accountlistcardwatchescard.md)[] | :heavy_check_mark:                                                                               | Watched cards, newest first                                                                      |                                                                                                  |