# V1AdminUpdateAccountResponseBody

## Example Usage

```typescript
import { V1AdminUpdateAccountResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminUpdateAccountResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminUpdateAccountResponseBody.json",
  customDonations: 2500,
  donations: 1000,
  total: 3500,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `dollarSchema`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | A URL to the JSON Schema for this object.                               | https://api.steamsets.com/schemas/V1AdminUpdateAccountResponseBody.json |
| `customDonations`                                                       | *number*                                                                | :heavy_check_mark:                                                      | The staff-granted donation total in cents                               | 2500                                                                    |
| `donations`                                                             | *number*                                                                | :heavy_check_mark:                                                      | The Patreon-reported donation total in cents                            | 1000                                                                    |
| `total`                                                                 | *number*                                                                | :heavy_check_mark:                                                      | The sum of both, which is what the donations leaderboard scores         | 3500                                                                    |