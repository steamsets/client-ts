# V1AccountSubscribeEmailRequestBody

## Example Usage

```typescript
import { V1AccountSubscribeEmailRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountSubscribeEmailRequestBody = {
  email: "steamsets@example.com",
  subscribed: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `email`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | The email address to subscribe to the newsletter (only for the landing page) | steamsets@example.com                                                        |
| `subscribed`                                                                 | *boolean*                                                                    | :heavy_check_mark:                                                           | Whether the account wants to be subscribed to the newsletter                 | true                                                                         |