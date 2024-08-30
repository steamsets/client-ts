# AccountV1GetFriendsResponse

## Example Usage

```typescript
import { AccountV1GetFriendsResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1GetFriendsResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    v1AccountFriendsResponseBody: {
        dollarSchema: "http://localhost:8080/schemas/V1AccountFriendsResponseBody.json",
        friends: [],
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `v1AccountFriendsResponseBody`                                                                     | [components.V1AccountFriendsResponseBody](../../models/components/v1accountfriendsresponsebody.md) | :heavy_minus_sign:                                                                                 | OK                                                                                                 |