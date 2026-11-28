# TradeBotPush

## Example Usage

```typescript
import { TradeBotPush } from "@steamsets/client-ts/models/components";

let value: TradeBotPush = {
  client: {
    firstSeenAt: new Date("2025-03-10T05:40:22.478Z"),
    lastSeenAt: new Date("2025-09-19T13:25:28.823Z"),
    name: "<value>",
    version: "<value>",
  },
  issues: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `client`                                                                                   | [components.TradeBotPushClient](../../models/components/tradebotpushclient.md)             | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `issues`                                                                                   | [components.TradeBotPushIssue](../../models/components/tradebotpushissue.md)[]             | :heavy_check_mark:                                                                         | What the bot's pushes of the last 7 days ignored or found wrong, newest first, at most 20. |