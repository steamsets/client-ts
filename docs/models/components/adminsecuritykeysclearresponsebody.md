# AdminSecurityKeysClearResponseBody

## Example Usage

```typescript
import { AdminSecurityKeysClearResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysClearResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminSecurityKeysClearResponseBody.json",
  removed: 148748,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `dollarSchema`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | A URL to the JSON Schema for this object.                                 | https://api.steamsets.com/schemas/AdminSecurityKeysClearResponseBody.json |
| `removed`                                                                 | *number*                                                                  | :heavy_check_mark:                                                        | How many keys were removed                                                |                                                                           |