# V1AccountLeaderboardBadgeSearch

## Example Usage

```typescript
import { V1AccountLeaderboardBadgeSearch } from "@steamsets/client-ts/models/components";

let value: V1AccountLeaderboardBadgeSearch = {
  id: 33515,
  isFoil: true,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *number*                                                   | :heavy_check_mark:                                         | The badge id to get the leaderboard for (appId) or id 1-64 |                                                            |
| `isFoil`                                                   | *boolean*                                                  | :heavy_check_mark:                                         | Whether the badge is foil or not                           | true                                                       |