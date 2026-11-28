# AdminGetBotIssue

## Example Usage

```typescript
import { AdminGetBotIssue } from "@steamsets/client-ts/models/components";

let value: AdminGetBotIssue = {
  client: {
    name: "<value>",
    version: "<value>",
  },
  code: "<value>",
  firstAt: new Date("2026-03-25T08:23:26.716Z"),
  lastAt: new Date("2026-10-31T18:00:25.350Z"),
  message: "<value>",
  path: "/var/mail",
  pushes: 866160,
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
| `pushes`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Pushes with this issue from this version.                                                     |