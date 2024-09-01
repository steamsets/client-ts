# V1LivenessResponseBody

## Example Usage

```typescript
import { V1LivenessResponseBody } from "@steamsets/client-ts/models/components";

let value: V1LivenessResponseBody = {
    dollarSchema: "https://api.steamsets.com/schemas/V1LivenessResponseBody.json",
    message: "OK",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `dollarSchema`                                                | *string*                                                      | :heavy_minus_sign:                                            | A URL to the JSON Schema for this object.                     | https://api.steamsets.com/schemas/V1LivenessResponseBody.json |
| `message`                                                     | *string*                                                      | :heavy_check_mark:                                            | Whether we're alive or not                                    | OK                                                            |