# UpdateError

## Example Usage

```typescript
import { UpdateError } from "@steamsets/client-ts/models/components";

let value: UpdateError = {
  category: "rate_limited",
  retryable: false,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `category`                                   | *string*                                     | :heavy_check_mark:                           | The reason the update failed.                | rate_limited                                 |
| `retryable`                                  | *boolean*                                    | :heavy_check_mark:                           | True if retrying the update now may succeed. |                                              |