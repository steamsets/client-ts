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
| `bucketSize`                                                                                                                                     | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Levels per bucket. 0 defaults to 10.                                                                                                             | 10                                                                                                                                               |
| `leaderboard`                                                                                                                                    | [components.V1LeaderboardGetBucketLeadersRequestBodyLeaderboard](../../models/components/v1leaderboardgetbucketleadersrequestbodyleaderboard.md) | :heavy_check_mark:                                                                                                                               | Currently only XP is supported.                                                                                                                  | xp                                                                                                                                               |