# KvSetRequestBody

## Example Usage

```typescript
import { KvSetRequestBody } from "@steamsets/client-ts/models/components";

let value: KvSetRequestBody = {
  key: "<key>",
  namespace: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `key`                                                   | *string*                                                | :heavy_check_mark:                                      | Key within the namespace                                |
| `namespace`                                             | *string*                                                | :heavy_check_mark:                                      | Namespace this key lives under, e.g. 'ui' or 'wishlist' |
| `value`                                                 | *string*                                                | :heavy_check_mark:                                      | Value to store (opaque string; JSON blobs are fine)     |