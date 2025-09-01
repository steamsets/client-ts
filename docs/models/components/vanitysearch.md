# VanitySearch

## Example Usage

```typescript
import { VanitySearch } from "@steamsets/client-ts/models/components";

let value: VanitySearch = {
  type: "steam",
  value: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_check_mark:                                 | Which type of vanity to search for                 |
| `value`                                            | *string*                                           | :heavy_check_mark:                                 | Vanity to search for                               |