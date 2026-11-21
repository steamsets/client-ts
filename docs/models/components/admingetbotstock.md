# AdminGetBotStock

## Example Usage

```typescript
import { AdminGetBotStock } from "@steamsets/client-ts/models/components";

let value: AdminGetBotStock = {
  apps: 319047,
  copies: 595165,
  foil: 121803,
  games: 73836,
  normal: 441977,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `apps`                        | *number*                      | :heavy_check_mark:            | Distinct apps with set stock. |
| `copies`                      | *number*                      | :heavy_check_mark:            | Game copies in stock.         |
| `foil`                        | *number*                      | :heavy_check_mark:            | Complete foil sets.           |
| `games`                       | *number*                      | :heavy_check_mark:            | Distinct games in stock.      |
| `normal`                      | *number*                      | :heavy_check_mark:            | Complete normal sets.         |