# LocationGetLocationsResponse

## Example Usage

```typescript
import { LocationGetLocationsResponse } from "@steamsets/client-ts/models/operations";

let value: LocationGetLocationsResponse = {
  headers: {},
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `regions`                                                          | [components.Region](../../models/components/region.md)[]           | :heavy_minus_sign:                                                 | OK                                                                 |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |