# AccountNotificationMessageLine

## Example Usage

```typescript
import { AccountNotificationMessageLine } from "@steamsets/client-ts/models/components";

let value: AccountNotificationMessageLine = {
  text: "<value>",
  url: "https://shoddy-adviser.net",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `text`                                      | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `url`                                       | *string*                                    | :heavy_check_mark:                          | Makes the text a link, empty for plain text |