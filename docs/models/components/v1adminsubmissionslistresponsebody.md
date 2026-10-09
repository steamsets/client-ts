# V1AdminSubmissionsListResponseBody

## Example Usage

```typescript
import { V1AdminSubmissionsListResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminSubmissionsListResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminSubmissionsListResponseBody.json",
  byKind: [
    {
      count: 12,
      value: "new",
    },
  ],
  byStatus: [
    {
      count: 12,
      value: "new",
    },
  ],
  submissions: [],
  total: 40,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | A URL to the JSON Schema for this object.                                                  | https://api.steamsets.com/schemas/V1AdminSubmissionsListResponseBody.json                  |
| `byKind`                                                                                   | [components.V1AdminSubmissionsCount](../../models/components/v1adminsubmissionscount.md)[] | :heavy_check_mark:                                                                         | How many submissions have each kind, over every status                                     |                                                                                            |
| `byStatus`                                                                                 | [components.V1AdminSubmissionsCount](../../models/components/v1adminsubmissionscount.md)[] | :heavy_check_mark:                                                                         | How many submissions have each status, over every kind                                     |                                                                                            |
| `submissions`                                                                              | [components.V1AdminSubmission](../../models/components/v1adminsubmission.md)[]             | :heavy_check_mark:                                                                         | The submissions on this page, newest first                                                 |                                                                                            |
| `total`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | How many submissions match the filter                                                      | 40                                                                                         |