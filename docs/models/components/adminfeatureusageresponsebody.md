# AdminFeatureUsageResponseBody

## Example Usage

```typescript
import { AdminFeatureUsageResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminFeatureUsageResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminFeatureUsageResponseBody.json",
  bucket: "hour",
  bucketStartsAt: [
    new Date("2026-09-17T08:11:20.050Z"),
    new Date("2024-11-20T08:17:52.138Z"),
  ],
  endAt: new Date("2026-12-25T07:55:03.459Z"),
  events: [],
  features: [
    {
      eventSessions: 900744,
      eventSessionsPrevious: 439671,
      events: 400986,
      eventsPrevious: 76261,
      feature: "badge-search",
      viewSessionSeries: [
        520671,
        118184,
      ],
      viewSessions: 490334,
      viewSessionsPrevious: 699833,
      views: 854575,
      viewsPrevious: 104608,
    },
  ],
  pageEvents: [
    {
      event: "tools-handshake-start",
      eventSeries: [
        313722,
      ],
      events: 153324,
      eventsPrevious: 264086,
      feature: "tools",
      page: "handshake",
      sessions: 404534,
      sessionsPrevious: 787489,
    },
  ],
  pages: [],
  previousStartAt: new Date("2025-08-04T10:17:50.983Z"),
  site: {
    eventSessions: 331727,
    eventSessionsPrevious: 257473,
    events: 830242,
    eventsPrevious: 744391,
    viewSessions: 15552,
    viewSessionsPrevious: 877553,
    views: 867475,
    viewsPrevious: 441287,
  },
  startAt: new Date("2024-09-14T15:49:35.033Z"),
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                                | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | A URL to the JSON Schema for this object.                                                                                     | https://api.steamsets.com/schemas/AdminFeatureUsageResponseBody.json                                                          |
| `bucket`                                                                                                                      | [components.Bucket](../../models/components/bucket.md)                                                                        | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `bucketStartsAt`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)[]                               | :heavy_check_mark:                                                                                                            | The start of each bucket of the series; the first and the last can be partial                                                 |                                                                                                                               |
| `endAt`                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `events`                                                                                                                      | [components.FeatureUsageEvent](../../models/components/featureusageevent.md)[]                                                | :heavy_check_mark:                                                                                                            | One row per feature and custom event; ui-click is left out                                                                    |                                                                                                                               |
| `features`                                                                                                                    | [components.FeatureUsageFeature](../../models/components/featureusagefeature.md)[]                                            | :heavy_check_mark:                                                                                                            | One row per feature seen, most viewing sessions first; other holds what no area matched                                       |                                                                                                                               |
| `pageEvents`                                                                                                                  | [components.FeatureUsagePageEvent](../../models/components/featureusagepageevent.md)[]                                        | :heavy_check_mark:                                                                                                            | One row per page and custom event; ui-click is left out                                                                       |                                                                                                                               |
| `pages`                                                                                                                       | [components.FeatureUsagePageRow](../../models/components/featureusagepagerow.md)[]                                            | :heavy_check_mark:                                                                                                            | One row per page seen, by feature, most viewing sessions first. The custom events count as in features but leave out ui-click |                                                                                                                               |
| `previousStartAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `site`                                                                                                                        | [components.FeatureUsageCounts](../../models/components/featureusagecounts.md)                                                | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `startAt`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |