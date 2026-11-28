# WebsitePushResponseStoredGames

## Example Usage

```typescript
import { WebsitePushResponseStoredGames } from "@steamsets/client-ts/models/components";

let value: WebsitePushResponseStoredGames = {
  copies: 814238,
  titles: 58684,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `copies`                 | *number*                 | :heavy_check_mark:       | Copies across all games. |
| `titles`                 | *number*                 | :heavy_check_mark:       | Distinct games in stock. |