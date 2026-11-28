# BotGetPayment

## Example Usage

```typescript
import { BotGetPayment } from "@steamsets/client-ts/models/components";

let value: BotGetPayment = {
  cs2: [
    "<value 1>",
    "<value 2>",
  ],
  gems: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  hydra: [],
  tf2: [
    "Mann Co. Supply Crate Key",
  ],
  tod: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `cs2`                           | *string*[]                      | :heavy_check_mark:              | N/A                             |                                 |
| `gems`                          | *string*[]                      | :heavy_check_mark:              | N/A                             |                                 |
| `hydra`                         | *string*[]                      | :heavy_check_mark:              | N/A                             |                                 |
| `tf2`                           | *string*[]                      | :heavy_check_mark:              | N/A                             | [<br/>"Mann Co. Supply Crate Key"<br/>] |
| `tod`                           | *string*[]                      | :heavy_check_mark:              | N/A                             |                                 |