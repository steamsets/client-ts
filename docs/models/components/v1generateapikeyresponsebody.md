# V1GenerateApiKeyResponseBody

## Example Usage

```typescript
import { V1GenerateApiKeyResponseBody } from "@steamsets/client-ts/models/components";

let value: V1GenerateApiKeyResponseBody = {
    dollarSchema: "http://localhost:8080/schemas/V1GenerateApiKeyResponseBody.json",
    key: "api_123",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `dollarSchema`                                                  | *string*                                                        | :heavy_minus_sign:                                              | A URL to the JSON Schema for this object.                       | http://localhost:8080/schemas/V1GenerateApiKeyResponseBody.json |
| `key`                                                           | *string*                                                        | :heavy_check_mark:                                              | The generated API Key                                           | api_123                                                         |