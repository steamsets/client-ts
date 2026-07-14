# AppListOwnersResponseBody

## Example Usage

```typescript
import { AppListOwnersResponseBody } from "@steamsets/client-ts/models/components";

let value: AppListOwnersResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AppListOwnersResponseBody.json",
  maxPageSize: 824214,
  owners: [],
  trackedOwners: 174953,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `dollarSchema`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | A URL to the JSON Schema for this object.                                        | https://api.steamsets.com/schemas/AppListOwnersResponseBody.json                 |
| `maxPageSize`                                                                    | *number*                                                                         | :heavy_check_mark:                                                               | Largest page size your donator tier allows                                       |                                                                                  |
| `nextCursor`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | Pass as cursor to fetch the next page. Absent when there are no more owners.     |                                                                                  |
| `owners`                                                                         | [components.AppListOwnersEntry](../../models/components/applistownersentry.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `trackedOwners`                                                                  | *number*                                                                         | :heavy_check_mark:                                                               | Owners steamsets tracks for this app                                             |                                                                                  |