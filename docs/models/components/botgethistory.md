# BotGetHistory

## Example Usage

```typescript
import { BotGetHistory } from "@steamsets/client-ts/models/components";

let value: BotGetHistory = {
  bucket: "hour",
  points: [],
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `bucket`                                                                                                                        | [components.Bucket](../../models/components/bucket.md)                                                                          | :heavy_check_mark:                                                                                                              | The width of one point.                                                                                                         |
| `points`                                                                                                                        | [components.BotGetHistoryPoint](../../models/components/botgethistorypoint.md)[]                                                | :heavy_check_mark:                                                                                                              | Oldest first. A bucket in which the bot did not report has no point. Empty when no history is recorded or it could not be read. |