# AdminRolesGrantDefinition

## Example Usage

```typescript
import { AdminRolesGrantDefinition } from "@steamsets/client-ts/models/components";

let value: AdminRolesGrantDefinition = {
  description: "Open the Steamsets admin panel",
  grant: "admin.access",
  sensitive: true,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `description`                                           | *string*                                                | :heavy_check_mark:                                      | What the grant lets its holder do                       | Open the Steamsets admin panel                          |
| `grant`                                                 | *string*                                                | :heavy_check_mark:                                      | The grant key                                           | admin.access                                            |
| `sensitive`                                             | *boolean*                                               | :heavy_check_mark:                                      | Whether only a caller holding the grant may hand it out | true                                                    |