# V1AccountLeaderboardBadgeSearch

## Example Usage

```typescript
import { V1AccountLeaderboardBadgeSearch } from "@steamsets/client-ts/models/components";

let value: V1AccountLeaderboardBadgeSearch = {
  id: 4,
  isFoil: true,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *number*                                | :heavy_minus_sign:                      | The badge id to get the leaderboard for | 4                                       |
| `isFoil`                                | *boolean*                               | :heavy_check_mark:                      | Whether the badge is foil or not        | true                                    |