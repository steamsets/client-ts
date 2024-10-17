# LeaderboardCountry

## Example Usage

```typescript
import { LeaderboardCountry } from "@steamsets/client-ts/models/components";

let value: LeaderboardCountry = {
  code: "DE",
  id: 1,
  name: "Germany",
};
```

## Fields

| Field                   | Type                    | Required                | Description             | Example                 |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `code`                  | *string*                | :heavy_minus_sign:      | The code of the country | DE                      |
| `id`                    | *number*                | :heavy_check_mark:      | The id of the country   | 1                       |
| `name`                  | *string*                | :heavy_check_mark:      | The name of the country | Germany                 |