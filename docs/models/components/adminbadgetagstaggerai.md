# AdminBadgeTagsTaggerAI

## Example Usage

```typescript
import { AdminBadgeTagsTaggerAI } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsTaggerAI = {
  badges: 424519,
  colors: 802750,
  designs: 836584,
  lastActive: new Date("2024-12-05T08:12:02.494Z"),
  removed: 244902,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `badges`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Badges it tagged without review.                                                              |
| `colors`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `designs`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastActive`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Null when it applied no tag in the window.                                                    |
| `removed`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Of its tags, the ones someone removed later.                                                  |