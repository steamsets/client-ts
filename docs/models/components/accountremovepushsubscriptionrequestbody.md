# AccountRemovePushSubscriptionRequestBody

## Example Usage

```typescript
import { AccountRemovePushSubscriptionRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountRemovePushSubscriptionRequestBody = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `endpoint`                                                    | *string*                                                      | :heavy_minus_sign:                                            | The endpoint of the browser's PushSubscription                |
| `id`                                                          | *number*                                                      | :heavy_minus_sign:                                            | The id of the push subscription, from getNotificationSettings |