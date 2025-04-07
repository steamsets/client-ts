# V1AccountUpdateConnectionRequestBody

## Example Usage

```typescript
import { V1AccountUpdateConnectionRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountUpdateConnectionRequestBody = {
  connectionId: "123456",
  hidden: true,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `connectionId`                                 | *string*                                       | :heavy_check_mark:                             | The connection id to update                    | 123456                                         |
| `hidden`                                       | *boolean*                                      | :heavy_check_mark:                             | Whether the connection should be hidden or not | true                                           |