# V1LeaderboardGetBucketLeadersRequestBody

## Example Usage

```typescript
import { V1LeaderboardGetBucketLeadersRequestBody } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardGetBucketLeadersRequestBody = {
  bucketSize: 10,
  leaderboard: "xp",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `bucketSize`                                                                                                                                     | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | xp only: levels per bucket (default 10). Ignored for apps.                                                                                       | 10                                                                                                                                               |
| `leaderboard`                                                                                                                                    | [components.V1LeaderboardGetBucketLeadersRequestBodyLeaderboard](../../models/components/v1leaderboardgetbucketleadersrequestbodyleaderboard.md) | :heavy_check_mark:                                                                                                                               | xp buckets by level; apps buckets by the game-collector badge thresholds.                                                                        | xp                                                                                                                                               |