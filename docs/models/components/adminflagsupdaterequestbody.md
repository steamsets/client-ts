# AdminFlagsUpdateRequestBody

## Example Usage

```typescript
import { AdminFlagsUpdateRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminFlagsUpdateRequestBody = {
  defaultEnabled: false,
  flag: "bots",
  roles: [
    "staff",
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `defaultEnabled`                                                       | *boolean*                                                              | :heavy_check_mark:                                                     | The new default, or null to remove the row so the code default applies |                                                                        |
| `flag`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The flag slug, matching ^[a-z][a-z0-9_]{1,63}$                         | bots                                                                   |
| `roles`                                                                | *string*[]                                                             | :heavy_check_mark:                                                     | Every role whose holders get the flag on. Replaces the current set     | [<br/>"staff"<br/>]                                                    |