# AdminBadgeTagsAITags

## Example Usage

```typescript
import { AdminBadgeTagsAITags } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsAITags = {
  badges: 698991,
  colors: 21278,
  designs: 571837,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `badges`                                                    | *number*                                                    | :heavy_check_mark:                                          | Badges with at least one tag the AI applied without review. |
| `colors`                                                    | *number*                                                    | :heavy_check_mark:                                          | Colour tags it applied.                                     |
| `designs`                                                   | *number*                                                    | :heavy_check_mark:                                          | Design tags it applied.                                     |