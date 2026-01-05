# V1AccountRefreshInventoryResponseBody

## Example Usage

```typescript
import { V1AccountRefreshInventoryResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountRefreshInventoryResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountRefreshInventoryResponseBody.json",
  nextRefreshAt: 887103,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `dollarSchema`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | A URL to the JSON Schema for this object.                                    | https://api.steamsets.com/schemas/V1AccountRefreshInventoryResponseBody.json |
| `nextRefreshAt`                                                              | *number*                                                                     | :heavy_check_mark:                                                           | Unix timestamp (seconds) when next refresh is allowed                        |                                                                              |