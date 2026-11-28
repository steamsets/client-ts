# V1AccountDeleteOtherSessionsResponseBody

## Example Usage

```typescript
import { V1AccountDeleteOtherSessionsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountDeleteOtherSessionsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountDeleteOtherSessionsResponseBody.json",
  deleted: 3,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `dollarSchema`                                                                  | *string*                                                                        | :heavy_minus_sign:                                                              | A URL to the JSON Schema for this object.                                       | https://api.steamsets.com/schemas/V1AccountDeleteOtherSessionsResponseBody.json |
| `deleted`                                                                       | *number*                                                                        | :heavy_check_mark:                                                              | How many sessions were signed out                                               | 3                                                                               |