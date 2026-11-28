# AppBadgesSlimFileResponse

## Example Usage

```typescript
import { AppBadgesSlimFileResponse } from "@steamsets/client-ts/models/operations";

let value: AppBadgesSlimFileResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `object`                                                           | Record<string, *number*>                                           | :heavy_minus_sign:                                                 | Every app with trading cards, keyed by app id.                     |