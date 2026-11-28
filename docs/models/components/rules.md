# Rules

Which users and trades the bot accepts. A rule you leave out keeps its stored value; null clears every rule.

## Example Usage

```typescript
import { Rules } from "@steamsets/client-ts/models/components";

let value: Rules = {
  acceptsTradeHolds: false,
  acceptsVacBannedUsers: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `acceptsDonations`                                                                            | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The bot accepts trade offers where it only receives items.                                    |
| `acceptsLimitedAccounts`                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The bot accepts friend requests from limited Steam accounts, which never spent US$5 on Steam. |
| `acceptsTradeBannedUsers`                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The bot accepts friend requests from users with a trade ban.                                  |
| `acceptsTradeHolds`                                                                           | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The bot trades with users whose trades Steam would put on hold.                               |
| `acceptsVacBannedUsers`                                                                       | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The bot accepts friend requests from users with a VAC ban.                                    |