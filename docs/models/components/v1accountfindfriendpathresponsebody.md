# V1AccountFindFriendPathResponseBody

## Example Usage

```typescript
import { V1AccountFindFriendPathResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountFindFriendPathResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountFindFriendPathResponseBody.json",
  found: false,
  paths: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | https://api.steamsets.com/schemas/V1AccountFindFriendPathResponseBody.json |
| `found`                                                                    | *boolean*                                                                  | :heavy_check_mark:                                                         | Whether any path was found                                                 |                                                                            |
| `paths`                                                                    | [components.FriendPath](../../models/components/friendpath.md)[]           | :heavy_check_mark:                                                         | Paths sorted ascending by distance                                         |                                                                            |