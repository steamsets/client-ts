# Submission

## Example Usage

```typescript
import { Submission } from "@steamsets/client-ts/models/components";

let value: Submission = {
  dollarSchema: "https://api.steamsets.com/schemas/Submission.json",
  createdAt: new Date("2026-01-13T21:57:33.335Z"),
  id: "sub_2bM9x0aQ",
  kind: "bug",
  message: "<value>",
  pageUrl: "https://steamsets.com/profiles/flo",
  reason: "wrong_level",
  repliedAt: new Date("2026-02-21T01:50:34.854Z"),
  staffReply: null,
  status: "new",
  subjectAccountId: 1216167888,
  updatedAt: new Date("2025-11-18T11:44:46.216Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/Submission.json                                             |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the report was sent                                                                      |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Submission id                                                                                 | sub_2bM9x0aQ                                                                                  |
| `kind`                                                                                        | [components.SubmissionKind](../../models/components/submissionkind.md)                        | :heavy_check_mark:                                                                            | What kind of submission this is                                                               | bug                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | What the reporter wrote                                                                       |                                                                                               |
| `pageUrl`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The page the report was sent from                                                             | https://steamsets.com/profiles/flo                                                            |
| `reason`                                                                                      | [components.SubmissionReason](../../models/components/submissionreason.md)                    | :heavy_check_mark:                                                                            | Preset reason of a broken_profile report. Null for other kinds                                |                                                                                               |
| `repliedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When staff replied. Null until staff reply                                                    |                                                                                               |
| `staffReply`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The answer staff gave. Null until staff reply                                                 |                                                                                               |
| `status`                                                                                      | [components.SubmissionStatus](../../models/components/submissionstatus.md)                    | :heavy_check_mark:                                                                            | Where staff are with it                                                                       | new                                                                                           |
| `subjectAccountId`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | The profile a broken_profile report is about. Null for other kinds                            | 1216167888                                                                                    |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the report last changed                                                                  |                                                                                               |