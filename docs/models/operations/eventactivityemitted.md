# EventActivityEmitted

## Example Usage

```typescript
import { EventActivityEmitted } from "@steamsets/client-ts/models/operations";

let value: EventActivityEmitted = {
  data: {
    account: null,
    accountId: 586757,
    appBadge: {
      accountInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        xp: 123456,
      },
      appId: 267127,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 569677,
      baseXp: 451732,
      cardCount: 525700,
      firstCompletion: new Date("2025-12-05T06:35:52.464Z"),
      highestLevel: 892305,
      isEvent: true,
      isFoil: true,
      isNmc: false,
      isSale: false,
      lastCompletion: new Date("2026-01-21T07:57:03.775Z"),
      name: "<value>",
      noListing: true,
      price: 499252,
      scarcity: 372005,
      steamId: 138718,
      trackedHolders: 449229,
    },
    eventType: "<value>",
    occurredAt: new Date("2025-09-12T07:27:32.775Z"),
    rank: {
      bucket: "<value>",
      current: 524914,
      leaderboard: "<value>",
      location: {
        countryCode: "DE",
        countryName: "Germany",
        region: "Europe",
        type: "<value>",
      },
      previous: 751062,
    },
  },
  event: "activity-emitted",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [components.V1ActivityEvent](../../models/components/v1activityevent.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `event`                                                                  | *"activity-emitted"*                                                     | :heavy_check_mark:                                                       | The event name.                                                          |
| `id`                                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | The event ID.                                                            |
| `retry`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | The retry time in milliseconds.                                          |