# AccountMeListBadgesResponseBody

## Example Usage

```typescript
import { AccountMeListBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountMeListBadgesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountMeListBadgesResponseBody.json",
  badges: [],
  badgesUpdatedAt: new Date("2026-02-28T03:08:35.794Z"),
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/AccountMeListBadgesResponseBody.json                        |
| `badges`                                                                                      | [components.AccountMeBadge](../../models/components/accountmebadge.md)[]                      | :heavy_check_mark:                                                                            | One entry per app and badge type, by app id, normal before foil.                              |                                                                                               |
| `badgesUpdatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When SteamSets last read the account's badges from Steam. Null when it never has.             |                                                                                               |
| `nextCursor`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Send it as cursor for the next page. Null on the last page.                                   |                                                                                               |