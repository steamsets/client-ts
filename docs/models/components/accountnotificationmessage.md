# AccountNotificationMessage

## Example Usage

```typescript
import { AccountNotificationMessage } from "@steamsets/client-ts/models/components";

let value: AccountNotificationMessage = {
  action: "<value>",
  icon: "<value>",
  lines: [
    {
      text: "<value>",
      url: "https://profitable-space.net",
    },
  ],
  title: "<value>",
  url: "https://happy-go-lucky-depot.com/",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The label of the button that opens url                                                                   |
| `icon`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Image URL for the thumbnail, empty for none                                                              |
| `lines`                                                                                                  | [components.AccountNotificationMessageLine](../../models/components/accountnotificationmessageline.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `title`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `url`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Where a click goes                                                                                       |