# CustomRoleListCustomResponseBody

## Example Usage

```typescript
import { CustomRoleListCustomResponseBody } from "@steamsets/client-ts/models/components";

let value: CustomRoleListCustomResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/CustomRoleListCustomResponseBody.json",
  items: [
    {
      description: "Friend of SteamSets",
      iconUrl: "https://cdn.steamsets.com/web/roles/custom/stasik-1.png",
      name: "Stasik",
      rating: 120,
      role: "stasik",
    },
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `dollarSchema`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | A URL to the JSON Schema for this object.                               | https://api.steamsets.com/schemas/CustomRoleListCustomResponseBody.json |
| `items`                                                                 | [components.CustomRole](../../models/components/customrole.md)[]        | :heavy_check_mark:                                                      | Every role, highest rank first                                          |                                                                         |