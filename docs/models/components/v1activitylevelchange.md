# V1ActivityLevelChange

## Example Usage

```typescript
import { V1ActivityLevelChange } from "@steamsets/client-ts/models/components";

let value: V1ActivityLevelChange = {
  current: 582655,
  previous: 987349,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `current`                           | *number*                            | :heavy_check_mark:                  | Level after the milestone crossing  |
| `previous`                          | *number*                            | :heavy_check_mark:                  | Level before the milestone crossing |