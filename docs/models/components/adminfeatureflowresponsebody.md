# AdminFeatureFlowResponseBody

## Example Usage

```typescript
import { AdminFeatureFlowResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminFeatureFlowResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminFeatureFlowResponseBody.json",
  endAt: new Date("2026-01-14T11:49:52.927Z"),
  isTruncated: false,
  links: [
    {
      sessions: 899820,
      source: "0",
      target: "1:tools-handshake-start",
    },
  ],
  nodes: [],
  reach: [
    {
      event: "tools-path-result",
      sessions: 269395,
    },
  ],
  sessions: 813365,
  startAt: new Date("2024-12-29T00:22:12.474Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/AdminFeatureFlowResponseBody.json                           |
| `endAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `isTruncated`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | More than 10000 distinct paths or events matched and the rest were left out                   |                                                                                               |
| `links`                                                                                       | [components.FeatureUsageFlowLink](../../models/components/featureusageflowlink.md)[]          | :heavy_check_mark:                                                                            | The sessions that went from one node to a node of the next step                               |                                                                                               |
| `nodes`                                                                                       | [components.FeatureUsageFlowNode](../../models/components/featureusageflownode.md)[]          | :heavy_check_mark:                                                                            | Step by step, most sessions first in a step, other last                                       |                                                                                               |
| `reach`                                                                                       | [components.FeatureUsageFlowReach](../../models/components/featureusageflowreach.md)[]        | :heavy_check_mark:                                                                            | Each event's viewing sessions, most first                                                     |                                                                                               |
| `sessions`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Sessions with a page view on the feature's pages, or on the route's                           |                                                                                               |
| `startAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |