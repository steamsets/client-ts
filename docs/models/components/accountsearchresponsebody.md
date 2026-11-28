# AccountSearchResponseBody

## Example Usage

```typescript
import { AccountSearchResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountSearchResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountSearchResponseBody.json",
  accounts: [],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | A URL to the JSON Schema for this object.                                                 | https://api.steamsets.com/schemas/AccountSearchResponseBody.json                          |
| `accounts`                                                                                | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)[]          | :heavy_check_mark:                                                                        | Best match first. Hidden accounts and accounts SteamSets has no profile for are left out. |                                                                                           |