# AdminRolesListRole

## Example Usage

```typescript
import { AdminRolesListRole } from "@steamsets/client-ts/models/components";

let value: AdminRolesListRole = {
  assignmentRules: 0,
  description: "Helps keep the community running smoothly",
  featureFlags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  grants: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  hideOnLeaderboards: false,
  hideOnProfile: false,
  holders: 8,
  iconUrl: "",
  name: "Staff",
  rating: 98,
  resources: [
    {
      resource: "vanity",
      value: "3",
    },
  ],
  role: "staff",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `assignmentRules`                                                                                                           | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | How many integration rules (a Patreon tier, a Discord boost) assign the role. A role with members or rules can't be deleted | 0                                                                                                                           |
| `description`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The tooltip text stored for the role                                                                                        | Helps keep the community running smoothly                                                                                   |
| `featureFlags`                                                                                                              | *string*[]                                                                                                                  | :heavy_check_mark:                                                                                                          | The feature flags the role turns on, by slug                                                                                |                                                                                                                             |
| `grants`                                                                                                                    | *string*[]                                                                                                                  | :heavy_check_mark:                                                                                                          | The grants the role carries, sorted. A caller needs every sensitive one to grant or remove the role                         |                                                                                                                             |
| `hideOnLeaderboards`                                                                                                        | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | Whether leaderboards leave the role out. Stored in the role's settings                                                      | false                                                                                                                       |
| `hideOnProfile`                                                                                                             | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | Whether profiles leave the role out. Stored in the role's settings                                                          | false                                                                                                                       |
| `holders`                                                                                                                   | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | How many accounts hold the role                                                                                             | 8                                                                                                                           |
| `iconUrl`                                                                                                                   | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The uploaded icon. Empty until an owner uploads one, and the role then shows the icon that ships for its slug               |                                                                                                                             |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The display name stored for the role                                                                                        | Staff                                                                                                                       |
| `rating`                                                                                                                    | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | The rank. Higher ratings win resource conflicts and gate role grants                                                        | 98                                                                                                                          |
| `resources`                                                                                                                 | [components.AdminRolesResourceValue](../../models/components/adminrolesresourcevalue.md)[]                                  | :heavy_check_mark:                                                                                                          | The resource values the role grants, by resource key                                                                        |                                                                                                                             |
| `role`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The role slug                                                                                                               | staff                                                                                                                       |