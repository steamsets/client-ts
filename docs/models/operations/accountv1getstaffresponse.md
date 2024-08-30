# AccountV1GetStaffResponse

## Example Usage

```typescript
import { AccountV1GetStaffResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1GetStaffResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    leaderboardAccounts: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `leaderboardAccounts`                                                            | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)[] | :heavy_minus_sign:                                                               | OK                                                                               |