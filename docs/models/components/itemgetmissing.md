# ItemGetMissing

## Example Usage

```typescript
import { ItemGetMissing } from "@steamsets/client-ts/models/components";

let value: ItemGetMissing = {
  appIds: [
    566696,
    76188,
    948657,
  ],
  classIds: [],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `appIds`                                    | *number*[]                                  | :heavy_check_mark:                          | The requested app ids that have no items.   |
| `classIds`                                  | *number*[]                                  | :heavy_check_mark:                          | The requested class ids that match no item. |