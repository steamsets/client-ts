# EventStatsSnapshot

## Example Usage

```typescript
import { EventStatsSnapshot } from "@steamsets/client-ts/models/operations";

let value: EventStatsSnapshot = {
  data: {
    dollarSchema: "https://api.steamsets.com/schemas/V1Stats.json",
    accountsAdded: 1,
    accountsUpdated: 1,
    appPlaytime: 1,
    apps: 1,
    awardsGiven: 1,
    awardsReceived: 1,
    badges: 1,
    bans: 1,
    foilBadges: 1,
    friends: 1,
    gameBans: 1,
    level: 1,
    normalBadges: 1,
    playtime: 1,
    pointsGiven: 1,
    pointsReceived: 1,
    steamSetsScore: 1,
    totalAccounts: 1,
    vacBans: 1,
    xp: 1,
  },
  event: "stats-snapshot",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `data`                                                   | [components.V1Stats](../../models/components/v1stats.md) | :heavy_check_mark:                                       | N/A                                                      |
| `event`                                                  | *"stats-snapshot"*                                       | :heavy_check_mark:                                       | The event name.                                          |
| `id`                                                     | *string*                                                 | :heavy_minus_sign:                                       | The event ID.                                            |
| `retry`                                                  | *number*                                                 | :heavy_minus_sign:                                       | The retry time in milliseconds.                          |