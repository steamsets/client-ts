# LiveSubscribeStats

## Example Usage

```typescript
import { LiveSubscribeStats } from "@steamsets/client-ts/models/components";

let value: LiveSubscribeStats = {
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
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `value`                                                  | [components.V1Stats](../../models/components/v1stats.md) | :heavy_check_mark:                                       | N/A                                                      |