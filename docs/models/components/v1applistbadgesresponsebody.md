# V1AppListBadgesResponseBody

## Example Usage

```typescript
import { V1AppListBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AppListBadgesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AppListBadgesResponseBody.json",
  badges: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `dollarSchema`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | A URL to the JSON Schema for this object.                          | https://api.steamsets.com/schemas/V1AppListBadgesResponseBody.json |
| `badges`                                                           | [components.V1AppBadge](../../models/components/v1appbadge.md)[]   | :heavy_check_mark:                                                 | The available badges                                               |                                                                    |