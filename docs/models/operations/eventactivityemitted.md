# EventActivityEmitted

## Example Usage

```typescript
import { EventActivityEmitted } from "@steamsets/client-ts/models/operations";

let value: EventActivityEmitted = {
  data: {
    account: null,
    appBadge: {
      accountInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        xp: 123456,
      },
      appId: 255278,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 267127,
      baseXp: 569677,
      cardCount: 451732,
      firstCompletion: new Date("2025-10-14T14:59:56.930Z"),
      highestLevel: 642587,
      isEvent: false,
      isFoil: true,
      isNmc: true,
      isSale: false,
      lastCompletion: new Date("2026-03-31T21:12:39.791Z"),
      name: "<value>",
      noListing: false,
      price: 215870,
      scarcity: 499252,
      steamId: 372005,
      trackedHolders: 138718,
    },
    eventType: "<value>",
    occurredAt: new Date("2025-10-05T02:03:08.232Z"),
    rank: {
      bucket: "<value>",
      current: 160121,
      leaderboard: "<value>",
      location: {
        countryCode: "DE",
        countryName: "Germany",
        region: "Europe",
        type: "<value>",
      },
      previous: 524914,
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