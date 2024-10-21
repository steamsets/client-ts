# V1ConnectResponseBody

## Example Usage

```typescript
import { V1ConnectResponseBody } from "@steamsets/client-ts/models/components";

let value: V1ConnectResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1ConnectResponseBody.json",
  code: "ABC123",
  publicId: "ABC123",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dollarSchema`                                               | *string*                                                     | :heavy_minus_sign:                                           | A URL to the JSON Schema for this object.                    | https://api.steamsets.com/schemas/V1ConnectResponseBody.json |
| `code`                                                       | *string*                                                     | :heavy_check_mark:                                           | Code that has to be used to verify domain connections        | ABC123                                                       |
| `publicId`                                                   | *string*                                                     | :heavy_minus_sign:                                           | Public ID of the connection only for domain connections      | ABC123                                                       |