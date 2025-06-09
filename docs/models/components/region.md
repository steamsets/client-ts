# Region

## Example Usage

```typescript
import { Region } from "@steamsets/client-ts/models/components";

let value: Region = {
  countries: null,
  name: "Europe",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `countries`                                                | [components.Country](../../models/components/country.md)[] | :heavy_check_mark:                                         | The countries of the region                                |                                                            |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | The name of the region                                     | Europe                                                     |