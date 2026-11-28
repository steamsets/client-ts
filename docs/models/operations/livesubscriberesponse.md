# LiveSubscribeResponse

## Example Usage

```typescript
import { LiveSubscribeResponse } from "@steamsets/client-ts/models/operations";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `serverSentEvents`                                                 | *EventStream<operations.LiveSubscribeServerSentEvents>*            | :heavy_minus_sign:                                                 | OK                                                                 |