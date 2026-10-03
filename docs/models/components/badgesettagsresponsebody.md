# BadgeSetTagsResponseBody

## Example Usage

```typescript
import { BadgeSetTagsResponseBody } from "@steamsets/client-ts/models/components";

let value: BadgeSetTagsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/BadgeSetTagsResponseBody.json",
  closedReview: false,
  colors: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  designs: [],
  metadata: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  tagsVersion: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | A URL to the JSON Schema for this object.                                              | https://api.steamsets.com/schemas/BadgeSetTagsResponseBody.json                        |
| `closedReview`                                                                         | *boolean*                                                                              | :heavy_check_mark:                                                                     | True when the edit marked the badge's pending tag review as done.                      |                                                                                        |
| `colors`                                                                               | [components.BadgeSetTagsTag](../../models/components/badgesettagstag.md)[]             | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `designs`                                                                              | [components.BadgeSetTagsTag](../../models/components/badgesettagstag.md)[]             | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `metadata`                                                                             | [components.BadgeSetTagsTag](../../models/components/badgesettagstag.md)[]             | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `tagsVersion`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Opaque optimistic-concurrency token for the new tag set. Pass it to make another edit. |                                                                                        |