# EventAccountUpdated

## Example Usage

```typescript
import { EventAccountUpdated } from "@steamsets/client-ts/models/operations";

let value: EventAccountUpdated = {
  data: {
    accountId: 275956,
    status: "<value>",
  },
  event: "account-updated",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [components.EventAccountUpdatedData](../../models/components/eventaccountupdateddata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `event`                                                                                  | *"account-updated"*                                                                      | :heavy_check_mark:                                                                       | The event name.                                                                          |
| `id`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | The event ID.                                                                            |
| `retry`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | The retry time in milliseconds.                                                          |