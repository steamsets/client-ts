# AppListResponseBody

## Example Usage

```typescript
import { AppListResponseBody } from "@steamsets/client-ts/models/components";

let value: AppListResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/AppListResponseBody.json",
  apps: [],
  nextCursor: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/AppListResponseBody.json       |
| `apps`                                                           | [components.AppListApp](../../models/components/applistapp.md)[] | :heavy_check_mark:                                               | Apps with trading cards, by app id.                              |                                                                  |
| `nextCursor`                                                     | *string*                                                         | :heavy_check_mark:                                               | Send it as cursor for the next page. Null on the last page.      |                                                                  |