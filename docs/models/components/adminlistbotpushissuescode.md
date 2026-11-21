# AdminListBotPushIssuesCode

## Example Usage

```typescript
import { AdminListBotPushIssuesCode } from "@steamsets/client-ts/models/components";

let value: AdminListBotPushIssuesCode = {
  bots: 351217,
  code: "<value>",
  firstAt: new Date("2025-05-30T07:56:14.573Z"),
  lastAt: new Date("2024-06-01T15:20:48.960Z"),
  pushes: 143864,
  sample: {
    message: "<value>",
    path: "/boot",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `bots`                                                                                             | *number*                                                                                           | :heavy_check_mark:                                                                                 | Bots with this issue from this version.                                                            |
| `code`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `firstAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `lastAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pushes`                                                                                           | *number*                                                                                           | :heavy_check_mark:                                                                                 | Pushes with this issue from this version, across those bots.                                       |
| `sample`                                                                                           | [components.AdminListBotPushIssuesSample](../../models/components/adminlistbotpushissuessample.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |