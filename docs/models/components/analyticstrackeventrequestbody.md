# AnalyticsTrackEventRequestBody

## Example Usage

```typescript
import { AnalyticsTrackEventRequestBody } from "@steamsets/client-ts/models/components";

let value: AnalyticsTrackEventRequestBody = {
  payload: {},
  type: "search",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload`                                                                                                                                                                        | Record<string, *any*>                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                               | Per-type fields. profile_view: {accountId}. search: {source, query, resultCount}.                                                                                                |
| `type`                                                                                                                                                                           | [components.AnalyticsTrackEventRequestBodyType](../../models/components/analyticstrackeventrequestbodytype.md)                                                                   | :heavy_check_mark:                                                                                                                                                               | Event class. profile_view is normally emitted server-side; this lets the frontend top it up for client-only flows. search captures account/app searches that bypass the backend. |