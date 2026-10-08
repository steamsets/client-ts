# V1AdminUser

## Example Usage

```typescript
import { V1AdminUser } from "@steamsets/client-ts/models/components";

let value: V1AdminUser = {
  account: null,
  accountId: 882337740,
  lastSeenAt: new Date("2026-10-07T18:30:00Z"),
  signedUpAt: new Date("2026-10-01T12:00:00Z"),
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `account`                                                                                                       | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                                  | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `accountId`                                                                                                     | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The account id                                                                                                  | 882337740                                                                                                       |
| `lastSeenAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | The newest session activity of the account                                                                      | 2026-10-07T18:30:00Z                                                                                            |
| `signedUpAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | When the account first signed in. Null for accounts from before signups were recorded that have no session left | 2026-10-01T12:00:00Z                                                                                            |