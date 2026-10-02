# V1AdminListHiddenAccountsResponseBody

## Example Usage

```typescript
import { V1AdminListHiddenAccountsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminListHiddenAccountsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminListHiddenAccountsResponseBody.json",
  accounts: [],
  summary: {
    owner: 1200,
    reasons: [
      {
        count: 12,
        reason: "privacy",
      },
    ],
    self: 30,
    staff: 4,
  },
  total: 1234,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A URL to the JSON Schema for this object.                                                            | https://api.steamsets.com/schemas/V1AdminListHiddenAccountsResponseBody.json                         |
| `accounts`                                                                                           | [components.V1AdminHiddenAccount](../../models/components/v1adminhiddenaccount.md)[]                 | :heavy_check_mark:                                                                                   | The accounts on this page: newest restriction first, then owner-hidden accounts by newest account id |                                                                                                      |
| `summary`                                                                                            | [components.V1AdminHiddenAccountsSummary](../../models/components/v1adminhiddenaccountssummary.md)   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `total`                                                                                              | *number*                                                                                             | :heavy_check_mark:                                                                                   | How many accounts match the kind                                                                     | 1234                                                                                                 |