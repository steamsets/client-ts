# V1VanityVerifyResponseBody

## Example Usage

```typescript
import { V1VanityVerifyResponseBody } from "@steamsets/client-ts/models/components";

let value: V1VanityVerifyResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1VanityVerifyResponseBody.json",
  status: "<value>",
  vanity: "<value>",
  verifiedAt: 897731,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `dollarSchema`                                                    | *string*                                                          | :heavy_minus_sign:                                                | A URL to the JSON Schema for this object.                         | https://api.steamsets.com/schemas/V1VanityVerifyResponseBody.json |
| `accountId`                                                       | *number*                                                          | :heavy_minus_sign:                                                | set when status is "taken"                                        |                                                                   |
| `status`                                                          | *string*                                                          | :heavy_check_mark:                                                | "free" or "taken"                                                 |                                                                   |
| `vanity`                                                          | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `verifiedAt`                                                      | *number*                                                          | :heavy_check_mark:                                                | unix ms of the live check                                         |                                                                   |