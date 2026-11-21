# FlagsGetDefaultsBody

## Example Usage

```typescript
import { FlagsGetDefaultsBody } from "@steamsets/client-ts/models/components";

let value: FlagsGetDefaultsBody = {
  dollarSchema: "https://api.steamsets.com/schemas/FlagsGetDefaultsBody.json",
  flags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `dollarSchema`                                              | *string*                                                    | :heavy_minus_sign:                                          | A URL to the JSON Schema for this object.                   | https://api.steamsets.com/schemas/FlagsGetDefaultsBody.json |
| `flags`                                                     | *string*[]                                                  | :heavy_check_mark:                                          | The flags that are on for a caller with no account          |                                                             |