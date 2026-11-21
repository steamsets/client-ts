# AdminBadgeTagsWriteBody

## Example Usage

```typescript
import { AdminBadgeTagsWriteBody } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsWriteBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminBadgeTagsWriteBody.json",
  count: 314449,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `dollarSchema`                                                 | *string*                                                       | :heavy_minus_sign:                                             | A URL to the JSON Schema for this object.                      | https://api.steamsets.com/schemas/AdminBadgeTagsWriteBody.json |
| `count`                                                        | *number*                                                       | :heavy_check_mark:                                             | How many badges the action changed.                            |                                                                |