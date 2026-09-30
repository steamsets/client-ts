# UpdateProgress

## Example Usage

```typescript
import { UpdateProgress } from "@steamsets/client-ts/models/components";

let value: UpdateProgress = {
  accountId: 595024,
  currentStep: "<value>",
  error: {
    category: "rate_limited",
    retryable: false,
  },
  percent: 24227,
  runId: "<id>",
  status: "in_progress",
  steps: [],
  updatedAt: new Date("2025-04-27T00:42:53.453Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountId`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | The account this progress snapshot belongs to.                                                |                                                                                               |
| `currentStep`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The step the update is on now.                                                                |                                                                                               |
| `error`                                                                                       | [components.UpdateError](../../models/components/updateerror.md)                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `finishedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the update finished, in UTC. Set on success or failure.                              |                                                                                               |
| `percent`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | How far the update has progressed, from 0 to 100.                                             |                                                                                               |
| `queuePosition`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | Reserved for a future queue that can report a position. Always absent today.                  |                                                                                               |
| `queuedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the update was queued, in UTC.                                                       |                                                                                               |
| `runId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | An ID for the update run. Compare it to tell a new run from a later event of the same run.    |                                                                                               |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the update started running, in UTC.                                                  |                                                                                               |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The overall status: undefined, pending, in_progress, completed, or failed.                    | in_progress                                                                                   |
| `steps`                                                                                       | [components.UpdateStep](../../models/components/updatestep.md)[]                              | :heavy_check_mark:                                                                            | Every step in the pipeline, in run order, with its own status.                                |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time this snapshot was last written, in UTC.                                              |                                                                                               |