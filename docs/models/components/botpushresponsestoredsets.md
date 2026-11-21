# BotPushResponseStoredSets

## Example Usage

```typescript
import { BotPushResponseStoredSets } from "@steamsets/client-ts/models/components";

let value: BotPushResponseStoredSets = {
  apps: 859920,
  foil: 545999,
  normal: 635473,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `apps`                        | *number*                      | :heavy_check_mark:            | Distinct apps with set stock. |
| `foil`                        | *number*                      | :heavy_check_mark:            | Complete foil sets.           |
| `normal`                      | *number*                      | :heavy_check_mark:            | Complete normal sets.         |