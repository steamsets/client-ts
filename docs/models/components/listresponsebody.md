# ListResponseBody

## Example Usage

```typescript
import { ListResponseBody } from "@steamsets/client-ts/models/components";

let value: ListResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/ListResponseBody.json",
  announcements: [],
  items: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `dollarSchema`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | A URL to the JSON Schema for this object.                                    | https://api.steamsets.com/schemas/ListResponseBody.json                      |
| `announcements`                                                              | [components.Announcement](../../models/components/announcement.md)[]         | :heavy_check_mark:                                                           | The active banners, warnings first, then newest first                        |                                                                              |
| `items`                                                                      | [components.MaintenanceEvent](../../models/components/maintenanceevent.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |