# V1AppQueueUpdateRequestBody

## Example Usage

```typescript
import { V1AppQueueUpdateRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AppQueueUpdateRequestBody = {
  appIds: [
    148441,
    833885,
    738852,
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `appIds`           | *number*[]         | :heavy_check_mark: | App ids to requeue |