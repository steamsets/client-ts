# V1AdminGetAccountLocation

## Example Usage

```typescript
import { V1AdminGetAccountLocation } from "@steamsets/client-ts/models/components";

let value: V1AdminGetAccountLocation = {
  city: "Bad Krozingen",
  country: "DE",
  region: "Europe",
  state: "Baden-Wurttemberg",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `city`                          | *string*                        | :heavy_check_mark:              | The city of the account         | Bad Krozingen                   |
| `country`                       | *string*                        | :heavy_check_mark:              | The country code of the account | DE                              |
| `region`                        | *string*                        | :heavy_check_mark:              | The region of the account       | Europe                          |
| `state`                         | *string*                        | :heavy_check_mark:              | The state of the account        | Baden-Wurttemberg               |