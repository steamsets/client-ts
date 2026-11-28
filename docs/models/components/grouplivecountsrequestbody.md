# GroupLiveCountsRequestBody

## Example Usage

```typescript
import { GroupLiveCountsRequestBody } from "@steamsets/client-ts/models/components";

let value: GroupLiveCountsRequestBody = {
  groupIds: [
    321996,
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `groupIds`                                                           | *number*[]                                                           | :heavy_check_mark:                                                   | Steam group ids: the low 32 bits of the group's gid.                 |
| `refresh`                                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | Queue a recount of each group whose counts are missing or a day old. |