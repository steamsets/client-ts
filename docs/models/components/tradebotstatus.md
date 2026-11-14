# TradeBotStatus

## Example Usage

```typescript
import { TradeBotStatus } from "@steamsets/client-ts/models/components";

let value: TradeBotStatus = {
  online: false,
  stale: true,
  updatedAt: new Date("2024-04-26T01:01:47.509Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `online`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `stale`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | The bot has not reported for over an hour.                                                    |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the bot last reported or was scraped. Null when never.                                   |