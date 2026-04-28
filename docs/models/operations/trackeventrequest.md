# TrackEventRequest

## Example Usage

```typescript
import { TrackEventRequest } from "@steamsets/client-ts/models/operations";

let value: TrackEventRequest = {
  analyticsTrackEventRequestBody: {
    payload: {
      "key": "<value>",
    },
    type: "search",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `xForwardedFor`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `userAgent`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `xVisitorId`                                                                                           | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `analyticsTrackEventRequestBody`                                                                       | [components.AnalyticsTrackEventRequestBody](../../models/components/analyticstrackeventrequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |