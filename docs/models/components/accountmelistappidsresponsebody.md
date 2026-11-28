# AccountMeListAppIDsResponseBody

## Example Usage

```typescript
import { AccountMeListAppIDsResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountMeListAppIDsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountMeListAppIDsResponseBody.json",
  appIds: [
    440,
    730,
  ],
  appPrivacy: "private",
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                                            | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | A URL to the JSON Schema for this object.                                                                                                 | https://api.steamsets.com/schemas/AccountMeListAppIDsResponseBody.json                                                                    |
| `appIds`                                                                                                                                  | *number*[]                                                                                                                                | :heavy_check_mark:                                                                                                                        | The apps you own, by app id, as of your account's last refresh. Empty unless appPrivacy is public.                                        | [<br/>440,<br/>730<br/>]                                                                                                                  |
| `appPrivacy`                                                                                                                              | [components.AccountMeListAppIDsResponseBodyAppPrivacy](../../models/components/accountmelistappidsresponsebodyappprivacy.md)              | :heavy_check_mark:                                                                                                                        | Who may see your game details on Steam. Steam lists owned games only when they are public, so anything else means appIds is empty or old. |                                                                                                                                           |
| `nextCursor`                                                                                                                              | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Send it as cursor for the next page. Null on the last page.                                                                               |                                                                                                                                           |