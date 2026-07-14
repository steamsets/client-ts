# V1ActivityLocation

## Example Usage

```typescript
import { V1ActivityLocation } from "@steamsets/client-ts/models/components";

let value: V1ActivityLocation = {
  countryCode: "DE",
  countryName: "Germany",
  region: "Europe",
  type: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `countryCode`             | *string*                  | :heavy_minus_sign:        | N/A                       | DE                        |
| `countryName`             | *string*                  | :heavy_minus_sign:        | N/A                       | Germany                   |
| `region`                  | *string*                  | :heavy_minus_sign:        | N/A                       | Europe                    |
| `type`                    | *string*                  | :heavy_check_mark:        | global \| country \| region |                           |