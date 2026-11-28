# AnalyticsTrackSearchParseRequestBody

## Example Usage

```typescript
import { AnalyticsTrackSearchParseRequestBody } from "@steamsets/client-ts/models/components";

let value: AnalyticsTrackSearchParseRequestBody = {
  cached: false,
  chips: [
    "<value 1>",
    "<value 2>",
  ],
  model: "Jetta",
  ms: 873313,
  names: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  page: "badges",
  picks: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  promptVersion: 323786,
  query: "<value>",
  raw: "<value>",
  rejected: [],
  schemaHash: "<value>",
  schemaVersion: 432590,
  text: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `cached`                                                                                 | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `chips`                                                                                  | *string*[]                                                                               | :heavy_check_mark:                                                                       | The word reader's chips the model got as input                                           |                                                                                          |
| `model`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `ms`                                                                                     | *number*                                                                                 | :heavy_check_mark:                                                                       | Milliseconds the read took                                                               |                                                                                          |
| `names`                                                                                  | *string*[]                                                                               | :heavy_check_mark:                                                                       | Text filters the model named, as key~name                                                |                                                                                          |
| `page`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | badges                                                                                   |
| `picks`                                                                                  | *string*[]                                                                               | :heavy_check_mark:                                                                       | The chips the model added after the check against the filter definitions                 |                                                                                          |
| `promptVersion`                                                                          | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `query`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | The query the model read, as typed                                                       |                                                                                          |
| `queryId`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | The query id of the same search in analytics.trackSearches; empty when the page had none |                                                                                          |
| `raw`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | The model's answer as it came; the API keeps 4000 characters                             |                                                                                          |
| `rejected`                                                                               | *string*[]                                                                               | :heavy_check_mark:                                                                       | What the check refused                                                                   |                                                                                          |
| `schemaHash`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `schemaVersion`                                                                          | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `text`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | The words left for the visual ranking                                                    |                                                                                          |