# AdminListBotPushIssuesResponseBody

## Example Usage

```typescript
import { AdminListBotPushIssuesResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminListBotPushIssuesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminListBotPushIssuesResponseBody.json",
  clients: [],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A URL to the JSON Schema for this object.                                                            | https://api.steamsets.com/schemas/AdminListBotPushIssuesResponseBody.json                            |
| `clients`                                                                                            | [components.AdminListBotPushIssuesClient](../../models/components/adminlistbotpushissuesclient.md)[] | :heavy_check_mark:                                                                                   | By client name and version, the one seen most recently first.                                        |                                                                                                      |