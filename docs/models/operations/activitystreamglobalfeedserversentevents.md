# ActivityStreamGlobalFeedServerSentEvents

Each oneOf object in the array represents one possible Server Sent Events (SSE) message, serialized as UTF-8 text according to the SSE specification.


## Supported Types

### `operations.EventActivityEmitted`

```typescript
const value: operations.EventActivityEmitted = {
  data: {
    accountId: 72064,
    eventType: "<value>",
    occurredAt: new Date("2025-10-05T02:03:08.232Z"),
  },
  event: "activity-emitted",
};
```

