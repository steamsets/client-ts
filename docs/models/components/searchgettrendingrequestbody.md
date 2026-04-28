# SearchGetTrendingRequestBody

## Example Usage

```typescript
import { SearchGetTrendingRequestBody } from "@steamsets/client-ts/models/components";

let value: SearchGetTrendingRequestBody = {
  source: "account",
  window: "24h",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                        | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Max queries returned. Default 100.                                                                             |
| `source`                                                                                                       | [components.Source](../../models/components/source.md)                                                         | :heavy_check_mark:                                                                                             | Which search surface to query.                                                                                 |
| `window`                                                                                                       | [components.SearchGetTrendingRequestBodyWindow](../../models/components/searchgettrendingrequestbodywindow.md) | :heavy_check_mark:                                                                                             | Lookback window for trending compute.                                                                          |