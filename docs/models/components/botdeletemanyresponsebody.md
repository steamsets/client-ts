# BotDeleteManyResponseBody

## Example Usage

```typescript
import { BotDeleteManyResponseBody } from "@steamsets/client-ts/models/components";

let value: BotDeleteManyResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/BotDeleteManyResponseBody.json",
  deleted: [
    "<value 1>",
    "<value 2>",
  ],
  notFound: [],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/BotDeleteManyResponseBody.json |
| `deleted`                                                        | *string*[]                                                       | :heavy_check_mark:                                               | The ids that were deleted.                                       |                                                                  |
| `notFound`                                                       | *string*[]                                                       | :heavy_check_mark:                                               | The ids that match no bot of yours. Nothing happened to them.    |                                                                  |