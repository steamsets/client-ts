# AdminBadgeTagsAI

## Example Usage

```typescript
import { AdminBadgeTagsAI } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsAI = {
  accuracy: [],
  allTime: {
    badges: 202790,
    colors: 972958,
    designs: 872959,
  },
  days: [],
  lastTagged: new Date("2026-02-04T09:29:58.112Z"),
  skips: [],
  window: {
    badges: 802371,
    colors: 245628,
    designs: 971402,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accuracy`                                                                                    | [components.AdminBadgeTagsAIAccuracy](../../models/components/adminbadgetagsaiaccuracy.md)[]  | :heavy_check_mark:                                                                            | Per model and prompt, the tags applied in the window and how many were removed later.         |
| `allTime`                                                                                     | [components.AdminBadgeTagsAITags](../../models/components/adminbadgetagsaitags.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `days`                                                                                        | [components.AdminBadgeTagsPretagDay](../../models/components/adminbadgetagspretagday.md)[]    | :heavy_check_mark:                                                                            | Pre-tagger throughput per day, oldest first.                                                  |
| `lastTagged`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the AI last applied a tag in the window. Null when it applied none.                      |
| `skips`                                                                                       | [components.AdminBadgeTagsSkipReason](../../models/components/adminbadgetagsskipreason.md)[]  | :heavy_check_mark:                                                                            | Badges the pre-tagger could not predict, by reason, all time, most common first.              |
| `window`                                                                                      | [components.AdminBadgeTagsAITags](../../models/components/adminbadgetagsaitags.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |