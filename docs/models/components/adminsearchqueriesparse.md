# AdminSearchQueriesParse

## Example Usage

```typescript
import { AdminSearchQueriesParse } from "@steamsets/client-ts/models/components";

let value: AdminSearchQueriesParse = {
  cached: 565945,
  lastRead: new Date("2024-12-10T02:27:38.645Z"),
  modelPicks: [
    "<value 1>",
  ],
  msP50: 5393.02,
  page: "badges",
  query: "<value>",
  readerChips: [
    "<value 1>",
    "<value 2>",
  ],
  reads: 986561,
  rejected: [
    "<value 1>",
    "<value 2>",
  ],
  searches: 521101,
  text: "<value>",
  zeroResults: 676767,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cached`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Reads answered from the parse cache                                                           |                                                                                               |
| `lastRead`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `modelPicks`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | The chips the model added after the check, from the latest read                               |                                                                                               |
| `msP50`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Median milliseconds per read                                                                  |                                                                                               |
| `page`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | badges                                                                                        |
| `query`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The query the model read, lowercased                                                          |                                                                                               |
| `readerChips`                                                                                 | *string*[]                                                                                    | :heavy_check_mark:                                                                            | The word reader's chips the model got, from the latest read                                   |                                                                                               |
| `reads`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Model reads of this query                                                                     |                                                                                               |
| `rejected`                                                                                    | *string*[]                                                                                    | :heavy_check_mark:                                                                            | What the check refused, from the latest read                                                  |                                                                                               |
| `searches`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Reads joined to their search_event search by query id                                         |                                                                                               |
| `text`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The words the latest read left for the visual ranking                                         |                                                                                               |
| `zeroResults`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Joined searches that found nothing                                                            |                                                                                               |