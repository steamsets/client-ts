# V1AdminUpdateResourcesRequestBody

## Example Usage

```typescript
import { V1AdminUpdateResourcesRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminUpdateResourcesRequestBody = {
  resources: [
    {
      resource: "max_leaderboard_entries",
      value: "1",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | [components.IDSearch](../../models/components/idsearch.md)                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `reset`                                                                                                  | [components.Reset](../../models/components/reset.md)[]                                                   | :heavy_minus_sign:                                                                                       | Resources whose override to remove, so they fall back to the account's roles                             |
| `resources`                                                                                              | [components.Resource](../../models/components/resource.md)[]                                             | :heavy_minus_sign:                                                                                       | Resources to set as overrides for this account. A value equal to the one that already applies is a no-op |
| `vanity`                                                                                                 | [components.VanitySearch](../../models/components/vanitysearch.md)                                       | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |