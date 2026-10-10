# AccountGetNotificationSettingsEntry

## Example Usage

```typescript
import { AccountGetNotificationSettingsEntry } from "@steamsets/client-ts/models/components";

let value: AccountGetNotificationSettingsEntry = {
  channel: "email",
  enabled: false,
  kind: "card_acquired",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `channel`                                                | [components.Channel](../../models/components/channel.md) | :heavy_check_mark:                                       | N/A                                                      |
| `enabled`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `kind`                                                   | [components.Kind](../../models/components/kind.md)       | :heavy_check_mark:                                       | N/A                                                      |