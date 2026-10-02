# V1AdminHiddenAccountsSummary

## Example Usage

```typescript
import { V1AdminHiddenAccountsSummary } from "@steamsets/client-ts/models/components";

let value: V1AdminHiddenAccountsSummary = {
  owner: 1200,
  reasons: [
    {
      count: 12,
      reason: "privacy",
    },
  ],
  self: 30,
  staff: 4,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `owner`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | Accounts the owner hid                                                                       | 1200                                                                                         |
| `reasons`                                                                                    | [components.V1AdminOptOutReasonCount](../../models/components/v1adminoptoutreasoncount.md)[] | :heavy_check_mark:                                                                           | How often each opt-out reason was given, most common first                                   |                                                                                              |
| `self`                                                                                       | *number*                                                                                     | :heavy_check_mark:                                                                           | Opt-outs in force                                                                            | 30                                                                                           |
| `staff`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | Staff restrictions in force                                                                  | 4                                                                                            |