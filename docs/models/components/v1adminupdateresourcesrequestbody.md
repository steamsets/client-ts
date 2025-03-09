# V1AdminUpdateResourcesRequestBody

## Example Usage

```typescript
import { V1AdminUpdateResourcesRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminUpdateResourcesRequestBody = {
  newResources: [
    {
      resource: "background",
      value: "1",
    },
  ],
  resource: [
    "auto_refresh",
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | [components.IDStruct](../../models/components/idstruct.md)                                                                     | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `newResources`                                                                                                                 | [components.Resource](../../models/components/resource.md)[]                                                                   | :heavy_check_mark:                                                                                                             | The resources to add for this account                                                                                          |
| `resource`                                                                                                                     | [components.V1AdminUpdateResourcesRequestBodyResource](../../models/components/v1adminupdateresourcesrequestbodyresource.md)[] | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `vanity`                                                                                                                       | [components.VanityStruct](../../models/components/vanitystruct.md)                                                             | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |