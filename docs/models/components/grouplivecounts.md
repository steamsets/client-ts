# GroupLiveCounts

## Example Usage

```typescript
import { GroupLiveCounts } from "@steamsets/client-ts/models/components";

let value: GroupLiveCounts = {
  groupId: 791560,
  queued: false,
  stale: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `countedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When a GroupService run last counted the group.                                               |
| `groupId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `inChat`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `inGame`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `online`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `queued`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | This request queued a recount.                                                                |
| `stale`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | The counts are missing or a day old, and a recount would replace them.                        |