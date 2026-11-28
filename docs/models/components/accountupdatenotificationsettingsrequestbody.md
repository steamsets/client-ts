# AccountUpdateNotificationSettingsRequestBody

## Example Usage

```typescript
import { AccountUpdateNotificationSettingsRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountUpdateNotificationSettingsRequestBody = {
  settings: null,
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `product`                                                                                                                                        | [components.AccountUpdateNotificationSettingsRequestBodyProduct](../../models/components/accountupdatenotificationsettingsrequestbodyproduct.md) | :heavy_minus_sign:                                                                                                                               | The site the settings belong to. A kind of another site is refused                                                                               |
| `settings`                                                                                                                                       | [components.AccountUpdateNotificationSettingsEntry](../../models/components/accountupdatenotificationsettingsentry.md)[]                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |