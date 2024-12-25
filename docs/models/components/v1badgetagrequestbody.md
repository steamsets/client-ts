# V1BadgeTagRequestBody

## Example Usage

```typescript
import { V1BadgeTagRequestBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeTagRequestBody = {
  badgeId: "bdg_123",
  colors: [
    949319,
  ],
  designs: [
    {
      id: 1,
      name: "cat",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `badgeId`                                                            | *string*                                                             | :heavy_check_mark:                                                   | The badge id                                                         | bdg_123                                                              |
| `colors`                                                             | *number*[]                                                           | :heavy_check_mark:                                                   | All the colors of the badge                                          |                                                                      |
| `designs`                                                            | [components.SetDesignTag](../../models/components/setdesigntag.md)[] | :heavy_check_mark:                                                   | All the designs of the badge                                         |                                                                      |