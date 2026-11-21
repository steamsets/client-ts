# PublicAccountRank

## Example Usage

```typescript
import { PublicAccountRank } from "@steamsets/client-ts/models/components";

let value: PublicAccountRank = {
  rank: 992131,
  score: 842536,
  total: 974260,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `rank`                              | *number*                            | :heavy_check_mark:                  | 1 is first.                         |
| `score`                             | *number*                            | :heavy_check_mark:                  | The value the leaderboard sorts by. |
| `total`                             | *number*                            | :heavy_check_mark:                  | Accounts on the leaderboard.        |