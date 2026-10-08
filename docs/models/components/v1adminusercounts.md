# V1AdminUserCounts

## Example Usage

```typescript
import { V1AdminUserCounts } from "@steamsets/client-ts/models/components";

let value: V1AdminUserCounts = {
  day: 40,
  month: 1100,
  week: 260,
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `day`                | *number*             | :heavy_check_mark:   | In the last 24 hours | 40                   |
| `month`              | *number*             | :heavy_check_mark:   | In the last 30 days  | 1100                 |
| `week`               | *number*             | :heavy_check_mark:   | In the last 7 days   | 260                  |