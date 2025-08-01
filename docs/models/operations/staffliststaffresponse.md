# StaffListStaffResponse

## Example Usage

```typescript
import { StaffListStaffResponse } from "@steamsets/client-ts/models/operations";

let value: StaffListStaffResponse = {
  headers: {
    "key": [],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `leaderboardAccounts`                                                            | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)[] | :heavy_minus_sign:                                                               | OK                                                                               |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |