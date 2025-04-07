# V1LeaderboardGetAccountsMetaRequestBody

## Example Usage

```typescript
import { V1LeaderboardGetAccountsMetaRequestBody } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardGetAccountsMetaRequestBody = {
  app: {
    appId: 730,
  },
  badge: {
    id: 887487,
    isFoil: true,
  },
  leaderboard: "xp",
  location: [
    {
      city: "Bad Krozingen",
      country: "Germany",
      region: "Europe",
      state: "Baden-Wurttemberg",
    },
  ],
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `app`                                                                                                                                          | [components.V1AccountLeaderboardAppSearch](../../models/components/v1accountleaderboardappsearch.md)                                           | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `badge`                                                                                                                                        | [components.V1AccountLeaderboardBadgeSearch](../../models/components/v1accountleaderboardbadgesearch.md)                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |                                                                                                                                                |
| `leaderboard`                                                                                                                                  | [components.V1LeaderboardGetAccountsMetaRequestBodyLeaderboard](../../models/components/v1leaderboardgetaccountsmetarequestbodyleaderboard.md) | :heavy_check_mark:                                                                                                                             | The leaderboard to get                                                                                                                         | xp                                                                                                                                             |
| `location`                                                                                                                                     | [components.V1LeaderboardLocation](../../models/components/v1leaderboardlocation.md)[]                                                         | :heavy_minus_sign:                                                                                                                             | The location(s)to get the leaderboard for, otherwise global                                                                                    |                                                                                                                                                |