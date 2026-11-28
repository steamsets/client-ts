# AdminListBotPushIssuesClient

## Example Usage

```typescript
import { AdminListBotPushIssuesClient } from "@steamsets/client-ts/models/components";

let value: AdminListBotPushIssuesClient = {
  bots: 797889,
  client: {
    name: "<value>",
    version: "<value>",
  },
  codes: [],
  firstAt: new Date("2025-12-02T21:14:16.715Z"),
  lastAt: new Date("2024-02-19T21:00:22.110Z"),
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `bots`                                                                                                     | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Bots whose pushes from this version had any issue.                                                         |
| `client`                                                                                                   | [components.AdminListBotPushIssuesClientName](../../models/components/adminlistbotpushissuesclientname.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `codes`                                                                                                    | [components.AdminListBotPushIssuesCode](../../models/components/adminlistbotpushissuescode.md)[]           | :heavy_check_mark:                                                                                         | Most pushes first.                                                                                         |
| `firstAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `lastAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |