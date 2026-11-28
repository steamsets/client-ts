# FeatureUsagePage

## Example Usage

```typescript
import { FeatureUsagePage } from "@steamsets/client-ts/models/components";

let value: FeatureUsagePage = {
  feature: "tools",
  key: "handshake",
  paths: [
    "/tools/handshake",
  ],
  routes: [
    "/tools/handshake",
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `feature`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | The feature the page belongs to, as the areas map its routes                               | tools                                                                                      |
| `key`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | The page's key, unique within its feature; other-pages is taken                            | handshake                                                                                  |
| `paths`                                                                                    | *string*[]                                                                                 | :heavy_check_mark:                                                                         | Path patterns of the page's views in route id syntax: $x is one segment, a last $ any rest | [<br/>"/tools/handshake"<br/>]                                                             |
| `routes`                                                                                   | *string*[]                                                                                 | :heavy_check_mark:                                                                         | The route ids whose custom events belong to the page                                       | [<br/>"/tools/handshake"<br/>]                                                             |