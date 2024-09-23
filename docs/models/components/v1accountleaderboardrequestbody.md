# V1AccountLeaderboardRequestBody

## Example Usage

```typescript
import { V1AccountLeaderboardRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountLeaderboardRequestBody = {
  appId: 730,
  badgeId: "4",
  badgeIsFoil: true,
  end: 10,
  leaderboard: "xp",
  location: {
    city: "Bad Krozingen",
    country: "Germany",
    region: "Europe",
    state: "Baden-Wurttemberg",
  },
  start: 1,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `appId`                                                                                                                        | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | For a given app leaderboard, the app id                                                                                        | 730                                                                                                                            |
| `badgeId`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | For a given badge leaderboard, the steam badge id                                                                              | 4                                                                                                                              |
| `badgeIsFoil`                                                                                                                  | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | For a given badge leaderboard, whether the badge is foil or not                                                                | true                                                                                                                           |
| `end`                                                                                                                          | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The end index                                                                                                                  | 10                                                                                                                             |
| `leaderboard`                                                                                                                  | [components.V1AccountLeaderboardRequestBodyLeaderboard](../../models/components/v1accountleaderboardrequestbodyleaderboard.md) | :heavy_check_mark:                                                                                                             | The leaderboard to get                                                                                                         | xp                                                                                                                             |
| `location`                                                                                                                     | [components.V1LeaderboardLocation](../../models/components/v1leaderboardlocation.md)                                           | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `start`                                                                                                                        | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The start index                                                                                                                | 1                                                                                                                              |