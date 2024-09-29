# V1AccountLeaderboardPreviewRequestBody

## Example Usage

```typescript
import { V1AccountLeaderboardPreviewRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountLeaderboardPreviewRequestBody = {
  leaderboard: "xp",
  score: 123456,
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `leaderboard`                                                                                                                                | [components.V1AccountLeaderboardPreviewRequestBodyLeaderboard](../../models/components/v1accountleaderboardpreviewrequestbodyleaderboard.md) | :heavy_check_mark:                                                                                                                           | The leaderboard to get                                                                                                                       | xp                                                                                                                                           |
| `score`                                                                                                                                      | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The score the account should be                                                                                                              | 123456                                                                                                                                       |