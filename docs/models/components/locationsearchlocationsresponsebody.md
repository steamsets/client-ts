# LocationSearchLocationsResponseBody

## Example Usage

```typescript
import { LocationSearchLocationsResponseBody } from "@steamsets/client-ts/models/components";

let value: LocationSearchLocationsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/LocationSearchLocationsResponseBody.json",
  locations: [
    {
      score: 773202,
      id: "<id>",
      name: "<value>",
      type: "<value>",
    },
  ],
  results: 895204,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | https://api.steamsets.com/schemas/LocationSearchLocationsResponseBody.json |
| `locations`                                                                | [components.Hit](../../models/components/hit.md)[]                         | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `results`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |