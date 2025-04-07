# V1BadgeTagBadgeRequestBody

## Example Usage

```typescript
import { V1BadgeTagBadgeRequestBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeTagBadgeRequestBody = {
  badgeId: "bdg_123",
  colors: [
    {
      id: "bdg_col_2r2pqaIpB1zllfZIvUE3OWadIOS",
      remove: true,
    },
  ],
  designs: [
    {
      id: "bdg_des_2r3yFWjSJzH89FKbYgpkJxF24ZL",
      name: "cat",
      remove: true,
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `badgeId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | The badge id                                                                     | bdg_123                                                                          |
| `colors`                                                                         | [components.SetRemoveColorTag](../../models/components/setremovecolortag.md)[]   | :heavy_check_mark:                                                               | All the colors of the badge                                                      |                                                                                  |
| `designs`                                                                        | [components.SetRemoveDesignTag](../../models/components/setremovedesigntag.md)[] | :heavy_check_mark:                                                               | All the designs of the badge                                                     |                                                                                  |