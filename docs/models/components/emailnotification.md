# EmailNotification

## Example Usage

```typescript
import { EmailNotification } from "@steamsets/client-ts/models/components";

let value: EmailNotification = {
  enabled: true,
  type: "login",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `enabled`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | Whether the email notifications are enabled or not                                   | true                                                                                 |
| `type`                                                                               | [components.EmailNotificationType](../../models/components/emailnotificationtype.md) | :heavy_check_mark:                                                                   | The type of email notifications                                                      |                                                                                      |