# ListResponseBody

## Example Usage

```typescript
import { ListResponseBody } from "@steamsets/client-ts/models/components";

let value: ListResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/ListResponseBody.json",
  items: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `dollarSchema`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | A URL to the JSON Schema for this object.                                    | https://api.steamsets.com/schemas/ListResponseBody.json                      |
| `items`                                                                      | [components.MaintenanceEvent](../../models/components/maintenanceevent.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |