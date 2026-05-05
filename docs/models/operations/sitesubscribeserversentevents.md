# SiteSubscribeServerSentEvents

Each oneOf object in the array represents one possible Server Sent Events (SSE) message, serialized as UTF-8 text according to the SSE specification.


## Supported Types

### `operations.SiteSubscribeServerSentEventsEventHeartbeat`

```typescript
const value: operations.SiteSubscribeServerSentEventsEventHeartbeat = {
  data: {
    heartbeat: 264709,
  },
  event: "heartbeat",
};
```

### `operations.EventMaintenanceChanged`

```typescript
const value: operations.EventMaintenanceChanged = {
  data: {
    items: [
      {
        dollarSchema: "https://api.steamsets.com/schemas/MaintenanceEvent.json",
        createdAt: new Date("2024-11-29T20:45:34.267Z"),
        enabled: true,
        message: "<value>",
        paths: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        title: "<value>",
        uid: "<id>",
        updatedAt: new Date("2026-02-08T17:26:20.959Z"),
      },
    ],
  },
  event: "maintenance-changed",
};
```

