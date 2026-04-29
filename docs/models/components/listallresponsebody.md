# ListAllResponseBody

## Example Usage

```typescript
import { ListAllResponseBody } from "@steamsets/client-ts/models/components";

let value: ListAllResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/ListAllResponseBody.json",
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `dollarSchema`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | A URL to the JSON Schema for this object.                                    | https://api.steamsets.com/schemas/ListAllResponseBody.json                   |
| `items`                                                                      | [components.MaintenanceEvent](../../models/components/maintenanceevent.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |