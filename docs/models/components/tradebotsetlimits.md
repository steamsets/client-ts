# TradeBotSetLimits

## Example Usage

```typescript
import { TradeBotSetLimits } from "@steamsets/client-ts/models/components";

let value: TradeBotSetLimits = {
  maxPerApp: 11528,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `maxPerApp`                                               | *number*                                                  | :heavy_check_mark:                                        | Most sets of one app sold to one user. Null for no limit. |