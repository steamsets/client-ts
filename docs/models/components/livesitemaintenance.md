# LiveSiteMaintenance

## Example Usage

```typescript
import { LiveSiteMaintenance } from "@steamsets/client-ts/models/components";

let value: LiveSiteMaintenance = {
  announcements: [
    {
      dollarSchema: "https://api.steamsets.com/schemas/Announcement.json",
      createdAt: new Date("2024-04-14T17:14:07.964Z"),
      enabled: false,
      level: "info",
      product: "levels",
      text: "<value>",
      uid: "<id>",
      updatedAt: new Date("2025-04-11T22:06:10.045Z"),
    },
  ],
  items: [
    {
      dollarSchema: "https://api.steamsets.com/schemas/MaintenanceEvent.json",
      createdAt: new Date("2024-11-29T20:45:34.267Z"),
      enabled: true,
      message: "<value>",
      paths: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      product: "levels",
      title: "<value>",
      uid: "<id>",
      updatedAt: new Date("2024-05-04T10:50:24.058Z"),
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `announcements`                                                              | [components.Announcement](../../models/components/announcement.md)[]         | :heavy_check_mark:                                                           | N/A                                                                          |
| `items`                                                                      | [components.MaintenanceEvent](../../models/components/maintenanceevent.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |