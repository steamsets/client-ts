# AccountAddPushSubscriptionRequestBody

## Example Usage

```typescript
import { AccountAddPushSubscriptionRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountAddPushSubscriptionRequestBody = {
  auth: "<value>",
  endpoint: "<value>",
  p256dh: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `auth`                                             | *string*                                           | :heavy_check_mark:                                 | The auth secret of the PushSubscription, base64url |
| `endpoint`                                         | *string*                                           | :heavy_check_mark:                                 | The endpoint of the browser's PushSubscription     |
| `p256dh`                                           | *string*                                           | :heavy_check_mark:                                 | The p256dh key of the PushSubscription, base64url  |
| `userAgent`                                        | *string*                                           | :heavy_minus_sign:                                 | Names the device in the settings                   |