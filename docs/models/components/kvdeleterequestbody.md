# KvDeleteRequestBody

## Example Usage

```typescript
import { KvDeleteRequestBody } from "@steamsets/client-ts/models/components";

let value: KvDeleteRequestBody = {
  key: "<key>",
  namespace: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `key`                         | *string*                      | :heavy_check_mark:            | Key to delete                 |
| `namespace`                   | *string*                      | :heavy_check_mark:            | Namespace the key lives under |