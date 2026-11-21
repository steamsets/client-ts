# AdminGetBotLimits

## Example Usage

```typescript
import { AdminGetBotLimits } from "@steamsets/client-ts/models/components";

let value: AdminGetBotLimits = {
  maxSetsPerApp: 577730,
  maxStockPerApp: null,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `maxSetsPerApp`                                                             | *number*                                                                    | :heavy_check_mark:                                                          | Most sets of one app sold to one user. Null for no limit.                   |
| `maxStockPerApp`                                                            | *number*                                                                    | :heavy_check_mark:                                                          | Most sets of one app the bot holds when it buys. Null when it does not say. |