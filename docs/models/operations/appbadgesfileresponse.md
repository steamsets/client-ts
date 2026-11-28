# AppBadgesFileResponse

## Example Usage

```typescript
import { AppBadgesFileResponse } from "@steamsets/client-ts/models/operations";

let value: AppBadgesFileResponse = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `httpMeta`                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `object`                                                                           | Record<string, [operations.ResponseBody](../../models/operations/responsebody.md)> | :heavy_minus_sign:                                                                 | Every app with trading cards, keyed by app id.                                     |