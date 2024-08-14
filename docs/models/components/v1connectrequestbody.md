# V1ConnectRequestBody

## Example Usage

```typescript
import { V1ConnectRequestBody } from "@steamsets/client-ts/models/components";

let value: V1ConnectRequestBody = {
    code: "123456",
    provider: "discord",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `code`                                                     | *string*                                                   | :heavy_check_mark:                                         | The code from the oauth2 provider to verify                | 123456                                                     |
| `provider`                                                 | [components.Provider](../../models/components/provider.md) | :heavy_check_mark:                                         | The provider to connect with                               | discord                                                    |