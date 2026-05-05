# EventMaintenanceChanged

## Example Usage

```typescript
import { EventMaintenanceChanged } from "@steamsets/client-ts/models/operations";

let value: EventMaintenanceChanged = {
  data: {
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
        title: "<value>",
        uid: "<id>",
        updatedAt: new Date("2026-02-08T17:26:20.959Z"),
      },
    ],
  },
  event: "maintenance-changed",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [components.MaintenanceChanged](../../models/components/maintenancechanged.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `event`                                                                        | *"maintenance-changed"*                                                        | :heavy_check_mark:                                                             | The event name.                                                                |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | The event ID.                                                                  |
| `retry`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | The retry time in milliseconds.                                                |