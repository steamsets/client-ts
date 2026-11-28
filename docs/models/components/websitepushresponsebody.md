# WebsitePushResponseBody

## Example Usage

```typescript
import { WebsitePushResponseBody } from "@steamsets/client-ts/models/components";

let value: WebsitePushResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/WebsitePushResponseBody.json",
  isClientOutdated: false,
  issues: [],
  staleAt: new Date("2024-03-18T12:50:37.097Z"),
  stored: {
    coins: [],
    games: {
      copies: 733152,
      titles: 451277,
    },
    gems: 642497,
    keys: 336943,
    sets: {
      apps: 577619,
      foil: 847058,
      normal: 103956,
    },
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                            | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | A URL to the JSON Schema for this object.                                                                                 | https://api.steamsets.com/schemas/WebsitePushResponseBody.json                                                            |
| `isClientOutdated`                                                                                                        | *boolean*                                                                                                                 | :heavy_check_mark:                                                                                                        | The client's version is below the lowest the directory supports for this client.                                          |                                                                                                                           |
| `issues`                                                                                                                  | [components.WebsitePushResponseIssue](../../models/components/websitepushresponseissue.md)[]                              | :heavy_check_mark:                                                                                                        | Everything in this push that was ignored or looks wrong, at most 100. None of it failed the push. Empty when all is well. |                                                                                                                           |
| `staleAt`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                             | :heavy_check_mark:                                                                                                        | When the website shows as stale if it pushes nothing more. Push again well before it.                                     |                                                                                                                           |
| `stored`                                                                                                                  | [components.WebsitePushResponseStored](../../models/components/websitepushresponsestored.md)                              | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |                                                                                                                           |