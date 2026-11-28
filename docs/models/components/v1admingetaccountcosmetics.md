# V1AdminGetAccountCosmetics

## Example Usage

```typescript
import { V1AdminGetAccountCosmetics } from "@steamsets/client-ts/models/components";

let value: V1AdminGetAccountCosmetics = {
  nameEffect: "rainbow",
  supporterStreak: 0,
  themeColor: "#FF5733",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `nameEffect`                                                          | *string*                                                              | :heavy_check_mark:                                                    | The name effect, none when the account has none                       | rainbow                                                               |
| `supporterStreak`                                                     | *number*                                                              | :heavy_check_mark:                                                    | The picked support streak, 1 to 10, or 0 when the months choose it    | 0                                                                     |
| `themeColor`                                                          | *string*                                                              | :heavy_check_mark:                                                    | The profile theme color as #RRGGBB, or null when the account has none | #FF5733                                                               |