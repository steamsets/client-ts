# WebsitePushResponseStored

## Example Usage

```typescript
import { WebsitePushResponseStored } from "@steamsets/client-ts/models/components";

let value: WebsitePushResponseStored = {
  coins: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  games: {
    copies: 733152,
    titles: 451277,
  },
  gems: 752282,
  keys: 392396,
  sets: {
    apps: 577619,
    foil: 847058,
    normal: 103956,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `coins`                                                                                                | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | The coins the website takes, in ticker order.                                                          |
| `games`                                                                                                | [components.WebsitePushResponseStoredGames](../../models/components/websitepushresponsestoredgames.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `gems`                                                                                                 | *number*                                                                                               | :heavy_check_mark:                                                                                     | Gems the website holds.                                                                                |
| `keys`                                                                                                 | *number*                                                                                               | :heavy_check_mark:                                                                                     | Keys the website holds, every currency together.                                                       |
| `sets`                                                                                                 | [components.WebsitePushResponseStoredSets](../../models/components/websitepushresponsestoredsets.md)   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |