# V1AccountReconnectRequestBody

## Example Usage

```typescript
import { V1AccountReconnectRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountReconnectRequestBody = {
  code: "123456",
  connectionId: "123456",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `code`                                         | *string*                                       | :heavy_check_mark:                             | The code from the oauth2 provider to re-verify | 123456                                         |
| `connectionId`                                 | *string*                                       | :heavy_check_mark:                             | The connection id to reconnect                 | 123456                                         |