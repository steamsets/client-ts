# AdminRolesListBody

## Example Usage

```typescript
import { AdminRolesListBody } from "@steamsets/client-ts/models/components";

let value: AdminRolesListBody = {
  dollarSchema: "https://api.steamsets.com/schemas/AdminRolesListBody.json",
  grants: [],
  resources: [],
  roles: [
    {
      assignmentRules: 0,
      description: "Helps keep the community running smoothly",
      featureFlags: [
        "<value 1>",
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
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A URL to the JSON Schema for this object.                                                            | https://api.steamsets.com/schemas/AdminRolesListBody.json                                            |
| `grants`                                                                                             | [components.AdminRolesGrantDefinition](../../models/components/adminrolesgrantdefinition.md)[]       | :heavy_check_mark:                                                                                   | Every grant defined in code, in catalog order                                                        |                                                                                                      |
| `resources`                                                                                          | [components.AdminRolesResourceDefinition](../../models/components/adminrolesresourcedefinition.md)[] | :heavy_check_mark:                                                                                   | Every resource a role can grant, with its value format                                               |                                                                                                      |
| `roles`                                                                                              | [components.AdminRolesListRole](../../models/components/adminroleslistrole.md)[]                     | :heavy_check_mark:                                                                                   | Every role, highest rating first                                                                     |                                                                                                      |