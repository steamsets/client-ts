# V1AdminGetAccountCosmetics

## Example Usage

```typescript
import { V1AdminGetAccountCosmetics } from "@steamsets/client-ts/models/components";

let value: V1AdminGetAccountCosmetics = {
  nameEffect: "rainbow",
  themeColor: "#FF5733",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `nameEffect`                                                          | *string*                                                              | :heavy_check_mark:                                                    | The name effect, none when the account has none                       | rainbow                                                               |
| `themeColor`                                                          | *string*                                                              | :heavy_check_mark:                                                    | The profile theme color as #RRGGBB, or null when the account has none | #FF5733                                                               |