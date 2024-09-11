# AccountV1QueueRequest

## Example Usage

```typescript
import { AccountV1QueueRequest } from "@steamsets/client-ts/models/operations";

let value: AccountV1QueueRequest = {
  appSearch: {
    id: 730,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `xForwardedFor`                                              | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `userAgent`                                                  | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `appSearch`                                                  | [components.AppSearch](../../models/components/appsearch.md) | :heavy_check_mark:                                           | N/A                                                          |