# V1ActivityListAccountTimelineResponseBody

## Example Usage

```typescript
import { V1ActivityListAccountTimelineResponseBody } from "@steamsets/client-ts/models/components";

let value: V1ActivityListAccountTimelineResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1ActivityListAccountTimelineResponseBody.json",
  rows: null,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | A URL to the JSON Schema for this object.                                              | https://api.steamsets.com/schemas/V1ActivityListAccountTimelineResponseBody.json       |
| `nextCursor`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | Pass as cursor to fetch the next page. Absent when there are no more rows.             |                                                                                        |
| `rows`                                                                                 | [components.V1ActivityTimelineRow](../../models/components/v1activitytimelinerow.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |