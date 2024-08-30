# V1AccountFriendsResponseBody

## Example Usage

```typescript
import { V1AccountFriendsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountFriendsResponseBody = {
    dollarSchema: "http://localhost:8080/schemas/V1AccountFriendsResponseBody.json",
    friends: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | http://localhost:8080/schemas/V1AccountFriendsResponseBody.json            |
| `friends`                                                                  | [components.V1AccountFriend](../../models/components/v1accountfriend.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |