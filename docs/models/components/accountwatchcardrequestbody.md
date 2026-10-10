# AccountWatchCardRequestBody

## Example Usage

```typescript
import { AccountWatchCardRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountWatchCardRequestBody = {
  itemId: "753-1234567890",
  watch: true,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `itemId`                                   | *string*                                   | :heavy_check_mark:                         | The trading card item id                   | 753-1234567890                             |
| `watch`                                    | *boolean*                                  | :heavy_check_mark:                         | Whether to watch or stop watching the card | true                                       |