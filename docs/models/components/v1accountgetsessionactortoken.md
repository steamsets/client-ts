# V1AccountGetSessionActorToken

## Example Usage

```typescript
import { V1AccountGetSessionActorToken } from "@steamsets/client-ts/models/components";

let value: V1AccountGetSessionActorToken = {
  aud: "levels",
  expiresAt: new Date("2025-06-21T05:28:04.269Z"),
  token: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `aud`                                                                                         | [components.Aud](../../models/components/aud.md)                                              | :heavy_check_mark:                                                                            | The one service the token is good for                                                         | levels                                                                                        |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the token stops working. Ask for a new one when less than a minute is left               |                                                                                               |
| `token`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The signed token, sent as X-SteamSets-Actor                                                   |                                                                                               |