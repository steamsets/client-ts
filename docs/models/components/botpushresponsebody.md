# BotPushResponseBody

## Example Usage

```typescript
import { BotPushResponseBody } from "@steamsets/client-ts/models/components";

let value: BotPushResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/BotPushResponseBody.json",
  isClientOutdated: true,
  issues: [],
  staleAt: new Date("2024-10-28T08:53:37.570Z"),
  stored: {
    games: {
      copies: 337516,
      titles: 948323,
    },
    gems: 912182,
    keys: 989563,
    sets: {
      apps: 326409,
      foil: 472811,
      normal: 701987,
    },
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                            | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | A URL to the JSON Schema for this object.                                                                                 | https://api.steamsets.com/schemas/BotPushResponseBody.json                                                                |
| `isClientOutdated`                                                                                                        | *boolean*                                                                                                                 | :heavy_check_mark:                                                                                                        | The client's version is below the lowest the directory supports for this client. Update the plugin.                       |                                                                                                                           |
| `issues`                                                                                                                  | [components.BotPushResponseIssue](../../models/components/botpushresponseissue.md)[]                                      | :heavy_check_mark:                                                                                                        | Everything in this push that was ignored or looks wrong, at most 100. None of it failed the push. Empty when all is well. |                                                                                                                           |
| `staleAt`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                             | :heavy_check_mark:                                                                                                        | When the bot shows as stale if it pushes nothing more. Push again well before it.                                         |                                                                                                                           |
| `stored`                                                                                                                  | [components.BotPushResponseStored](../../models/components/botpushresponsestored.md)                                      | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |                                                                                                                           |