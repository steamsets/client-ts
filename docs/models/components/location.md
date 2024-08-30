# Location

## Example Usage

```typescript
import { Location } from "@steamsets/client-ts/models/components";

let value: Location = {
    code: "DE",
    id: 1,
    name: "Germany",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `code`                   | *string*                 | :heavy_minus_sign:       | The code of the location | DE                       |
| `id`                     | *number*                 | :heavy_check_mark:       | The id of the location   | 1                        |
| `name`                   | *string*                 | :heavy_check_mark:       | The name of the location | Germany                  |