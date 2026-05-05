# BadgePricingSubscribeServerSentEvents

Each oneOf object in the array represents one possible Server Sent Events (SSE) message, serialized as UTF-8 text according to the SSE specification.


## Supported Types

### `operations.ServerSentEventsEventHeartbeat`

```typescript
const value: operations.ServerSentEventsEventHeartbeat = {
  data: {
    heartbeat: 357448,
  },
  event: "heartbeat",
};
```

### `operations.EventMarketPriceTick`

```typescript
const value: operations.EventMarketPriceTick = {
  data: {
    appId: 740400,
    averageListings: 787684,
    badgeType: "<value>",
    buyOrderAveragePrice: 530592,
    cardAveragePrice: 804509,
    setBuyOrderPrice: 706585,
    setPrice: 270552,
    updatedAt: 433386,
  },
  event: "market-price-tick",
};
```

