# TradeBotPushIssue

## Example Usage

```typescript
import { TradeBotPushIssue } from "@steamsets/client-ts/models/components";

let value: TradeBotPushIssue = {
  client: {
    name: "<value>",
    version: "<value>",
  },
  code: "<value>",
  firstAt: new Date("2025-05-11T02:25:50.718Z"),
  lastAt: new Date("2026-07-31T11:00:05.190Z"),
  message: "<value>",
  path: "/opt/lib",
  pushes: 919691,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `client`                                                                                      | [components.TradeBotPushIssueClient](../../models/components/tradebotpushissueclient.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | See bot.push for the codes.                                                                   |
| `firstAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The latest push's message.                                                                    |
| `path`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The field of the latest push with this issue.                                                 |
| `pushes`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Pushes with this issue since it was first seen.                                               |