# AdminFeatureBreakdownResponseBody

## Example Usage

```typescript
import { AdminFeatureBreakdownResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminFeatureBreakdownResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminFeatureBreakdownResponseBody.json",
  endAt: new Date("2025-04-06T08:30:31.441Z"),
  isTruncated: true,
  properties: [],
  rows: [],
  startAt: new Date("2026-03-04T23:40:50.276Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/AdminFeatureBreakdownResponseBody.json                      |
| `endAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `isTruncated`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | More than 500 rows matched and the rest were left out                                         |                                                                                               |
| `properties`                                                                                  | [components.FeatureUsageProperty](../../models/components/featureusageproperty.md)[]          | :heavy_check_mark:                                                                            | The properties the event carried in the window, most sends first                              |                                                                                               |
| `rows`                                                                                        | [components.FeatureUsageBreakdownRow](../../models/components/featureusagebreakdownrow.md)[]  | :heavy_check_mark:                                                                            | Events and sessions per value and split, most events first                                    |                                                                                               |
| `startAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |