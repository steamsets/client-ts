# V1AdminGetPlayerBanStatusResponseBody

## Example Usage

```typescript
import { V1AdminGetPlayerBanStatusResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminGetPlayerBanStatusResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminGetPlayerBanStatusResponseBody.json",
  banStartTime: 543501,
  banned: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `dollarSchema`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | A URL to the JSON Schema for this object.                                    | https://api.steamsets.com/schemas/V1AdminGetPlayerBanStatusResponseBody.json |
| `banStartTime`                                                               | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `banned`                                                                     | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |