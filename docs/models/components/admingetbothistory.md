# AdminGetBotHistory

## Example Usage

```typescript
import { AdminGetBotHistory } from "@steamsets/client-ts/models/components";

let value: AdminGetBotHistory = {
  bucket: "hour",
  points: [],
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `bucket`                                                                                                                  | [components.AdminGetBotHistoryBucket](../../models/components/admingetbothistorybucket.md)                                | :heavy_check_mark:                                                                                                        | The width of one point.                                                                                                   |
| `points`                                                                                                                  | [components.AdminGetBotHistoryPoint](../../models/components/admingetbothistorypoint.md)[]                                | :heavy_check_mark:                                                                                                        | Oldest first. A bucket in which the bot did not report has no point. Empty when none is recorded or it could not be read. |