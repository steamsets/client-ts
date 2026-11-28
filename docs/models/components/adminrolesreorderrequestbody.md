# AdminRolesReorderRequestBody

## Example Usage

```typescript
import { AdminRolesReorderRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminRolesReorderRequestBody = {
  roles: [
    "owner",
    "developer",
    "staff",
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `roles`                                                                    | *string*[]                                                                 | :heavy_check_mark:                                                         | Every role, highest rank first. It must name each stored role exactly once | [<br/>"owner",<br/>"developer",<br/>"staff"<br/>]                          |