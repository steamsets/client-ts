# GetBucketLeadersResponse

## Example Usage

```typescript
import { GetBucketLeadersResponse } from "@steamsets/client-ts/models/operations";

let value: GetBucketLeadersResponse = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `httpMeta`                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `bucketLeaders`                                                      | [components.BucketLeader](../../models/components/bucketleader.md)[] | :heavy_minus_sign:                                                   | OK                                                                   |