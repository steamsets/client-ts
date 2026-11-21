# BotPushResponseStoredGames

## Example Usage

```typescript
import { BotPushResponseStoredGames } from "@steamsets/client-ts/models/components";

let value: BotPushResponseStoredGames = {
  copies: 634238,
  titles: 8370,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `copies`                 | *number*                 | :heavy_check_mark:       | Copies across all games. |
| `titles`                 | *number*                 | :heavy_check_mark:       | Distinct games in stock. |