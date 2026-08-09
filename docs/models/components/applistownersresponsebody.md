# AppListOwnersResponseBody

## Example Usage

```typescript
import { AppListOwnersResponseBody } from "@steamsets/client-ts/models/components";

let value: AppListOwnersResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AppListOwnersResponseBody.json",
  maxPageSize: 824214,
  owners: [],
  page: 174953,
  pageSize: 750414,
  totalPages: 314414,
  trackedOwners: 296167,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `dollarSchema`                                                                      | *string*                                                                            | :heavy_minus_sign:                                                                  | A URL to the JSON Schema for this object.                                           | https://api.steamsets.com/schemas/AppListOwnersResponseBody.json                    |
| `maxPageSize`                                                                       | *number*                                                                            | :heavy_check_mark:                                                                  | Largest page size your donator tier allows                                          |                                                                                     |
| `nextCursor`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | Pass as cursor to fetch the next page. Absent when there are no more owners.        |                                                                                     |
| `owners`                                                                            | [components.AppListOwnersEntry](../../models/components/applistownersentry.md)[]    | :heavy_check_mark:                                                                  | N/A                                                                                 |                                                                                     |
| `page`                                                                              | *number*                                                                            | :heavy_check_mark:                                                                  | 1-based page this response holds                                                    |                                                                                     |
| `pageSize`                                                                          | *number*                                                                            | :heavy_check_mark:                                                                  | Owners per page used for this response                                              |                                                                                     |
| `totalPages`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | Pages available at this page size, capped at the deepest page a page jump can reach |                                                                                     |
| `trackedOwners`                                                                     | *number*                                                                            | :heavy_check_mark:                                                                  | Owners steamsets tracks for this app                                                |                                                                                     |