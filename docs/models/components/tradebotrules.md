# TradeBotRules

## Example Usage

```typescript
import { TradeBotRules } from "@steamsets/client-ts/models/components";

let value: TradeBotRules = {
  acceptsDonations: false,
  acceptsLimitedAccounts: true,
  acceptsTradeBannedUsers: null,
  acceptsTradeHolds: null,
  acceptsVacBannedUsers: false,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `acceptsDonations`                                      | *boolean*                                               | :heavy_check_mark:                                      | Accepts trade offers where it only receives items.      |
| `acceptsLimitedAccounts`                                | *boolean*                                               | :heavy_check_mark:                                      | Takes friend requests from limited Steam accounts.      |
| `acceptsTradeBannedUsers`                               | *boolean*                                               | :heavy_check_mark:                                      | Takes friend requests from trade-banned users.          |
| `acceptsTradeHolds`                                     | *boolean*                                               | :heavy_check_mark:                                      | Trades with users whose trades Steam would put on hold. |
| `acceptsVacBannedUsers`                                 | *boolean*                                               | :heavy_check_mark:                                      | Takes friend requests from VAC-banned users.            |