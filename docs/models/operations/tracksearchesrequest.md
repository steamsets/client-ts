# TrackSearchesRequest

## Example Usage

```typescript
import { TrackSearchesRequest } from "@steamsets/client-ts/models/operations";

let value: TrackSearchesRequest = {
  analyticsTrackSearchesRequestBody: {
    events: [
      {
        chips: [
          {
            key: "type",
            value: "foil",
          },
        ],
        kind: "open",
        query: "<value>",
        queryId: "d8d4a7ee-0cd7-4a40-aeff-1214cecc2dd7",
        surface: "badges",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `userAgent`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `xVisitorId`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `analyticsTrackSearchesRequestBody`                                                                          | [components.AnalyticsTrackSearchesRequestBody](../../models/components/analyticstracksearchesrequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |