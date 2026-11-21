# AdminGetBotClient

## Example Usage

```typescript
import { AdminGetBotClient } from "@steamsets/client-ts/models/components";

let value: AdminGetBotClient = {
  current: {
    firstSeenAt: new Date("2026-04-09T10:32:26.363Z"),
    lastSeenAt: new Date("2026-11-30T09:28:00.037Z"),
    name: "<value>",
    version: "<value>",
  },
  history: [
    {
      firstSeenAt: new Date("2025-09-21T02:45:18.011Z"),
      lastSeenAt: new Date("2025-11-07T04:49:00.585Z"),
      name: "<value>",
      version: "<value>",
    },
  ],
  minimumVersion: "<value>",
  outdated: false,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `current`                                                                                    | [components.AdminGetBotCurrentClient](../../models/components/admingetbotcurrentclient.md)   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `history`                                                                                    | [components.AdminGetBotClientVersion](../../models/components/admingetbotclientversion.md)[] | :heavy_check_mark:                                                                           | Every client version the bot pushed with, newest first.                                      |
| `minimumVersion`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | The lowest supported version of the current client. Empty when none is set.                  |
| `outdated`                                                                                   | *boolean*                                                                                    | :heavy_check_mark:                                                                           | The current client's version is below the lowest the directory supports.                     |