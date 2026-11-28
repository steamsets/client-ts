# AdminBadgeTagsTaggersBody

## Example Usage

```typescript
import { AdminBadgeTagsTaggersBody } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsTaggersBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminBadgeTagsTaggersBody.json",
  ai: {
    badges: 355950,
    colors: 334317,
    designs: 880764,
    lastActive: new Date("2024-08-29T09:17:13.186Z"),
    removed: 14486,
  },
  nextCursor: "<value>",
  taggers: [],
  total: 669186,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | A URL to the JSON Schema for this object.                                              | https://api.steamsets.com/schemas/AdminBadgeTagsTaggersBody.json                       |
| `ai`                                                                                   | [components.AdminBadgeTagsTaggerAI](../../models/components/adminbadgetagstaggerai.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `nextCursor`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | Null on the last page.                                                                 |                                                                                        |
| `taggers`                                                                              | [components.AdminBadgeTagsTagger](../../models/components/adminbadgetagstagger.md)[]   | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `total`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |