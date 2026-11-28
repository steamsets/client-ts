# FeatureUsageArea

## Example Usage

```typescript
import { FeatureUsageArea } from "@steamsets/client-ts/models/components";

let value: FeatureUsageArea = {
  feature: "compare",
  prefix: "/badges/compare",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `feature`                                         | *string*                                          | :heavy_check_mark:                                | The feature key of the routes under the prefix    | compare                                           |
| `prefix`                                          | *string*                                          | :heavy_check_mark:                                | A route id prefix; it matches whole path segments | /badges/compare                                   |