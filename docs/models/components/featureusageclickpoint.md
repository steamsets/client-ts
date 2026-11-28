# FeatureUsageClickPoint

## Example Usage

```typescript
import { FeatureUsageClickPoint } from "@steamsets/client-ts/models/components";

let value: FeatureUsageClickPoint = {
  layout: "desktop",
  section: "handshake-graph",
  x: 529990,
  y: 184873,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `layout`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | phone, tablet or desktop                                                        | desktop                                                                         |
| `section`                                                                       | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | handshake-graph                                                                 |
| `x`                                                                             | *number*                                                                        | :heavy_check_mark:                                                              | Per-mille of the section's width, or for section page of the viewport's         |                                                                                 |
| `y`                                                                             | *number*                                                                        | :heavy_check_mark:                                                              | Per-mille of the section's height, or for section page px from the document top |                                                                                 |