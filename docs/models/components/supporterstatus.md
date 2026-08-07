# SupporterStatus

## Example Usage

```typescript
import { SupporterStatus } from "@steamsets/client-ts/models/components";

let value: SupporterStatus = {
  active: true,
  months: 3,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `active`                     | *boolean*                    | :heavy_check_mark:           | Donated this month           | true                         |
| `months`                     | *number*                     | :heavy_check_mark:           | Total months with a donation | 3                            |