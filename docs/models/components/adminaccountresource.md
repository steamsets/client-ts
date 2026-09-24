# AdminAccountResource

## Example Usage

```typescript
import { AdminAccountResource } from "@steamsets/client-ts/models/components";

let value: AdminAccountResource = {
  inherited: {
    role: "diamond",
    value: "600000",
  },
  otherRoles: [],
  override: {
    updatedAt: new Date("2025-02-13T15:18:23.164Z"),
    updatedBy: 900768,
    updatedByName: "<value>",
    value: "60000",
  },
  resource: "short_link_domain",
  role: "diamond",
  source: "role",
  value: "600000",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `inherited`                                                                                                    | [components.AdminAccountResourceInherited](../../models/components/adminaccountresourceinherited.md)           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `otherRoles`                                                                                                   | [components.AdminAccountResourceRoleValue](../../models/components/adminaccountresourcerolevalue.md)[]         | :heavy_check_mark:                                                                                             | Values from the account's other roles that lose to the one in inherited, highest rating first                  |                                                                                                                |
| `override`                                                                                                     | [components.AdminAccountResourceOverride](../../models/components/adminaccountresourceoverride.md)             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `resource`                                                                                                     | [components.AdminAccountResourceResource](../../models/components/adminaccountresourceresource.md)             | :heavy_check_mark:                                                                                             | The resource                                                                                                   |                                                                                                                |
| `role`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The role the value comes from, when source is role                                                             | diamond                                                                                                        |
| `source`                                                                                                       | [components.Source](../../models/components/source.md)                                                         | :heavy_check_mark:                                                                                             | Where the value comes from                                                                                     | role                                                                                                           |
| `value`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The value that applies, or null when no override or held role grants the resource and the code default applies | 600000                                                                                                         |