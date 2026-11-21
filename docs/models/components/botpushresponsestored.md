# BotPushResponseStored

## Example Usage

```typescript
import { BotPushResponseStored } from "@steamsets/client-ts/models/components";

let value: BotPushResponseStored = {
  games: {
    copies: 337516,
    titles: 948323,
  },
  gems: 614851,
  keys: 906093,
  sets: {
    apps: 326409,
    foil: 472811,
    normal: 701987,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `games`                                                                                        | [components.BotPushResponseStoredGames](../../models/components/botpushresponsestoredgames.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `gems`                                                                                         | *number*                                                                                       | :heavy_check_mark:                                                                             | Gems the bot holds.                                                                            |
| `keys`                                                                                         | *number*                                                                                       | :heavy_check_mark:                                                                             | Keys and tickets the bot holds, every currency together.                                       |
| `sets`                                                                                         | [components.BotPushResponseStoredSets](../../models/components/botpushresponsestoredsets.md)   | :heavy_check_mark:                                                                             | N/A                                                                                            |