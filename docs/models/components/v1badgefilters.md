# V1BadgeFilters

## Example Usage

```typescript
import { V1BadgeFilters } from "@steamsets/client-ts/models/components";

let value: V1BadgeFilters = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `isEvent`              | *boolean*              | :heavy_minus_sign:     | Filter by event badges |
| `isFoil`               | *boolean*              | :heavy_minus_sign:     | Filter by foil badges  |
| `isSale`               | *boolean*              | :heavy_minus_sign:     | Filter by sale badges  |
| `maxLevel`             | *number*               | :heavy_minus_sign:     | Maximum badge level    |
| `maxScarcity`          | *number*               | :heavy_minus_sign:     | Maximum scarcity value |
| `minLevel`             | *number*               | :heavy_minus_sign:     | Minimum badge level    |
| `minScarcity`          | *number*               | :heavy_minus_sign:     | Minimum scarcity value |