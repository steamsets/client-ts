# ReorderItemReq

## Example Usage

```typescript
import { ReorderItemReq } from "@steamsets/client-ts/models/components";

let value: ReorderItemReq = {
  documentUid: "<id>",
  sortOrder: 404653,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `documentUid`      | *string*           | :heavy_check_mark: | N/A                |
| `parentUid`        | *string*           | :heavy_minus_sign: | N/A                |
| `sortOrder`        | *number*           | :heavy_check_mark: | N/A                |