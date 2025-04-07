# V1AccountCreateSessionBody

## Example Usage

```typescript
import { V1AccountCreateSessionBody } from "@steamsets/client-ts/models/components";

let value: V1AccountCreateSessionBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountCreateSessionBody.json",
  sessionToken: "ABC123",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `dollarSchema`                                                    | *string*                                                          | :heavy_minus_sign:                                                | A URL to the JSON Schema for this object.                         | https://api.steamsets.com/schemas/V1AccountCreateSessionBody.json |
| `sessionToken`                                                    | *string*                                                          | :heavy_check_mark:                                                | The session token                                                 | ABC123                                                            |