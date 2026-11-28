# WebsiteRotateKeyResponseBody

## Example Usage

```typescript
import { WebsiteRotateKeyResponseBody } from "@steamsets/client-ts/models/components";

let value: WebsiteRotateKeyResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/WebsiteRotateKeyResponseBody.json",
  apiKey: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `dollarSchema`                                                      | *string*                                                            | :heavy_minus_sign:                                                  | A URL to the JSON Schema for this object.                           | https://api.steamsets.com/schemas/WebsiteRotateKeyResponseBody.json |
| `apiKey`                                                            | *string*                                                            | :heavy_check_mark:                                                  | The website's new push key. Shown once; store it now.               |                                                                     |