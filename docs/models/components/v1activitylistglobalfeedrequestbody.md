# V1ActivityListGlobalFeedRequestBody

## Example Usage

```typescript
import { V1ActivityListGlobalFeedRequestBody } from "@steamsets/client-ts/models/components";

let value: V1ActivityListGlobalFeedRequestBody = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Opaque pagination cursor from the previous page's nextCursor. Omit for the most recent page.                         |
| `eventTypes`                                                                                                         | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | Filter to these event_type values (badge_crafted, level_milestone, rank_milestone, scarcity_milestone). Empty = all. |
| `limit`                                                                                                              | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | Max events returned.                                                                                                 |