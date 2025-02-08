# V1AccountLeaderboardRequestBody

## Example Usage

```typescript
import { V1AccountLeaderboardRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountLeaderboardRequestBody = {
  app: {
    appId: 730,
  },
  badge: {
    id: 959434,
    isFoil: true,
  },
  end: 10,
  goToLeaderboardRank: 1,
  leaderboard: "xp",
  location: [
    {
      city: "Bad Krozingen",
      country: "Germany",
      region: "Europe",
      state: "Baden-Wurttemberg",
    },
  ],
  start: 1,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `app`                                                                                                                          | [components.V1AccountLeaderboardAppSearch](../../models/components/v1accountleaderboardappsearch.md)                           | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `badge`                                                                                                                        | [components.V1AccountLeaderboardBadgeSearch](../../models/components/v1accountleaderboardbadgesearch.md)                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `end`                                                                                                                          | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The end index                                                                                                                  | 10                                                                                                                             |
| `goToLeaderboardRank`                                                                                                          | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The rank to go to                                                                                                              | 1                                                                                                                              |
| `leaderboard`                                                                                                                  | [components.V1AccountLeaderboardRequestBodyLeaderboard](../../models/components/v1accountleaderboardrequestbodyleaderboard.md) | :heavy_check_mark:                                                                                                             | The leaderboard to get                                                                                                         | xp                                                                                                                             |
| `location`                                                                                                                     | [components.V1LeaderboardLocation](../../models/components/v1leaderboardlocation.md)[]                                         | :heavy_minus_sign:                                                                                                             | The location(s)to get the leaderboard for, otherwise global                                                                    |                                                                                                                                |
| `start`                                                                                                                        | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The start index                                                                                                                | 1                                                                                                                              |