# AdminBotSetBrandRequestBody

## Example Usage

```typescript
import { AdminBotSetBrandRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminBotSetBrandRequestBody = {
  botId: 209203,
  brandId: 214672,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `botId`                           | *number*                          | :heavy_check_mark:                | N/A                               |
| `brandId`                         | *number*                          | :heavy_check_mark:                | 0 takes the bot out of its brand. |