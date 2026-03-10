# V1AccountListOwnedGroupsResponseBody

## Example Usage

```typescript
import { V1AccountListOwnedGroupsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListOwnedGroupsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountListOwnedGroupsResponseBody.json",
  groups: [],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `dollarSchema`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | A URL to the JSON Schema for this object.                                   | https://api.steamsets.com/schemas/V1AccountListOwnedGroupsResponseBody.json |
| `groups`                                                                    | [components.V1OwnedGroup](../../models/components/v1ownedgroup.md)[]        | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |