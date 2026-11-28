# AccountGetNotificationSettingsPushDevice

## Example Usage

```typescript
import { AccountGetNotificationSettingsPushDevice } from "@steamsets/client-ts/models/components";

let value: AccountGetNotificationSettingsPushDevice = {
  createdAt: new Date("2025-02-18T13:02:58.638Z"),
  endpoint: "<value>",
  userAgent: "<value>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `endpoint`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Identifies the device. Compare with the browser's own subscription, and pass it to removePushSubscription |
| `userAgent`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |