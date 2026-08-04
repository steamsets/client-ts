# V1AccountReconnectRequestBody

## Example Usage

```typescript
import { V1AccountReconnectRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountReconnectRequestBody = {
  code: "123456",
  connectionId: "123456",
  redirectUri: "https://steamsets.com",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `code`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The code from the oauth2 provider to re-verify                               | 123456                                                                       |
| `connectionId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | The connection id to reconnect                                               | 123456                                                                       |
| `redirectUri`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | The redirect_uri used to obtain the code. Must be an allowed frontend origin | https://steamsets.com                                                        |