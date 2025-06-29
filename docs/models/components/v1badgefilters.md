# V1BadgeFilters

## Example Usage

```typescript
import { V1BadgeFilters } from "@steamsets/client-ts/models/components";

let value: V1BadgeFilters = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `isEvent`                                            | *boolean*                                            | :heavy_minus_sign:                                   | Filter by event badges                               |
| `isFoil`                                             | *boolean*                                            | :heavy_minus_sign:                                   | Filter by foil badges                                |
| `isSale`                                             | *boolean*                                            | :heavy_minus_sign:                                   | Filter by sale badges                                |
| `level`                                              | [components.Range](../../models/components/range.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `scarcity`                                           | [components.Range](../../models/components/range.md) | :heavy_minus_sign:                                   | N/A                                                  |