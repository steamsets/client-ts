# SupporterStatus

## Example Usage

```typescript
import { SupporterStatus } from "@steamsets/client-ts/models/components";

let value: SupporterStatus = {
  active: true,
  months: 3,
  streak: 0,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                        | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | Donated this month                                                                                              | true                                                                                                            |
| `months`                                                                                                        | *number*                                                                                                        | :heavy_check_mark:                                                                                              | Months supported so far, up to and including the current month                                                  | 3                                                                                                               |
| `streak`                                                                                                        | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The support streak the account picked, 1 to 10, shown instead of the one its months earn. 0 when it picked none | 0                                                                                                               |