# BotPlanApp

## Example Usage

```typescript
import { BotPlanApp } from "@steamsets/client-ts/models/components";

let value: BotPlanApp = {
  appId: 130379,
  foil: 49222,
  normal: 373938,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `appId`                    | *number*                   | :heavy_check_mark:         | N/A                        |
| `foil`                     | *number*                   | :heavy_check_mark:         | Foil sets to buy (0 or 1). |
| `normal`                   | *number*                   | :heavy_check_mark:         | Normal sets to buy.        |