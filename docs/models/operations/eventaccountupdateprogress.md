# EventAccountUpdateProgress

## Example Usage

```typescript
import { EventAccountUpdateProgress } from "@steamsets/client-ts/models/operations";

let value: EventAccountUpdateProgress = {
  data: {
    progress: {
      accountId: 150321,
      currentStep: "<value>",
      percent: 350558,
      runId: "<id>",
      status: "<value>",
      steps: null,
      updatedAt: new Date("2025-06-04T21:02:17.433Z"),
    },
  },
  event: "account-update-progress",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                 | [components.EventAccountUpdateProgressData](../../models/components/eventaccountupdateprogressdata.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `event`                                                                                                | *"account-update-progress"*                                                                            | :heavy_check_mark:                                                                                     | The event name.                                                                                        |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The event ID.                                                                                          |
| `retry`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | The retry time in milliseconds.                                                                        |