# V1AccountCreateConnectionRequestBody

## Example Usage

```typescript
import { V1AccountCreateConnectionRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountCreateConnectionRequestBody = {
  code: "123456",
  provider: "discord",
  redirectUri: "https://steamsets.com",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `code`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The code from the oauth2 provider to verify                                  | 123456                                                                       |
| `provider`                                                                   | [components.Provider](../../models/components/provider.md)                   | :heavy_check_mark:                                                           | The provider to connect with                                                 | discord                                                                      |
| `redirectUri`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | The redirect_uri used to obtain the code. Must be an allowed frontend origin | https://steamsets.com                                                        |