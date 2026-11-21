# AdminMaintenanceListAuditRequestBody

## Example Usage

```typescript
import { AdminMaintenanceListAuditRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminMaintenanceListAuditRequestBody = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                         | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The nextCursor of the previous page                                                                                              |
| `limit`                                                                                                                          | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Entries per page; 50 when unset                                                                                                  |
| `product`                                                                                                                        | [components.AdminMaintenanceListAuditRequestBodyProduct](../../models/components/adminmaintenancelistauditrequestbodyproduct.md) | :heavy_minus_sign:                                                                                                               | The product; steamsets when unset                                                                                                |
| `uid`                                                                                                                            | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Only this maintenance event or announcement                                                                                      |