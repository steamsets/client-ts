# AdminGetBotRequestBody

## Example Usage

```typescript
import { AdminGetBotRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminGetBotRequestBody = {
  id: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `historyDays`                                                                                  | *number*                                                                                       | :heavy_minus_sign:                                                                             | Days of history to return. Up to 14 days come in hourly points, longer ranges in daily points. |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The bot's public id.                                                                           |