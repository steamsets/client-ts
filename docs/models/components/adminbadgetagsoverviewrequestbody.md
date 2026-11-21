# AdminBadgeTagsOverviewRequestBody

## Example Usage

```typescript
import { AdminBadgeTagsOverviewRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsOverviewRequestBody = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `top`                                                                                                                    | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | How many tags and changed badges to list.                                                                                |
| `window`                                                                                                                 | [components.AdminBadgeTagsOverviewRequestBodyWindow](../../models/components/adminbadgetagsoverviewrequestbodywindow.md) | :heavy_minus_sign:                                                                                                       | How far back reviews, acceptance, new tags and changed badges look.                                                      |