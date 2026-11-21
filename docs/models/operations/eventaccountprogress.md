# EventAccountProgress

## Example Usage

```typescript
import { EventAccountProgress } from "@steamsets/client-ts/models/operations";

let value: EventAccountProgress = {
  data: {
    key: "<key>",
    value: {
      accountId: 45286,
      currentStep: "<value>",
      percent: 581349,
      runId: "<id>",
      status: "<value>",
      steps: null,
      updatedAt: new Date("2026-03-30T13:09:50.514Z"),
    },
  },
  event: "account.progress",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `data`                                                                                             | [components.LiveSubscribeAccountProgress](../../models/components/livesubscribeaccountprogress.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `event`                                                                                            | *"account.progress"*                                                                               | :heavy_check_mark:                                                                                 | The event name.                                                                                    |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The event ID.                                                                                      |
| `retry`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The retry time in milliseconds.                                                                    |