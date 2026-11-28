# AdminFeatureClicksResponseBody

## Example Usage

```typescript
import { AdminFeatureClicksResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminFeatureClicksResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminFeatureClicksResponseBody.json",
  endAt: new Date("2026-12-24T07:07:45.060Z"),
  isPointsTruncated: false,
  points: [],
  sectionTargets: [
    {
      clicks: 859827,
      section: "handshake-graph",
      sessions: 565678,
      target: "button",
    },
  ],
  sections: [
    {
      clicks: 312953,
      section: "handshake-graph",
      sessions: 814463,
      target: "button",
    },
  ],
  startAt: new Date("2024-09-27T21:17:04.291Z"),
  targets: [
    {
      clicks: 358483,
      section: "handshake-graph",
      sessions: 614039,
      target: "button",
    },
  ],
  total: {
    clicks: 798122,
    section: "handshake-graph",
    sessions: 205120,
    target: "button",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/AdminFeatureClicksResponseBody.json                         |
| `endAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `isPointsTruncated`                                                                           | *boolean*                                                                                     | :heavy_check_mark:                                                                            | More than 5000 clicks matched and the older ones were left out                                |                                                                                               |
| `points`                                                                                      | [components.FeatureUsageClickPoint](../../models/components/featureusageclickpoint.md)[]      | :heavy_check_mark:                                                                            | Where the newest clicks landed, at most 5000                                                  |                                                                                               |
| `sectionTargets`                                                                              | [components.FeatureUsageClickCount](../../models/components/featureusageclickcount.md)[]      | :heavy_check_mark:                                                                            | Per section and target, most clicks first                                                     |                                                                                               |
| `sections`                                                                                    | [components.FeatureUsageClickCount](../../models/components/featureusageclickcount.md)[]      | :heavy_check_mark:                                                                            | Per section, most clicks first                                                                |                                                                                               |
| `startAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `targets`                                                                                     | [components.FeatureUsageClickCount](../../models/components/featureusageclickcount.md)[]      | :heavy_check_mark:                                                                            | Per target, most clicks first                                                                 |                                                                                               |
| `total`                                                                                       | [components.FeatureUsageClickCount](../../models/components/featureusageclickcount.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |