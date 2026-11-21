# LevelRange

The account levels this bot's stock is meant for, as brands split rarer sets across bots by level tier. null clears it. A range whose min is above its max is ignored and reported as an issue.

## Example Usage

```typescript
import { LevelRange } from "@steamsets/client-ts/models/components";

let value: LevelRange = {
  max: 56496,
  min: 987316,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `max`                                                                   | *number*                                                                | :heavy_check_mark:                                                      | The highest account level the bot is meant for. 0 means no upper limit. |
| `min`                                                                   | *number*                                                                | :heavy_check_mark:                                                      | The lowest account level the bot is meant for.                          |