# BadgeSetTagsRequestBody

## Example Usage

```typescript
import { BadgeSetTagsRequestBody } from "@steamsets/client-ts/models/components";

let value: BadgeSetTagsRequestBody = {
  badgeId: "<id>",
  expectedTagsVersion: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `badgeId`                                                                                                           | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `colors`                                                                                                            | *string*[]                                                                                                          | :heavy_minus_sign:                                                                                                  | Complete desired color tag IDs. An empty array removes every color.                                                 |
| `designs`                                                                                                           | [components.BadgeSetTagsDesign](../../models/components/badgesettagsdesign.md)[]                                    | :heavy_minus_sign:                                                                                                  | Complete desired designs, selected by ID or created by name. An empty array removes every design.                   |
| `expectedTagsVersion`                                                                                               | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The tagsVersion returned by getTags or a previous setTags. A stale token is rejected with 409.                      |
| `metadata`                                                                                                          | [components.BadgeSetTagsDesign](../../models/components/badgesettagsdesign.md)[]                                    | :heavy_minus_sign:                                                                                                  | Complete desired non-visual metadata, selected by ID or created by name. An empty array removes every metadata tag. |