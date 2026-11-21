# AdminMaintenanceListAuditResponseBody

## Example Usage

```typescript
import { AdminMaintenanceListAuditResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminMaintenanceListAuditResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminMaintenanceListAuditResponseBody.json",
  entries: [
    {
      action: "create",
      actor: "<value>",
      at: new Date("2026-08-10T07:52:11.215Z"),
      detail: "<value>",
      reason: "<value>",
      uid: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | A URL to the JSON Schema for this object.                                                        | https://api.steamsets.com/schemas/AdminMaintenanceListAuditResponseBody.json                     |
| `entries`                                                                                        | [components.AdminMaintenanceAuditEntry](../../models/components/adminmaintenanceauditentry.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `nextCursor`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | Pass as cursor for the next page; empty on the last page                                         |                                                                                                  |