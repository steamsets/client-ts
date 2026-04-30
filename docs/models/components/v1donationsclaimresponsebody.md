# V1DonationsClaimResponseBody

## Example Usage

```typescript
import { V1DonationsClaimResponseBody } from "@steamsets/client-ts/models/components";

let value: V1DonationsClaimResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1DonationsClaimResponseBody.json",
  chain: "<value>",
  currency: "Iranian Rial",
  usdCents: 264924,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `dollarSchema`                                                      | *string*                                                            | :heavy_minus_sign:                                                  | A URL to the JSON Schema for this object.                           | https://api.steamsets.com/schemas/V1DonationsClaimResponseBody.json |
| `chain`                                                             | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |
| `usdCents`                                                          | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |