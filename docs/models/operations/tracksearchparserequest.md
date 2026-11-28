# TrackSearchParseRequest

## Example Usage

```typescript
import { TrackSearchParseRequest } from "@steamsets/client-ts/models/operations";

let value: TrackSearchParseRequest = {
  analyticsTrackSearchParseRequestBody: {
    cached: false,
    chips: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    model: "Beetle",
    ms: 423655,
    names: [],
    page: "badges",
    picks: [
      "<value 1>",
    ],
    promptVersion: 613295,
    query: "<value>",
    raw: "<value>",
    rejected: [
      "<value 1>",
      "<value 2>",
    ],
    schemaHash: "<value>",
    schemaVersion: 680696,
    text: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `userAgent`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `xVisitorId`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `analyticsTrackSearchParseRequestBody`                                                                             | [components.AnalyticsTrackSearchParseRequestBody](../../models/components/analyticstracksearchparserequestbody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |