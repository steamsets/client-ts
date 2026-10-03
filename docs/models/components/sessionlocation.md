# SessionLocation

## Example Usage

```typescript
import { SessionLocation } from "@steamsets/client-ts/models/components";

let value: SessionLocation = {
  city: "Berlin",
  countryCode: "DE",
  countryName: "Germany",
  region: "Berlin",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `city`                              | *string*                            | :heavy_minus_sign:                  | The city the IP resolves to         | Berlin                              |
| `countryCode`                       | *string*                            | :heavy_minus_sign:                  | The ISO 3166-1 alpha-2 country code | DE                                  |
| `countryName`                       | *string*                            | :heavy_minus_sign:                  | The English country name            | Germany                             |
| `region`                            | *string*                            | :heavy_minus_sign:                  | The region the IP resolves to       | Berlin                              |