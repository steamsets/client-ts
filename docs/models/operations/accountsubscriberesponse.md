# AccountSubscribeResponse

## Example Usage

```typescript
import { AccountSubscribeResponse } from "@steamsets/client-ts/models/operations";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `serverSentEvents`                                                 | *EventStream<operations.AccountSubscribeServerSentEvents>*         | :heavy_minus_sign:                                                 | OK                                                                 |