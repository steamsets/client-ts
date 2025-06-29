# V1AppFilters

## Example Usage

```typescript
import { V1AppFilters } from "@steamsets/client-ts/models/components";

let value: V1AppFilters = {};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `appType`                                | *string*                                 | :heavy_minus_sign:                       | Filter by app type (e.g., 'game', 'dlc') |
| `excludeEvents`                          | *boolean*                                | :heavy_minus_sign:                       | Exclude event apps                       |
| `excludeSales`                           | *boolean*                                | :heavy_minus_sign:                       | Exclude sale/promotional apps            |
| `maxPlaytime`                            | *number*                                 | :heavy_minus_sign:                       | Maximum playtime in minutes              |
| `minPlaytime`                            | *number*                                 | :heavy_minus_sign:                       | Minimum playtime in minutes              |