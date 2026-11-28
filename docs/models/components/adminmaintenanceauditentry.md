# AdminMaintenanceAuditEntry

## Example Usage

```typescript
import { AdminMaintenanceAuditEntry } from "@steamsets/client-ts/models/components";

let value: AdminMaintenanceAuditEntry = {
  action: "create",
  actor: "<value>",
  at: new Date("2026-12-09T14:17:51.125Z"),
  detail: "<value>",
  reason: "<value>",
  uid: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `action`                                                                                      | [components.Action](../../models/components/action.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `actor`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | staff:<accountId>, or import                                                                  |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `detail`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The change as JSON: {"from":…,"to":…}                                                         |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `uid`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The maintenance event or announcement                                                         |