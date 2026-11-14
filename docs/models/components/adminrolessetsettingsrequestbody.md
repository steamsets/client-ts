# AdminRolesSetSettingsRequestBody

## Example Usage

```typescript
import { AdminRolesSetSettingsRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminRolesSetSettingsRequestBody = {
  hideOnLeaderboards: true,
  hideOnProfile: false,
  role: "top_100",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `hideOnLeaderboards`                    | *boolean*                               | :heavy_check_mark:                      | Whether leaderboards leave the role out | true                                    |
| `hideOnProfile`                         | *boolean*                               | :heavy_check_mark:                      | Whether profiles leave the role out     | false                                   |
| `role`                                  | *string*                                | :heavy_check_mark:                      | The role slug, built-in or custom       | top_100                                 |