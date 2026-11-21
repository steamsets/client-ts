# SteamProfileShowcase

## Example Usage

```typescript
import { SteamProfileShowcase } from "@steamsets/client-ts/models/components";

let value: SteamProfileShowcase = {
  active: true,
  slots: [
    {},
  ],
  type: 9,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `active`                                            | *boolean*                                           | :heavy_check_mark:                                  | Whether the showcase is shown                       | true                                                |
| `slots`                                             | Record<string, *any*>[]                             | :heavy_check_mark:                                  | Steam's slots for the showcase, as Steam sends them |                                                     |
| `type`                                              | *number*                                            | :heavy_check_mark:                                  | Steam's customization_type                          | 9                                                   |