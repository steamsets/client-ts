# V1AccountGetAchievementsResponseBody

## Example Usage

```typescript
import { V1AccountGetAchievementsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountGetAchievementsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountGetAchievementsResponseBody.json",
  games: [
    {
      achievements: [],
      appId: 1250,
      crawled: true,
      playtime: 61200,
      total: 285,
      unlocked: 56,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      | Example                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                                                                   | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | A URL to the JSON Schema for this object.                                                                                                                        | https://api.steamsets.com/schemas/V1AccountGetAchievementsResponseBody.json                                                                                      |
| `games`                                                                                                                                                          | [components.V1AchievementGame](../../models/components/v1achievementgame.md)[]                                                                                   | :heavy_check_mark:                                                                                                                                               | The asked games the account owns or that have achievements, in the asked order. Unless the account's game details are public, no game shows unlocks, as on Steam |                                                                                                                                                                  |