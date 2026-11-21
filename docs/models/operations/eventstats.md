# EventStats

## Example Usage

```typescript
import { EventStats } from "@steamsets/client-ts/models/operations";

let value: EventStats = {
  data: {
    value: {
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
  },
  event: "stats",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [components.LiveSubscribeStats](../../models/components/livesubscribestats.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `event`                                                                        | *"stats"*                                                                      | :heavy_check_mark:                                                             | The event name.                                                                |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | The event ID.                                                                  |
| `retry`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | The retry time in milliseconds.                                                |