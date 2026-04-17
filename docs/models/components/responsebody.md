# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "@steamsets/client-ts/models/components";

let value: ResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/ResponseBody.json",
  status: "<value>",
  vanity: "<value>",
  verifiedAt: 897731,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `dollarSchema`                                      | *string*                                            | :heavy_minus_sign:                                  | A URL to the JSON Schema for this object.           | https://api.steamsets.com/schemas/ResponseBody.json |
| `accountId`                                         | *number*                                            | :heavy_minus_sign:                                  | set when status is "taken"                          |                                                     |
| `status`                                            | *string*                                            | :heavy_check_mark:                                  | "free" or "taken"                                   |                                                     |
| `vanity`                                            | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |                                                     |
| `verifiedAt`                                        | *number*                                            | :heavy_check_mark:                                  | unix ms of the live check                           |                                                     |