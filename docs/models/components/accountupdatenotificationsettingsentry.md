# AccountUpdateNotificationSettingsEntry

## Example Usage

```typescript
import { AccountUpdateNotificationSettingsEntry } from "@steamsets/client-ts/models/components";

let value: AccountUpdateNotificationSettingsEntry = {
  channel: "discord",
  enabled: false,
  kind: "submission_replied",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `channel`                                                                                                                            | [components.AccountUpdateNotificationSettingsEntryChannel](../../models/components/accountupdatenotificationsettingsentrychannel.md) | :heavy_check_mark:                                                                                                                   | inbox is only for the kinds that can leave the inbox, the trade match digests                                                        |
| `enabled`                                                                                                                            | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `kind`                                                                                                                               | [components.AccountUpdateNotificationSettingsEntryKind](../../models/components/accountupdatenotificationsettingsentrykind.md)       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |