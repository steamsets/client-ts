# V1SubmissionsListMineResponseBody

## Example Usage

```typescript
import { V1SubmissionsListMineResponseBody } from "@steamsets/client-ts/models/components";

let value: V1SubmissionsListMineResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1SubmissionsListMineResponseBody.json",
  submissions: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `dollarSchema`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | A URL to the JSON Schema for this object.                                | https://api.steamsets.com/schemas/V1SubmissionsListMineResponseBody.json |
| `submissions`                                                            | [components.Submission](../../models/components/submission.md)[]         | :heavy_check_mark:                                                       | The account's reports, newest first. At most 100                         |                                                                          |