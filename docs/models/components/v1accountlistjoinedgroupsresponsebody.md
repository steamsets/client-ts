# V1AccountListJoinedGroupsResponseBody

## Example Usage

```typescript
import { V1AccountListJoinedGroupsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListJoinedGroupsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountListJoinedGroupsResponseBody.json",
  groups: [],
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                                            | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | A URL to the JSON Schema for this object.                                                                                                 | https://api.steamsets.com/schemas/V1AccountListJoinedGroupsResponseBody.json                                                              |
| `groups`                                                                                                                                  | [components.V1OwnedGroup](../../models/components/v1ownedgroup.md)[]                                                                      | :heavy_check_mark:                                                                                                                        | The groups you are a member of, by name, as your account's last refresh read them from Steam. Steam lists them only for a public profile. |                                                                                                                                           |