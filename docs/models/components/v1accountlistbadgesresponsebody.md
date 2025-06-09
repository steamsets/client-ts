# V1AccountListBadgesResponseBody

## Example Usage

```typescript
import { V1AccountListBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListBadgesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountListBadgesResponseBody.json",
  badges: [],
  pages: 1,
  totalHits: 1,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `dollarSchema`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | A URL to the JSON Schema for this object.                              | https://api.steamsets.com/schemas/V1AccountListBadgesResponseBody.json |
| `badges`                                                               | [components.V1AppBadge](../../models/components/v1appbadge.md)[]       | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `pages`                                                                | *number*                                                               | :heavy_check_mark:                                                     | The number of pages                                                    | 1                                                                      |
| `totalHits`                                                            | *number*                                                               | :heavy_check_mark:                                                     | The total number of hits for all pages                                 | 1                                                                      |