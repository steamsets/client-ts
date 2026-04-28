# StreamGlobalFeedResponse

## Example Usage

```typescript
import { StreamGlobalFeedResponse } from "@steamsets/client-ts/models/operations";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `serverSentEvents`                                                 | *EventStream<operations.StreamGlobalFeedServerSentEvents>*         | :heavy_minus_sign:                                                 | OK                                                                 |
| `errorModel`                                                       | [components.ErrorModel](../../models/components/errormodel.md)     | :heavy_minus_sign:                                                 | Error                                                              |