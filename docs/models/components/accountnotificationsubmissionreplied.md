# AccountNotificationSubmissionReplied

## Example Usage

```typescript
import { AccountNotificationSubmissionReplied } from "@steamsets/client-ts/models/components";

let value: AccountNotificationSubmissionReplied = {
  excerpt: "<value>",
  reply: "<value>",
  reportKind: "broken_profile",
  submissionId: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `excerpt`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | The start of the report, so the reader knows which one                                  |
| `reply`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | The staff answer when the notification was made. The reports page shows the current one |
| `reportKind`                                                                            | [components.ReportKind](../../models/components/reportkind.md)                          | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `submissionId`                                                                          | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |