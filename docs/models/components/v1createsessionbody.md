# V1CreateSessionBody

## Example Usage

```typescript
import { V1CreateSessionBody } from "@steamsets/client-ts/models/components";

let value: V1CreateSessionBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1CreateSessionBody.json",
  limit: 1,
  remain: 1,
  reset: "1",
  sessionToken: "ABC123",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `dollarSchema`                                             | *string*                                                   | :heavy_minus_sign:                                         | A URL to the JSON Schema for this object.                  | https://api.steamsets.com/schemas/V1CreateSessionBody.json |
| `limit`                                                    | *number*                                                   | :heavy_check_mark:                                         | The ratelimit limit                                        | 1                                                          |
| `remain`                                                   | *number*                                                   | :heavy_check_mark:                                         | The ratelimit remain                                       | 1                                                          |
| `reset`                                                    | *string*                                                   | :heavy_check_mark:                                         | The ratelimit reset                                        | 1                                                          |
| `sessionToken`                                             | *string*                                                   | :heavy_check_mark:                                         | The session token                                          | ABC123                                                     |