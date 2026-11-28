# V1AccountGetAchievementsRequestBody

## Example Usage

```typescript
import { V1AccountGetAchievementsRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountGetAchievementsRequestBody = {
  appIds: [
    1250,
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `appIds`                                                           | *number*[]                                                         | :heavy_check_mark:                                                 | The games to read, at most 25. Empty reads only the stats          | [<br/>1250<br/>]                                                   |
| `id`                                                               | [components.IDSearch](../../models/components/idsearch.md)         | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `vanity`                                                           | [components.VanitySearch](../../models/components/vanitysearch.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |