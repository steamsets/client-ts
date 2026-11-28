# AdminSearchQueriesRequestBody

## Example Usage

```typescript
import { AdminSearchQueriesRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminSearchQueriesRequestBody = {
  surface: "badges",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `days`                               | *number*                             | :heavy_minus_sign:                   | How many days back to read           |                                      |
| `surface`                            | *string*                             | :heavy_minus_sign:                   | One search box; every box when empty | badges                               |