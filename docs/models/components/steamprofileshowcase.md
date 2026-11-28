# SteamProfileShowcase

## Example Usage

```typescript
import { SteamProfileShowcase } from "@steamsets/client-ts/models/components";

let value: SteamProfileShowcase = {
  active: true,
  level: 3,
  slots: [
    {},
  ],
  type: 9,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                 | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | Whether the showcase is shown                                                                            | true                                                                                                     |
| `level`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The upgrade level bought in the Points Shop, 1 to 3. Steam sends none for a showcase it does not upgrade | 3                                                                                                        |
| `slots`                                                                                                  | Record<string, *any*>[]                                                                                  | :heavy_check_mark:                                                                                       | Steam's slots for the showcase, as Steam sends them                                                      |                                                                                                          |
| `type`                                                                                                   | *number*                                                                                                 | :heavy_check_mark:                                                                                       | Steam's customization_type                                                                               | 9                                                                                                        |