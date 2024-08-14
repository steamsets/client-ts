# V1UpdateConnectionRequestBody

## Example Usage

```typescript
import { V1UpdateConnectionRequestBody } from "@steamsets/client-ts/models/components";

let value: V1UpdateConnectionRequestBody = {
    connectionId: "123456",
    hiddem: true,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `connectionId`                                 | *string*                                       | :heavy_check_mark:                             | The connection id to update                    | 123456                                         |
| `hiddem`                                       | *boolean*                                      | :heavy_check_mark:                             | Whether the connection should be hidden or not | true                                           |