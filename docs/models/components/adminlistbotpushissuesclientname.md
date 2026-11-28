# AdminListBotPushIssuesClientName

## Example Usage

```typescript
import { AdminListBotPushIssuesClientName } from "@steamsets/client-ts/models/components";

let value: AdminListBotPushIssuesClientName = {
  name: "<value>",
  version: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `name`                                                        | *string*                                                      | :heavy_check_mark:                                            | Empty for pushes that named no client and sent no User-Agent. |
| `version`                                                     | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |