# Region

## Example Usage

```typescript
import { Region } from "@steamsets/client-ts/models/components";

let value: Region = {
  countries: {
    "key": {
      code: "<value>",
      name: "<value>",
      states: {
        "key": {
          cities: {
            "key": {
              name: "<value>",
            },
          },
          code: "<value>",
          name: "<value>",
        },
      },
    },
  },
  name: "Europe",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `countries`                                                              | Record<string, [components.Country](../../models/components/country.md)> | :heavy_check_mark:                                                       | The countries of the region                                              |                                                                          |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The name of the region                                                   | Europe                                                                   |