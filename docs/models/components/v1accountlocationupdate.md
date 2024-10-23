# V1AccountLocationUpdate

## Example Usage

```typescript
import { V1AccountLocationUpdate } from "@steamsets/client-ts/models/components";

let value: V1AccountLocationUpdate = {
  city: "Bad Krozingen",
  countryCode: "DE",
  countryName: "Germany",
  region: "Europe",
  state: "Baden-Wurttemberg",
  updatedAt: new Date("2023-01-01T00:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `city`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The city name of the location                                                                 | Bad Krozingen                                                                                 |
| `countryCode`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The country code of the location                                                              | DE                                                                                            |
| `countryName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The country name of the location                                                              | Germany                                                                                       |
| `region`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The region name of the location                                                               | Europe                                                                                        |
| `state`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The state name of the location                                                                | Baden-Wurttemberg                                                                             |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the location was updated                                                             | 2023-01-01T00:00:00Z                                                                          |