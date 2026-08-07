# DonateSupporter

## Example Usage

```typescript
import { DonateSupporter } from "@steamsets/client-ts/models/components";

let value: DonateSupporter = {
  accountId: 123456,
  avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
  name: "steamsets",
  vanity: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `accountId`                               | *number*                                  | :heavy_check_mark:                        | The account id                            | 123456                                    |
| `avatar`                                  | *string*                                  | :heavy_check_mark:                        | The avatar hash                           | f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9          |
| `name`                                    | *string*                                  | :heavy_check_mark:                        | The account's display name                | steamsets                                 |
| `vanity`                                  | *string*                                  | :heavy_check_mark:                        | The account's vanity, null if it has none |                                           |