# AccountSubscribeServerSentEvents

Each oneOf object in the array represents one possible Server Sent Events (SSE) message, serialized as UTF-8 text according to the SSE specification.


## Supported Types

### `operations.EventAccountUpdated`

```typescript
const value: operations.EventAccountUpdated = {
  data: {
    accountId: 275956,
    status: "<value>",
  },
  event: "account-updated",
};
```

### `operations.EventAccountViewTick`

```typescript
const value: operations.EventAccountViewTick = {
  data: {
    accountId: 237226,
    totalDelta: 913095,
  },
  event: "account-view-tick",
};
```

### `operations.EventHeartbeat`

```typescript
const value: operations.EventHeartbeat = {
  data: {
    heartbeat: 821200,
  },
  event: "heartbeat",
};
```

