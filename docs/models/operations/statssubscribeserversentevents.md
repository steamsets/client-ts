# StatsSubscribeServerSentEvents

Each oneOf object in the array represents one possible Server Sent Events (SSE) message, serialized as UTF-8 text according to the SSE specification.


## Supported Types

### `operations.EventStatsHeartbeat`

```typescript
const value: operations.EventStatsHeartbeat = {
  data: {
    heartbeat: 224657,
  },
  event: "stats-heartbeat",
};
```

### `operations.EventStatsSnapshot`

```typescript
const value: operations.EventStatsSnapshot = {
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

### `operations.EventStatsUpdated`

```typescript
const value: operations.EventStatsUpdated = {
  data: {
    date: "2024-11-19",
    deltas: {
      "key": 215320,
      "key1": 607920,
    },
  },
  event: "stats-updated",
};
```

