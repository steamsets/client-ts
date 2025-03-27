# V1AdminUpdateResourcesRequestBody

## Example Usage

```typescript
import { V1AdminUpdateResourcesRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminUpdateResourcesRequestBody = {
  resources: [
    {
      resource: "auto_refresh",
      value: "1",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | [components.IDStruct](../../models/components/idstruct.md)         | :heavy_minus_sign:                                                 | N/A                                                                |
| `resources`                                                        | [components.Resource](../../models/components/resource.md)[]       | :heavy_check_mark:                                                 | The resources to add for this account                              |
| `vanity`                                                           | [components.VanityStruct](../../models/components/vanitystruct.md) | :heavy_minus_sign:                                                 | N/A                                                                |